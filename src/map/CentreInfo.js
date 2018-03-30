import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
// import "./CentreInfo.css";

const styles = {
  card: {
    maxWidth: 200,
    padding: 5
  },
  content: {
    padding: 5
  },
  title: {
    // marginBottom: 16,
    fontSize: 13
  },
  pos: {
    // marginBottom: 12
  }
};

class CentreInfo extends PureComponent {
  render() {
    const { info, classes } = this.props;
    const displayName = `${info.centre_name}`;
    const fees = "$"+parseFloat(info.fees_charged.substring(1)).toFixed(2);

    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography component="p">{displayName}</Typography>
          <Typography className={classes.title} color="textSecondary">
            {info.centre_address}
          </Typography>
          <Typography component="p">{info.contact_no}</Typography>
          <Typography className={classes.pos} color="textSecondary">
            {fees}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CentreInfo);
