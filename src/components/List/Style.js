import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #7A7A7A;
    font-weight: 400;
`;

export const ItemGroup = styled.ul`
    width: 100%;
    padding: 15px 0;
    margin-left: -10px;
    text-decoration: none;
    list-style: none;

    a {
        color: #4A4A4A;
        cursor: pointer;
        line-height: 1.25;
        border: none;
        text-decoration: none;
        font-size: 15px;
        font-weight: 300;
        padding: 10x;
        text-align: left;

        &:hover {
            background: rgba(0, 0, 0, .1);
        }
    }
`;