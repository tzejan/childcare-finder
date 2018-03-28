import React, { Component } from "react";
import CentrePopUp from "./CentrePopUp";
import CentrePin from "./CentrePin";

class CentreMarker extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopUp: false };
  }
  render() {
    let data = this.props.data;
    return (
      <div>
        <CentrePin data={data} onClick={this.togglePopUp.bind(this)} />
        {this.state.showPopUp ? (
          <CentrePopUp
            data={data}
            onClose={this.togglePopUp.bind(this, true)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
  togglePopUp(event, forceClose = false) {
    let showPopUp = this.state.showPopUp;
    showPopUp = forceClose || !showPopUp;
    this.setState({ showPopUp: showPopUp });
  }
}

export default CentreMarker;
