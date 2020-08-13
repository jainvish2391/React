import React, { useState } from 'react'
import TodoLists from "./TodoLists"


const App = () =>{
    

    const [inputList , setInputList]=useState()
    const [items ,setItemsList] = useState([])

    const inputEvent =(event) => {
        //const { name, value } = event.target
        setInputList(event.target.value)
    }

    const listOfItems = () => {
        setItemsList((oldItems) => {
            return [...oldItems, inputList ]
        })
        setInputList("")
    }
    const deleteItems =(id) =>{
        setItemsList((oldItems) => {
            return oldItems.filter((arrElem ,index ) =>{
                return index !== id

            })
        })
    }

   return(   
   <>  
        <div className= "main_div">
            <div className="center_div"> 
                <br/>
                <h1 >Todo List</h1>
                <br/> 
                <input  
                    type = "text"
                    placeholder = "Add a task"
                    name="inputList"
                    onChange={inputEvent}
                    value={inputList}
                    
                />
                <button onClick={listOfItems}> + </button>
                
                <ol>   
                 {/*calling jsx element   */}
                   { items.map( (itemVal , index) => {
                       return  <TodoLists 
                       key={index} 
                       id={index}
                       text ={itemVal}
                        onSelect ={deleteItems}
                        
                       />
                    })} 
                </ol>
            </div>
        </div>

    </>
   )
}

export default App