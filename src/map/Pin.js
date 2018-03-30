import React, { PureComponent } from "react";
import "./Pin.css";

export default class Pin extends PureComponent {
  render() {
    const { onClick, highlight } = this.props;
    const classToApply = "material-icons pin-style" + (highlight ? " highlight" : "");
    return (
      <i className={classToApply} onClick={onClick}>place</i>
    );
  }
}
