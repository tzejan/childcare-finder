/**
 * @jest-environment node
 */
import React from "react";
import { shallow } from "enzyme";
import CentrePin from "../../map/CentrePin";

describe("CentrePin test", () => {
  describe("CentrePin Creation", () => {
    it("should be created properly", () => {
      let testData = { longitude: 103.894482346, latitude: 1.38975552500006 };
      const wrapper = shallow(<CentrePin data={testData} />);

      expect(wrapper.exists()).toEqual(true);
    });

    it("should create the marker and the pin", () => {
      let testData = { longitude: 103.894482346, latitude: 1.38975552500006 };
      const wrapper = shallow(<CentrePin data={testData} />);

      expect(wrapper.children("Marker").exists()).toEqual(true);
      expect(
        wrapper
          .children("Marker")
          .children("Pin")
          .exists()
      ).toEqual(true);
    });
  });
  xdescribe('OnClick', () => {
      
  });
});
