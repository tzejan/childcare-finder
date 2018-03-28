import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import "./Omnibox.css";
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Omnibox extends Component {
  constructor(props){
    super();
    this.controlledHandleKey = this.controlledHandleKey.bind(this);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper id="omnibox" className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Childcare Centre Finder
          </Typography>
          <Typography component="p">
            Narrow your search to a particular postal code, operator or name.
          </Typography>
          <TextField
            id="uncontrolled"
            label="Search"
            value={classes.searchValue}
            className={classes.textField}
            margin="normal"
            onChange={this.controlledHandleKey}
          />
        </Paper>
      </div>
    );
  }
  controlledHandleKey(event) {
    this.props.onSearch(event.target.value);
  }
}

export default withStyles(styles)(Omnibox);
