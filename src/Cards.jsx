import React from 'react'
import './index.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



function Cards(props){
return (
   
    <div className = "cards ">

        <div className= "card ">
            <img src ={props.img_src} width="150" alt ="Breaking bad series" 
            className="card_img"/>
            <div className="card_info"></div>
            <span className="card_category">{props.sname}</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="blank">
                <button > Watch Now</button>
            </a>
        </div>

    </div>
   
)
}



export default Cards