import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import CentreMarker from "./CentreMarker";

class Map extends Component {
  constructor(props) {
    super();
    console.log("constructor" + props.data.length);
    this.state = {
      viewport: {
        width: 800,
        height: 600,
        latitude: 1.3511794,
        longitude: 103.8169943,
        zoom: 11
      }
    };
  }

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
        {this.props.data.map((centre, idx) => (
          <CentreMarker key={idx} data={centre} />
        ))}
      </ReactMapGL>
    );
  }
}

export default Map;
