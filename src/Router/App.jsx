import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import NavBar from './NavBar'

import {  Route,Switch } from 'react-router-dom'

const App = () => {
    return (

                <div>   
                <NavBar/>

                <Switch>
                    <Route exact path ="/" component={Home}/>
                    <Route path ="/about" component={About}/>
                    <Route path ="/contact" component={Contact}/>
                   
                   
                </Switch>
                    {/* <Home/>
                    <About/>
                    <Contact/> */}

                </div>  
            
       
    )
}

export default App