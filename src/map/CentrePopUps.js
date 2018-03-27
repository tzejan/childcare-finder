import React from "react";
import { Popup } from "react-map-gl";
import CentreInfo from './CentreInfo';

const CentrePopUps = (props) => (
  <div>
    <Popup
      tipSize={5}
      anchor="top"
      longitude={props.data[0].longitude}
      latitude={props.data[0].latitude}
      onClose={props.togglePopUp.bind(0, true)}
    >
      <CentreInfo info={props.data[0]} />
    </Popup>
    );
  </div>
);

export default CentrePopUps;
