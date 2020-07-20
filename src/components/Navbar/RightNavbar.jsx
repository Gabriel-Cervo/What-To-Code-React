import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Ul } from './Style';
import { LinkButton } from '../Button';



const RightNavbar = ({ isOpen }) => {
  return (
    <Router>
      <Ul isOpen={isOpen}>
        <LinkButton to="/Random">Random Idea</LinkButton>
        <LinkButton to="/Submit" yellow>Submit What to Code</LinkButton>
      </Ul>
    </Router>
  )
}

export default RightNavbar;