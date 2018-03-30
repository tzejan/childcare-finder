import React from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";

const styles = theme => ({
  textField: {
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  }
});

const SearchBar = (props) => (
  <TextField
    id="controlled"
    label="Search"
    value={props.searchValue}
    className={props.classes.textField}
    margin="normal"
    onChange={props.onChange}
  />
);

export default withStyles(styles)(SearchBar);
