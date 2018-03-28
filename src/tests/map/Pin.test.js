import React from "react";
import { shallow } from "enzyme";
import Pin from "../../map/Pin";

describe("Pin Test", () => {
  describe("Pin creation", () => {
    it("should create correctly", () => {
      const wrapper = shallow(<Pin />);

      expect(wrapper.exists()).toEqual(true);
    });
  });
});
