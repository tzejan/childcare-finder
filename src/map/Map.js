import React, { Component } from "react";
import ReactMapGL, {FlyToInterpolator} from "react-map-gl";
import CentreMarker from "./CentreMarker";

class Map extends Component {
  constructor(props) {
    super();
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

  componentWillReceiveProps(nextProps){
    if (this.props.zoomTo !== nextProps.zoomTo){
      this._goToViewport(nextProps.data[nextProps.zoomTo]);
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _onViewportChange = viewport => this.setState({
    viewport: {...this.state.viewport, ...viewport}
  });

  _resize = () => this._onViewportChange({
    width: this.props.width || window.innerWidth,
    height: this.props.height || window.innerHeight
  });

  _goToViewport = ({longitude, latitude}) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 13.5,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1500
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
          <CentreMarker key={idx} highlight={this.props.zoomTo === idx} data={centre} />
        ))}
      </ReactMapGL>
    );
  }
}

export default Map;
