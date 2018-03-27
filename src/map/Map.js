import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import Pins from "./Pins";
import CentrePopUps from "./CentrePopUps";
import LoadMapData from "../utils/LoadMapData";
import data from "../data/data.json";
console.log(data.length);

let adata = {
  centre_name: "E-BRIDGE PRE-SCHOOL PTE LTD",
  centre_address:
    "217, COMPASSVALE DRIVE, #01 - 11, MULTI STOREY CAR PARK, SINGAPORE 540217",
  contact_no: "63865350",
  fees_charged: "$770.4",
  licence_tenure: "24",
  latitude: 1.38975552500006,
  longitude: 103.894482346,
  hideInfo: true,
  hidePin: false
};

class Map extends Component {
  state = {
    viewport: {
      width: 800,
      height: 600,
      latitude: 1.3511794,
      longitude: 103.8169943,
      zoom: 11
    },
    data: data
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
      >
        <Pins
          data={this.state.data}
          togglePopUp={this.togglePopUp.bind(this)}
        />
        <CentrePopUps
          data={this.state.data}
          togglePopUp={this.togglePopUp.bind(this)}
        />
      </ReactMapGL>
    );
  }

  togglePopUp(idx, forceClose) {
    console.log("clicked", forceClose, this.state.data);
    let updatedData = this.state.data;
    updatedData.hideInfo = forceClose || !updatedData.hideInfo;
    this.setState({ data: updatedData });
  }
}

export default Map;
