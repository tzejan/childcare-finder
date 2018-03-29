import React from "react";
import List, { ListItem, ListItemText } from "material-ui/List";

const componentName = props => (
  <List>
    {props.data.map((centre, idx) => {
      return (
        <ListItem key={idx} button>
          <ListItemText
            primary={centre.centre_name}
            secondary={centre.centre_address}
          />
        </ListItem>
      );
    })}
  </List>
);

export default componentName;
