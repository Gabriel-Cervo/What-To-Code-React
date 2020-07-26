import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LeftWrap, RightWrap, ButtonGroup, RightSpacing } from './Style';
import { Divider } from '../SubmitIdea/Style';
import List from '../../components/List/List.jsx';
import { LinkButton } from '../../components/LinkButton/Button';
import Post from '../../components/Post/Post.jsx';
import { getIdeas } from '../../Services.js';


export default function Main() {
    let [activeItem, setActiveItem] = useState('Popular');
    let query = new URLSearchParams(useLocation().search);

    // console.log();

    async function callAPI(params) {
        await getIdeas(params)
        .then(response => console.log(response.data))
       
    }

    useEffect(() => {
        const params = query.get('order') || 'POPULAR';  
        callAPI(params);
    });

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
                {topButtons.map((item, index) => {
                    const linkTo = `?order=${item.toUpperCase()}`;
                    return (<LinkButton to={linkTo} key={index} active={activeItem === item ? "true" : "false"} onClick={() => setActiveItem(item)}>{item}</LinkButton>)
                })}
            </ButtonGroup>

            <Post />
        </RightWrap>

        <RightSpacing />
        </Container>
    )
}