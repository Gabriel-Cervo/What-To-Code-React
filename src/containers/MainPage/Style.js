import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 90px 60px;

    @media (max-width: 768px) {
        margin-left: 25px;
        flex-direction: column;
    }
`;

export const LeftWrap = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 25px;
    }
`;

export const RightWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;