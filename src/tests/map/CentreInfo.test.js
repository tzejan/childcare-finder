import React from "react";
import { shallow } from "enzyme";
import CentreInfo from "../../map/CentreInfo";

describe("CentreInfo test", () => {
  let testData = {
    centre_name: "E-BRIDGE PRE-SCHOOL PTE LTD",
    centre_address:
      "217, COMPASSVALE DRIVE, #01 - 11, MULTI STOREY CAR PARK, SINGAPORE 540217",
    contact_no: "63865350",
    fees_charged: "$770.4"
  };
  describe("CentreInfo Creation", () => {
    it("should be created properly", () => {
      const wrapper = shallow(<CentreInfo info={testData} />);

      expect(wrapper.exists()).toEqual(true);
    });

    xit("should have the right data", () => {
      const wrapper = shallow(<CentreInfo info={testData} />);
      const cardContent = wrapper.childAt(1).childAt(1).childAt(0);
      console.log(">",wrapper.find('CentreInfo').debug());

      expect(cardContent.childAt(0).text()).toEqual(testData.centre_name);
      expect(cardContent.childAt(1).text()).toEqual(testData.centre_address);
      expect(cardContent.childAt(2).text()).toEqual(testData.contact_no);
      expect(cardContent.childAt(3).text()).toEqual(testData.fees_charged);
    });
  });
});
