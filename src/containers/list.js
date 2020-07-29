import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    border: '1px solid #c6b9b9',
    marginLeft: '37%',
    marginTop: '1%',
    backgroundColor: theme.palette.background.paper,
  },
}));


 const SimpleList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     List of movies
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
    </div>
  );
}

export default SimpleList;