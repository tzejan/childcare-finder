import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../../Omnibox/SearchBar";

describe("SearchBar tests", () => {
  describe("SearchBar creation", () => {
    it("should create correctly", () => {
      const wrapper = shallow(<SearchBar />);

      expect(wrapper.exists()).toEqual(true);
    });
  });

  it("should have the value passed in by the props", () => {
    let value = "Ayataka Green Tea";
    const wrapper = shallow(<SearchBar searchValue={value} />);

    expect(wrapper.props().searchValue).toEqual(value);
  });

  it("should expect calls to be made on changes to search bar", () => {
    let value = "Ayataka Green Tea";
    const mockHandler = jest.fn();
    const wrapper = shallow(<SearchBar searchValue={value} onChange={mockHandler} />);

    wrapper.simulate('change', { target: { value: '7' } });
    expect(mockHandler).toHaveBeenCalled();
    expect(mockHandler.mock.calls.length).toEqual(1);
  });
});
