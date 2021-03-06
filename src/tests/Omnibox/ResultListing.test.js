import React from "react";
import { shallow } from "enzyme";
import ResultListing from "../../Omnibox/ResultListing";

describe("ResultListing Tests", () => {
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
  describe("ResultListing creation", () => {
    it("should create correctly", () => {
      const wrapper = shallow(<ResultListing data={data} zoomToChildCareCentre={()=>{}}/>);

      expect(wrapper.exists()).toEqual(true);
    });

    it("should create the right number of items", () => {
      const wrapper = shallow(<ResultListing data={data} zoomToChildCareCentre={()=>{}}/>);

      expect(wrapper.children().length).toEqual(2);
    });
  });
});
