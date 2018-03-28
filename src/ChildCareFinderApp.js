import React, { Component } from "react";
import "./ChildCareFinderApp.css";
import Map from "./map/Map";
import Omnibox from "./Omnibox/Omnibox";
import data from "./data/data.json";
console.log("after import", data.length);

// let adata = {
//   centre_name: "E-BRIDGE PRE-SCHOOL PTE LTD",
//   centre_address:
//     "217, COMPASSVALE DRIVE, #01 - 11, MULTI STOREY CAR PARK, SINGAPORE 540217",
//   contact_no: "63865350",
//   fees_charged: "$770.4",
//   licence_tenure: "24",
//   latitude: 1.38975552500006,
//   longitude: 103.894482346,
//   hideInfo: true,
//   hidePin: false
// };

class ChildCareFinderApp extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      searchParams: { freeText: "" }
    };
    this.searchForCentre = this.searchForCentre.bind(this);
    this.filterDataBySearchKey = this.filterDataBySearchKey.bind(this);
  }

  componentWillMount() {
    this.setState({ data: this.getValidData() });
  }
  render() {
    return (
      <div>
        <Omnibox
          onSearch={this.searchForCentre}
          searchValue={this.state.searchParams.freeText}
        />
        <Map data={this.state.data} />
      </div>
    );
  }

  searchForCentre(searchKey) {
    this.setState({ searchParams: { freeText: searchKey } });
    this.filterDataBySearchKey();
  }

  filterDataBySearchKey() {
    const searchKey = this.state.searchParams.freeText;
    let regex = RegExp(searchKey, "gi");
    let filteredData = this.getValidData().filter(centre =>
      regex.test(centre.centre_name)
    );
    this.setState({ data: filteredData });
  }

  getValidData() {
    return data.slice(0, 300).filter(centre => centre.longitude !== undefined);
  }
}

export default ChildCareFinderApp;
