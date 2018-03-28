/**
 * @jest-environment node
 */
import React from "react";
import { shallow } from "enzyme";
import CentrePopup from "../map/CentrePopUp";

describe("CentrePopUp test", () => {
  describe("CentrePopUp creation", () => {
    it("should be created properly", () => {
      let testData = { longitude: 103.894482346, latitude: 1.38975552500006 };
      const wrapper = shallow(<CentrePopup data={testData} />);

      expect(wrapper.exists()).toEqual(true);
    });
  });
});
