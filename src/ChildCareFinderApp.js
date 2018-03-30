import React, { Component } from "react";
import "./ChildCareFinderApp.css";
import Map from "./map/Map";
import Omnibox from "./Omnibox/Omnibox";
import data from "./data/data.json";

class ChildCareFinderApp extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchParams: { freeText: "" },
      zoomTo: null
    };
    this.searchForCentre = this.searchForCentre.bind(this);
    this.zoomToChildCareCentre = this.zoomToChildCareCentre.bind(this);
    this._filterDataBySearchKey = this._filterDataBySearchKey.bind(this);
  }

  componentWillMount() {
    // this.setState({ data: this.getValidData() });
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
      this._filterDataBySearchKey(searchKey);
    } catch (error) {
      console.log(error.message);
    }
  }

  _filterDataBySearchKey(searchKey) {
    if (searchKey.length < 1){
      this.setState({ data: [] });
      return;
    }
    let regex = RegExp(searchKey, "i");
    let filteredData = this.getValidData().filter(centre =>
      regex.test([centre.centre_name, centre.centre_address].join(" "))
    );
    this.setState({ data: filteredData });
  }

  getValidData() {
    return data.filter(centre => centre.longitude !== undefined);
  }

  zoomToChildCareCentre(centreIndex, event){
    this.setState({zoomTo: centreIndex});
  }
}

export default ChildCareFinderApp;
