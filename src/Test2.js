import React from 'react'
import ReactDOM from 'react-dom'


function Test2(){
    const name= 'Vishakha Jain'
   
    const image1 = "https://picsum.photos/200/300"
    const image2 = "https://picsum.photos/230/300"
    const image3 = "https://picsum.photos/240/300"
    const image4 = "https://picsum.photos/270/300"
    const image5 = "https://picsum.photos/250/300"
    
    
    return (
        <>
            <h1 className = "heading" > Welcome to {name}'s Page</h1>
           <div className="image">
            <img src={image1} alt="random"/>
            <img src={image2} alt="random"/>
            <img src={image3} alt="random"/>
            <img src={image4} alt="random"/> 
            <img src={image5} alt="random"/> 
           </div>
            


        </>
    )
}


export default Test2