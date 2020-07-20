import React, { useState } from 'react';
import RightNavbar from './RightNavbar';
import { StyledBurger } from './Style';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavbar isOpen={isOpen}/>
    </>
  )
};

export default Burger;