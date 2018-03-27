import React from 'react';
import Pin from './Pin';
import { Marker } from "react-map-gl";

const Pins = (props) => (
    <div>
        <Marker
          key={`marker-1`}
          longitude={props.data[0].longitude}
          latitude={props.data[0].latitude}
        >
          <Pin size={20} show={props.data[0].showPin} onClick={props.togglePopUp.bind(this)} />
        </Marker>
    </div>
);

export default Pins;
