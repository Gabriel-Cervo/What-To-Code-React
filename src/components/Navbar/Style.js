import styled from 'styled-components';

export const Nav = styled.nav`
    width: 97.5%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    
    .logo {
        padding: 10px 0;
    }

    .logo span {
        color: #4a4a4a;
        margin-left: 16px;
    }

    .logo a {
        position: relative;
        top: -5px;
    }

    .logo img {
        height: 30px;
    }
`;

export const StyledBurger = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
   
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        top: 20px;
    }
   
    div {
        width: 25px;
        height: 0.25rem;
        background-color: ${({ isOpen }) => isOpen ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ isOpen }) => isOpen ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;

    a {
        text-decoration: none;
      }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({ isOpen }) => isOpen ? 'translateX(25%)' : 'translateX(100%)'};
        top: 5;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        
        li {
            padding: 10px;
            margin: 0 auto;
        }

        a {
            margin-top: 10px;
            width: 150px;
        }
    }
`;