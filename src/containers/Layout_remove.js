import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DropDown from "./dropDown";
import SimpleList from "./list";
import Text from "./textField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Star Wars</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <DropDown />
            
            <Text />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
