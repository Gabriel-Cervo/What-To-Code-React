import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LeftWrap, RightWrap } from './Style';
import { Divider } from '../SubmitIdea/Style';
import List from '../../components/List/List.jsx';

export default function Main() {

    // let location = useLocation();
    // let params = new URLSearchParams(location.search)
    // console.log(params.get('order'));

    // Testes
    const links1 = ['game', 'gui', 'management', 'reddit', 'writing', 'graphics'];
    const aboutLinks = ['About', 'Privacy Policy', 'Contact'];

    return (
        <Container>
        <LeftWrap>
            <List 
                title="Popular Tags"
                itens={links1}
                tags
            />
            <Divider />
            <List 
                title="Links"
                itens={aboutLinks}
            />
        </LeftWrap>
        <RightWrap>
            <h1>Conteudo</h1>
        </RightWrap>
        </Container>
    )
}