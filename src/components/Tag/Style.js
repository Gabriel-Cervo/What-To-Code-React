import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #f4e04d;
    color: rgba(0, 0, 0, .7);
    margin-bottom: 8px;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 10px;

    button {
        margin-left: 3px;
        padding: 1px 3px;
        opacity: 0.7;
        background: rgba(10, 10, 10, .2);
        font-weight: bold;
        color: #fff;
        border-radius: 60px;
        font-size: 9px;
        cursor: pointer;
        border: none;
        text-decoration: none;

        &:hover {
            background: rgba(10, 10, 10, .6);
        }
    }
`;