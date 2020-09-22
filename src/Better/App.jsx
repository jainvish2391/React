import React from 'react';
import Header  from '../Better/Header';
import NavBar from './NavBarComp/NavBar'
import Welcome from './NavBarComp/Welcome'
import Signature from  './NavBarComp/Signature'
import { Route, Switch } from "react-router-dom";
import TeamAndRole from './NavBarComp/TeamAndRole';





const App = () => {
    return(
        <>
         <Header/>
         <NavBar/>
         <Switch>
                    <Route exact path ="/" component={Welcome}/>
                    <Route path ="/TeamAndRole" component={TeamAndRole}/>
                    <Route path ="/Signature" component={Signature}/>
                   
                   
         </Switch>
       
        
       
        </>
    )
}
export default App