import React, { useState } from 'react'

const App = () => {

    const [fullName , setFullName] = useState({
        fname : "",
        lname : "",
        email : ""
    })

    const onSubmits = (event) => {    
        event.preventDefault();
        alert("form submitted")
    }

    const inputEvent = (event) => {
            //    const value = event.target.value  

            //    const name = event.target.name
            //you can always wirte this in a single line like showm below
        const { name, value } = event.target
        setFullName( (preValue) => {

            //using spread operator 
                return {
                    ...preValue,
                     [name] : value,


                }

            //    if (name === "fName") {  
            //         return {
            //             fname : value,  
            //             lname : preValue.lname,
            //             email : preValue.email
            //         }
            //     }else if(name === "lName"){   
            //         return {
            //             fname : preValue.fname,  
            //             lname :  value,
            //             email : preValue.email
            //         }
            //    }else if(name === "email"){   
            //     return {
            //         fname : preValue.fname,  
            //         lname : preValue.lname ,
            //         email : value
            //     }
            //     }
        } )
    }

    return(
        <>      
            <div className="main_div">
            
                <form onSubmit={onSubmits}>
                    <div>   
                
                    <h1>Hello {fullName.fname} {fullName.lname}  </h1>
                    <p>{fullName.email}</p>
                    <input 
                            type = "text" 
                            placeholder = "Enter your first Name"   
                            name = "fname"                         //making N small for using spread operator. 
                            onChange = {inputEvent}
                            value = {fullName.fname}
                        />
                        <input  
                            type = "text" 
                            placeholder = "Enter your last Name"   
                            name = "lname"  
                            onChange = {inputEvent}
                            value = {fullName.lname}
                        />
                        <input  
                            type = "email" 
                            placeholder = "Enter your e-mail" 
                            name = "email"   
                            onChange = {inputEvent}
                            value = {fullName.email}
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