import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LeftWrap, RightWrap, ButtonGroup, RightSpacing } from './Style';
import { Divider } from '../SubmitIdea/Style';
import List from '../../components/List/List.jsx';
import { LinkButton } from '../../components/LinkButton/Button';
import Post from '../../components/Post/Post.jsx';
import { getIdeas } from '../../Services.js';


export default function Main(props) {
    const [activeItem, setActiveItem] = useState('Popular');
    const [ideas, setIdeas] = useState([]);
    
    const query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        const params = query.get('order') || 'POPULAR';  
        
        async function callAPI(params) {
            await getIdeas(params)
            .then(response => setIdeas(response.data));
        }

        console.log('refresh');

        callAPI(params);

        return () => setIdeas(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    return (<LinkButton key={index} to={linkTo} active={activeItem === item ? "true" : "false"} onClick={() => setActiveItem(item)}>{item}</LinkButton>)
                })}
            </ButtonGroup>

            {ideas === [] ? 'Loading...' : ideas.map((item, index) => 
            <Post 
                key={item.id || index}
                title={item.title}
                text={item.description}
                tags={item.tags}
                likes={item.likes}
            />)}
        </RightWrap>

        <RightSpacing />
        </Container>
    )
}