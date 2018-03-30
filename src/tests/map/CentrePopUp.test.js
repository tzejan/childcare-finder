import React from "react";
import { shallow, mount } from "enzyme";
import CentrePopup from "../../map/CentrePopUp";

describe("CentrePopUp test", () => {
  describe("CentrePopUp creation", () => {
    it("should be created properly", () => {
      let testData = { longitude: 103.894482346, latitude: 1.38975552500006 };
      const wrapper = shallow(<CentrePopup data={testData} />);

      expect(wrapper.exists()).toEqual(true);
    });
    it("should have popup and CentreInfo created", () => {
      let testData = { longitude: 103.894482346, latitude: 1.38975552500006 };
      const wrapper = shallow(<CentrePopup data={testData} />);
      
      expect(wrapper.children("Popup").exists()).toEqual(true);
      expect(
        wrapper
          .children("Popup")
          .children("WithStyles(CentreInfo)")
          .exists()
      ).toEqual(true);
    });
  });
});
