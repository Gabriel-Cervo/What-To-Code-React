import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubmitIdea from '../containers/SubmitIdea/SubmitIdea.jsx';
import Main from '../containers/MainPage/Main.jsx';

export default function App() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/"> 
                    <Main />
                </Route>
                <Route path="/Random"> 
                    <B/>
                </Route>                
                <Route path="/submit"> 
                    <SubmitIdea />
                </Route>            
                </Switch>
        </Router>
    )
}


// Teste

function B() {
    return(<h1>Random</h1>)
}