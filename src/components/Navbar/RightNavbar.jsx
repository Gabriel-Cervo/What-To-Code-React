import React from 'react';
import { Ul } from './Style';
import { LinkButton } from '../LinkButton/Button';



const RightNavbar = ({ isOpen }) => {
  return (
    <div>
        <Ul isOpen={isOpen}>
          <LinkButton to="/random">Random Idea</LinkButton>
          <LinkButton to="/submit" active="true">Submit What to Code</LinkButton>
        </Ul>
      </div>
  )
}

export default RightNavbar;