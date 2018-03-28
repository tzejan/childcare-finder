import React from "react";
import { Popup } from "react-map-gl";
import CentreInfo from "./CentreInfo";
import "./CentrePopUp.css"

const CentrePopUps = props => (
  <div>
    <Popup
      tipSize={5}
      anchor="top"
      longitude={props.data.longitude}
      latitude={props.data.latitude}
      onClose={props.onClose}
    >
      <CentreInfo info={props.data} />
    </Popup>
  </div>
);

export default CentrePopUps;
