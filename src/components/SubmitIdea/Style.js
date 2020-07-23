import styled from 'styled-components';

export const Form = styled.form`
    width: 45%;
    margin: 0 auto;
    padding-top: 100px;
    padding-left: 10px;

    @media (max-width: 720px) {
        width: 100%;
        padding-left: 25px;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    font-family: 'Lato', sans-serif;
    color: #4A4A4A;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 1px;
`;

export const Divider = styled.hr`
    margin: 25px 0;
    opacity: 0.2;

    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const SubmitButton = styled.button`
    font-weight: 300;
    display: inline-block;
    background: #F4E04D;
    border: 1px solid #F4E04D;
    border-radius: 3px;
    box-shadow: 0 0 5px #ccc;
    padding: 10px 15px;
    margin: 0 12px;
    min-width: 80px;
    text-align: center;
    min-height: 20px;
    font-size: 16px;
    color: #000;
    outline: 0;
    float: right;
    margin: 25px 0 0 25px;
    cursor: pointer;

    &:hover {
        border: 1px solid #dbc945;
    }

    &:disabled {
        opacity: 0.7;
        cursor: default;
    }

    @media (max-width: 768px) {
        margin: 25px;
    }
`;

export const TagsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;

    @media (max-width: 768px) {
        width: 95%;
    }
`;
