import React from 'react'
import ReactDOM from 'react-dom'
import './Demo.css'

class Demo extends React.Component{
    render(){
        return(

            <div classname="maindiv_style">
                <h1>Hello {this.props.name}!!!!!!!!!! Welcome to my app</h1>
                <p>Hope you are having a great day!!</p>
            </div>            
        )
    }
}

export default Demo