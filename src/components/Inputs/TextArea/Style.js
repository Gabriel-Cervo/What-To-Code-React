import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: #161616;
`;

export const Input = styled.textarea`
    padding: 11px 11px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #363636;
    width: 100%;

    &:focus {
        outline: none;
        border-color: #8db1ab;
        box-shadow: 0 0 0 0.125em rgba(141,177,171,.25)
    }

    ::placeHolder {
        font-size: 10px;
        opacity: 0.4;
    }

    @media (max-width: 768px) {
        width: 95%;
    }
`;