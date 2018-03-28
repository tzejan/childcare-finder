import React from "react";
import { shallow } from "enzyme";
import CentreMarker from "../../map/CentreMarker";

describe("CentreMarker test", () => {
  let testData = {
    centre_name: "E-BRIDGE PRE-SCHOOL PTE LTD",
    centre_address:
      "217, COMPASSVALE DRIVE, #01 - 11, MULTI STOREY CAR PARK, SINGAPORE 540217",
    contact_no: "63865350",
    fees_charged: "$770.4"
  };
  describe("CentreMarker Creation", () => {
    it("should be created properly", () => {
      const wrapper = shallow(<CentreMarker data={testData} />);

      expect(wrapper.exists()).toEqual(true);
    });
    it("should have CentrePin and CentrePopUp", () => {
      const wrapper = shallow(<CentreMarker data={testData} />);

      expect(wrapper.childAt(0).text()).toEqual("<CentrePin />");
    });
  });
});
