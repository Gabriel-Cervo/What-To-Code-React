import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LeftWrap, RightWrap, ButtonGroup, RightSpacing } from './Style';
import { Divider } from '../SubmitIdea/Style';
import List from '../../components/List/List.jsx';
import { LinkButton } from '../../components/LinkButton/Button';
import Post from '../../components/Post/Post.jsx';

export default function Main() {

    const [activeItem, setActiveItem] = useState('Popular');
    
    // let location = useLocation();
    // let params = new URLSearchParams(location.search)
    // console.log(params.get('order'));

    // Testes
    const links1 = ['game', 'gui', 'management', 'reddit', 'writing', 'graphics'];
    const aboutLinks = ['About', 'Privacy Policy', 'Contact'];
    const topButtons = ['Popular', 'Rising', 'Recent', 'Oldest']

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
            <ButtonGroup>
                {topButtons.map(item => {
                    const linkTo = `?order=${item.toUpperCase()}`;
                    return (<LinkButton to={linkTo} active={activeItem === item ? true : false} onClick={() => setActiveItem(item)}>{item}</LinkButton>)
                })}
            </ButtonGroup>

            <Post />
        </RightWrap>

        <RightSpacing />
        </Container>
    )
}