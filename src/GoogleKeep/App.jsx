import React, { useState } from 'react'
import Header from  './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'




const App = () => {

    const [addItem, SetAddItem ] =useState([])

    const addNote= (note) => {
       SetAddItem((prevData)=>{
           return [...prevData, note]
           
       })

    }

    const onDelete = (id) =>{   
        SetAddItem((oldData) =>
         oldData.filter((currData ,indx) => {
             return indx!== id
         })
        )}
    
    return (
        <div >
            <Header/>
            <Footer/>
            <CreateNote
                passNote={addNote} />   
            
            {addItem.map((val,index)=>{
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={onDelete}
                        />
                    )
                    
                })
            }
           
        </div>
        )
}

export default App
