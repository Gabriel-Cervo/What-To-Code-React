import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin: 80px auto;

    @media (max-width: 768px) {
        margin-left: 25px;
        flex-direction: column;
    }
`;

export const LeftWrap = styled.div`
    flex: 1;
    width: 250px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 21px;
    margin-right: 20px;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 25px;
        margin-top: 0px;
    }
`;

export const RightWrap = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 60%;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 98%;
        padding-right: 20px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px auto;

    a {
        margin: -.6px;
        text-decoration: none;
        font-size: 16px;
        padding: 10px 15px;
        cursor: pointer;

       &:first-child {
           border-top-left-radius: 60px;
           border-bottom-left-radius: 60px;
       } 
       &:last-child {
           border-top-right-radius: 60px;
           border-bottom-right-radius: 60px;
       } 
    }
`;

export const RightSpacing = styled.div`
    display: block;
    flex: 1;

    @media (max-width: 768px) {
        flex: 0;
    }
`;