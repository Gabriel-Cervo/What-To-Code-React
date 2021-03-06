import styled from 'styled-components';

export const PostWrap = styled.div`
    display: block;
    font-family: 'Lato', sans-serif;
    color: #4A4A4A;
    line-height: 1.5;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    width: 100%;
    margin: 40px auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
`;

export const Text = styled.p`
    font-size: 18px;
    line-height: 1.5;
    font-weight: 200;
`;

export const Tags = styled.div`
    display: block;
    text-align: right;
    padding-top: 22px;
    padding-bottom: 10px;

    a {
        font-size: 15px;
        color: #8db1ab;
        border: none;
        text-decoration: none;
        margin: 0;
        padding: 0;
        min-width: 0px;
        min-heigth: 0px;

        &:hover {
            color: #000;
        }

    }
`;

export const BottomButton = styled.button`
    display: block;
    position: relative;
    top: 0;
    text-decoration: none;
    margin: auto;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #F4E04D;
    border: 1px solid #F4E04D;
    box-shadow: 0 0 5px #ccc;
    font-weight: 300;
    border-radius: 3px;
    padding: 10px 15px;
    min-width: 100%;
    text-align: center;
    min-height: 20px;
    font-size: 16px;
    outline: 0;

    &:hover {
        border: 1px solid #dbc945;
    }
    
    span {
        color: #8db1ab;
    }
`;