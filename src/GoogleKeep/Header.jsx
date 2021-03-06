import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import logo from './images.jpeg'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="transparent" aria-label="menu">
                <img src ={logo} alt="logo"  width ="50" height ="50"/>
            </IconButton>
            <Typography variant="h6" className={classes.title} align='center'>
                Google Keep
            </Typography>    
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
