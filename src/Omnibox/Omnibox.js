import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import SearchBar from './SearchBar';
import ResultListing from "./ResultListing";
import "./Omnibox.css";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    maxHeight: "100%",
    overflow: "auto",
    boxSizing: "border-box"
  })
});

class Omnibox extends Component {
  constructor(props) {
    super();
    this.controlledHandleKey = this.controlledHandleKey.bind(this);
  }
  render() {
    const { classes, data } = this.props;
    const summaryText = this.props.searchValue === "" ? this.props.dbCount + " centres on file." : data.length + " results shown.";
    return (
      <div id="omnibox">
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Childcare Centre Finder
          </Typography>
          <Typography component="p">
            Narrow your search to a particular postal code, operator or name.
          </Typography>
          <SearchBar searchValue={this.props.searchValue} onChange={this.controlledHandleKey}/>
          <ResultListing data={data} zoomToChildCareCentre={this.props.zoomToChildCareCentre}/>
          <Typography component="p">{summaryText}</Typography>
        </Paper>
      </div>
    );
  }
  controlledHandleKey(event) {
    this.props.onSearch(event.target.value);
  }
}

export default withStyles(styles)(Omnibox);
