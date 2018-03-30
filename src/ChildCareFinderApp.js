import React, { Component } from "react";
import "./ChildCareFinderApp.css";
import Map from "./map/Map";
import Omnibox from "./Omnibox/Omnibox";
import data from "./data/data.json";

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
      data: [],
      searchParams: { freeText: "" },
      zoomTo: null
    };
    this.searchForCentre = this.searchForCentre.bind(this);
    this.filterDataBySearchKey = this.filterDataBySearchKey.bind(this);
    this.zoomToChildCareCentre = this.zoomToChildCareCentre.bind(this);
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
          zoomToChildCareCentre={this.zoomToChildCareCentre}
          data={this.state.data}
          dbCount={data.length}
        />
        <Map data={this.state.data} zoomTo={this.state.zoomTo} />
      </div>
    );
  }

  searchForCentre(searchKey) {
    try {
      RegExp(searchKey, "i");
      this.setState({ searchParams: { freeText: searchKey } });
      this.filterDataBySearchKey(searchKey);
    } catch (error) {
      console.log(error.message);
    }
  }

  filterDataBySearchKey(searchKey) {
    let regex = RegExp(searchKey, "i");
    let filteredData = this.getValidData().filter(centre =>
      regex.test([centre.centre_name, centre.centre_address].join(" "))
    );
    this.setState({ data: filteredData });
  }

  getValidData() {
    return data.slice(0, 30).filter(centre => centre.longitude !== undefined);
  }

  zoomToChildCareCentre(centreIndex, event){
    this.setState({zoomTo: centreIndex});
  }
}

export default ChildCareFinderApp;
