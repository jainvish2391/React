import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const App = () =>{

    const [num, setNum] = useState(0)

    const IncreNum =() => {
        setNum(num + 1)

    }
    const DecreNum =() => {
        
        if(num > 0){
            setNum(num - 1)
            
        }else {
            alert(" Reached 0 ")
        }
        
    }
    
    
    return (
        <>
        <div className="main_div">
            <div className="center_div">   
                <h1> {num} </h1>
                <div className="btn_div">
                    <AddIcon onClick={IncreNum}> Increment</AddIcon>
                    <DeleteIcon onClick={DecreNum}>Decrement</DeleteIcon>
                </div>
                
            </div>
            
        </div>
        </>
    
    )
}

export default App