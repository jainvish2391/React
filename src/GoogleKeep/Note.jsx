import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(8),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: 'auto',
      maxWidth: 500,
    },
    
  }));

  

const Note = (props) =>{

   const deleteNote = () =>{
       props.deleteItem(props.id)
   }
    const classes = useStyles()
    return (
      <div>
            <Grid container>
                  <Grid item xs={2}>
                      <Paper className={classes.paper}>
                          <h1>{props.title}</h1>
                          <br/>
                          <p>{props.content}</p>
                          <Button onClick={deletNote}>
                              <DeleteOutlinedIcon/> 
                          </Button> 
                      </Paper>
                      
                  </Grid>

            </Grid>     
      </div>
      
        )
}

export default Note