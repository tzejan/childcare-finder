import React from "react";
import Pin from "./Pin";
import { Marker } from "react-map-gl";

const CentrePin = props => (
  <div>
    <Marker longitude={props.data.longitude} latitude={props.data.latitude}>
      <Pin size={20} onClick={props.onClick} />
    </Marker>
  </div>
);

export default CentrePin;
