import React, { PureComponent } from "react";
import "./CentreInfo.css";

export default class CentreInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.centre_name}`;

    return (
      <div className="centreInfo">
        <div>{displayName}</div>
        <div>{info.centre_address}</div>
        <div>{info.fees_charged}</div>
        {/* <img width={240} src={info.image} /> */}
      </div>
    );
  }
}