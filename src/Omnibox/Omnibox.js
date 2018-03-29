import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import List, { ListItem, ListItemText } from "material-ui/List";
import "./Omnibox.css";
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    maxHeight: '100%',
    overflow: 'auto',
    boxSizing:'border-box'
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  }
});

class Omnibox extends Component {
  constructor(props) {
    super();
    this.controlledHandleKey = this.controlledHandleKey.bind(this);
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="omnibox" >
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Childcare Centre Finder
          </Typography>
          <Typography component="p">
            Narrow your search to a particular postal code, operator or name.
          </Typography>
          <TextField
            id="uncontrolled"
            label="Search"
            value={this.props.searchValue}
            className={classes.textField}
            margin="normal"
            onChange={this.controlledHandleKey}
          />
          <List>
            <ListItem button>
              <ListItemText primary="E-BRIDGE PRE-SCHOOL PTE LTD" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="E-BRIDGE PRE-SCHOOL PTE LTD" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="E-BRIDGE PRE-SCHOOL PTE LTD" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="E-BRIDGE PRE-SCHOOL PTE LTD" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="E-BRIDGE PRE-SCHOOL PTE LTD" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="E-BRIDGE PRE-SCHOOL PTE LTD" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="E-BRIDGE PRE-SCHOOL PTE LTD" />
            </ListItem>

          </List>
          <Typography component="p">
            {this.props.data.length} results shown.
          </Typography>
        </Paper>
      </div>
    );
  }
  controlledHandleKey(event) {
    this.props.onSearch(event.target.value);
  }
}

export default withStyles(styles)(Omnibox);
