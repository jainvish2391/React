import React from 'react';
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 200,
      width: 400
    },
    control: {
      padding: theme.spacing(20)
    }
  }));
  
  export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  
    const handleChange = event => {
      setSpacing(Number(event.target.value));
    };
  
    return (
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={20}>
        
          <Grid color = "blue "container justify="center" spacing={spacing}>
         
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                <div >
                    <img src ="https://i.redd.it/b7ux95rczt551.jpg" width="100" alt ="Dark series"/>
                    <title>Dark </title>
                </div>
                </Paper> 
                
                <Button variant="contained" color="secondary">
                    CLick
                </Button>
           </Grid>
            ))} 
          </Grid>
         
        </Grid>
        
      </Grid>
    );
  }
  