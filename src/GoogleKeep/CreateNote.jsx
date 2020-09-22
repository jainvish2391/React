import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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
    input:{
        alignContent: 'center'
    }
  }));
  

const CreateNote = (props) =>{
    
    const classes = useStyles();
    const [note , setNote] = useState({
        title : "" ,
       content : "" ,
    })

    const InputEvent = (event) =>{
        
        const {name , value} = event.target
        setNote((prevData) => {
           return {
               ...prevData,
               [name]: value,
           }
       })
        
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    }
    return (
         
            <div className="root" >
               
                   
                <Grid container spacing={8} alignItems='center'>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <form >
                                    <input 
                                        type ="text" 
                                        name= "title"
                                        value= {note.title }
                                        onChange={InputEvent} 
                                        placeholder="title " 
                                        autoComplete="Off"
                                        />
                                    <textarea 
                                        rows="10" 
                                        columns= "15" 
                                        name="content"
                                        value={note.content} 
                                        onChange={InputEvent}  
                                        placeholder="Take a Note...">

                                    </textarea>
                                    <Button onClick={addEvent}>  
                                        <AddIcon />  
                                    </Button> 
                                </form>
                            </Paper>
                        </Grid>
                            
                    </Grid>
            </div>
        
        )


}

export default CreateNote