import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
    maxWidth: 360,
    border: '1px solid #c6b9b9',
    marginLeft: '37%',
    marginTop: '1%',
    backgroundColor: theme.palette.background.paper,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));


 const DropDown = () => {
  const classes = useStyles();

  const [movies, setMovies] = React.useState([]);
  const [value, setValue] = React.useState();
  //const [fetchURL, setfetchURL] = React.useState(`https://swapi.dev/api/people/`);
  
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`
      ,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        
        setMovies(response.results.map((movie,index) => ({label:movie.name, value:index+1})));
        response.results.map(m => {console.log(m.films)})        
        //setMovies(response.results.map(({ name }) => ({ label: name, value: name })));
      })
      .catch(error => console.log(error));
  },[]);

  const handleChange = (e) => {
     setValue(e.currentTarget.value);
     //console(fetchURL+e.currentTarget.value)
     
  }
 
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Character</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {movies.map(({ label, value }) => (
          <MenuItem  key={value} value={value}>{label}</MenuItem>
      ))}
        </Select>
      </FormControl>
      
      <List className={classes.root} component="nav" aria-label="secondary mailbox folders">
      <ListItem>
          <ListItemText primary="List of movies" />
        </ListItem>
        
        <ListItem button>
        
          <ListItemText primary="trash" />
        
        </ListItem>  
      </List>
    </div>
  );
}

export default DropDown;