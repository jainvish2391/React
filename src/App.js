import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'
import './index.css'


function ndata(val){
  return (
    <Cards
          img_src = {val.imgsrc}
          title = {val.title}
          sname = {val.sname}
          link = {val.link}
         
      />
  )
} 




const App = () =>{
  return( <>  
    <h1 className="heading">List of top 3 netflix series 😄</h1>
    {Sdata.map(ndata)}
     </>  )
   
  }
export default App
