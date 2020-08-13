import React, { useState } from 'react'

const App = () => {

    const [name , setName] = useState("")

    const [fullName , setFullName] = useState("")

    const [lastName , setLastName] = useState("")

    const [lastNameValue , setLastNameValue] = useState("")

    const onSubmits = (event) => {    
        event.preventDefault();
        setFullName(name);
        setLastNameValue(lastName);
    }
    const inputEvent = (event) => {
        setName(event.target.value);
        
    }
    const inputEventTwo = (event) => {
        setLastName(event.target.value);  
    }
    


    return(
        // using react fragment
        <>      
            <div className="main_div">
            
                <form onSubmit={onSubmits}>
                    <div>   
                
                    <h1>Hello {fullName} {lastNameValue} </h1>
                    <input 
                            type = "text" 
                            placeholder = "Enter your first Name"    
                            onChange = {inputEvent}
                            value = {name}
                        />
                        <input  
                            type = "text" 
                            placeholder = "Enter your last Name"    
                            onChange = {inputEventTwo}
                            value = {lastName}
                            
                        />
                        <input  
                            type = "text" 
                            placeholder = "Enter your e-mail"    
                            onChange = {inputEvent3}
                        />
                        <button type ="submit">
                            Submit 
                        </button>   
                        
                    </div>  
                </form> 
                
            </div>
    
        </>

    )

}


export default App