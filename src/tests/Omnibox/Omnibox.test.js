import React from "react";
import { shallow } from "enzyme";
import Omnibox from "../../Omnibox/OmniBox";

describe("Omnibox tests", () => {
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
  describe("Creation", () => {
    it("should create properly", () => {
        let searchVal = "school";
      const wrapper = shallow(
        <Omnibox
          onSearch={() => {}}
          searchValue={searchVal}
          data={data}
        />
      );

      expect(wrapper.exists()).toEqual(true);
    });
  });
});
