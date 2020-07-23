import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import SubmitIdea from './SubmitIdea/SubmitIdea.jsx';

export default function App() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/"> 
                    <A />
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
function A() {
    let location = useLocation();
    let params = new URLSearchParams(location.search)
    console.log(params.get('order'));
    return(<h1>Main</h1>)
}

function B() {
    return(<h1>Random</h1>)
}