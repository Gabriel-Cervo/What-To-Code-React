import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
    display: inline-block;
    border-radius: 3px;
    padding: 10px 15px;;
    margin: 0 10px;
    min-width: 80px;
    text-align: center;
    min-height: 20px;
    font-size: 16px;
    background: transparent;
    color: #000;
    border: 1px solid #dbdbdbdb;
    outline: 0;
    box-shadow: 0 0 5px #ccc;

    &:hover {
        border-color: #c5c5c5
    }

    ${props => props.yellow && `
        background: #F4E04D;
        border: 1px solid #F4E04D;

        &:hover {
            border: 1px solid #dbc945;
        }
    `}
    
    ${props => props.title && `
        box-shadow: none;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 600;
        color: #4A4A4A;
        letter-spacing: 1px;
        border: none;

        &:hover {
            color: #F4E04D;
        }
    `}
`;