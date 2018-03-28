import React from 'react';
import Pin from './Pin';
import { Marker } from "react-map-gl";

const Pins = (props) => (
    <div>
        <Marker
          key={`marker-1`}
          longitude={props.data.longitude}
          latitude={props.data.latitude}
        >
          <Pin size={20} onClick={props.onClick} />
        </Marker>
    </div>
);

export default Pins;
