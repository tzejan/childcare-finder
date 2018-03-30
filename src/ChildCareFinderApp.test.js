

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import ChildCareFinderApp from './ChildCareFinderApp';
import './ChildCareFinderApp.css';

describe('ChildCareFinder tests', () => {
  describe('ChildCareFinder creation', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ChildCareFinderApp />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('Search input tests', () => {
    it('should accept valid search keys', () => {
      let searchVal = "Ayataka Green Tea";
      let wrapper = shallow(<ChildCareFinderApp />);

      wrapper.instance().searchForCentre(searchVal);
      expect(wrapper.state().searchParams.freeText).toEqual(searchVal);
    });

    it('should not accept invalid search keys', () => {
      let searchVal = "*";
      let wrapper = shallow(<ChildCareFinderApp />);

      wrapper.instance().searchForCentre(searchVal);
      expect(wrapper.state().searchParams.freeText).toEqual("");
    });
  });

  describe('Zoom to test', () => {
    it('should set state correctly', () => {
      let centreIndex = 9;
      let wrapper = shallow(<ChildCareFinderApp />);

      wrapper.instance().zoomToChildCareCentre(centreIndex);
      expect(wrapper.state().zoomTo).toEqual(centreIndex);
    });
  });

  describe('Filter Results test', () => {
    let data = [
      {
        centre_name: "E-BRIDGE PRE-SCHOOL PTE. LTD.",
        centre_address: "116A, RIVERVALE DRIVE, #01 - 08, SINGAPORE 541116",
        contact_no: "64892141",
        fees_charged: "$770.4",
        licence_tenure: "24",
        latitude: 1.38246038100004,
        longitude: 103.902238675
      },
      {
        centre_name: "E-BRIDGE PRE-SCHOOL PTE. LTD.",
        centre_address: "615B, EDGEFIELD PLAINS, #01 - 339, SINGAPORE 822615",
        contact_no: "65090242",
        fees_charged: "$770.4",
        licence_tenure: "24",
        latitude: 1.40374588200007,
        longitude: 103.909882889
      }
    ];

    it('should return matched results in the centre name', () => {
      let searchVal = "SCHOOL";
      let wrapper = shallow(<ChildCareFinderApp />);
      let mockFilterData = jest.fn();
      mockFilterData.mockReturnValue(data);
      wrapper.instance().getValidData = mockFilterData;
      wrapper.update();

      wrapper.instance()._filterDataBySearchKey(searchVal);
      expect(wrapper.state().data.length).toEqual(2);
    });

    it('should return matched results in the centre address', () => {
      let searchVal = "EDGEFIELD";
      let wrapper = shallow(<ChildCareFinderApp />);
      let mockFilterData = jest.fn();
      mockFilterData.mockReturnValue(data);
      wrapper.instance().getValidData = mockFilterData;
      wrapper.update();

      wrapper.instance()._filterDataBySearchKey(searchVal);
      expect(wrapper.state().data.length).toEqual(1);
    });

    it('should return matched results regardless of case', () => {
      let searchVal = "SiNgApOrE";
      let wrapper = shallow(<ChildCareFinderApp />);
      let mockFilterData = jest.fn();
      mockFilterData.mockReturnValue(data);
      wrapper.instance().getValidData = mockFilterData;
      wrapper.update();

      wrapper.instance()._filterDataBySearchKey(searchVal);
      expect(wrapper.state().data.length).toEqual(2);
    });

    it('should return no results if theres no match', () => {
      let searchVal = "busy bees";
      let wrapper = shallow(<ChildCareFinderApp />);
      let mockFilterData = jest.fn();
      mockFilterData.mockReturnValue(data);
      wrapper.instance().getValidData = mockFilterData;
      wrapper.update();

      wrapper.instance()._filterDataBySearchKey(searchVal);
      expect(wrapper.state().data.length).toEqual(0);
    });

    it('should return no results and not search if search string is empty', () => {
      let searchVal = "";
      let wrapper = shallow(<ChildCareFinderApp />);
      let mockFilterData = jest.fn();
      mockFilterData.mockReturnValue(data);
      wrapper.instance().getValidData = mockFilterData;
      wrapper.update();

      wrapper.instance()._filterDataBySearchKey(searchVal);
      expect(wrapper.state().data.length).toEqual(0);
    });
  });
});
