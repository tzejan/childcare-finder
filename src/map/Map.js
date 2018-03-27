import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Pin from "./Pin";
import CentreInfo from './CentreInfo';

const h = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);
const w = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);

let data = {
  centre_name: "E-BRIDGE PRE-SCHOOL PTE LTD",
  centre_address:
    "217, COMPASSVALE DRIVE, #01 - 11, MULTI STOREY CAR PARK, SINGAPORE 540217",
  contact_no: "63865350",
  fees_charged: "$770.4",
  licence_tenure: "24",
  latitude: 1.38975552500006,
  longitude: 103.894482346
};

class Map extends Component {
  state = {
    viewport: {
      width: w,
      height: h,
      latitude: 1.3511794,
      longitude: 103.8169943,
      zoom: 11
      // 1.3511794,103.8169943,12.09z
    }
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
    console.log(this.state);
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
        <Marker
          key={`marker-1`}
          longitude={data.longitude}
          latitude={data.latitude}
        >
          <Pin size={20} onClick={() => {}} />
        </Marker>

        <Popup
          tipSize={5}
          anchor="top"
          longitude={data.longitude}
          latitude={data.latitude}
          onClose={() => {}}
        >
          <CentreInfo info={data} />
        </Popup>
      </ReactMapGL>
    );
  }
}

export default Map;
