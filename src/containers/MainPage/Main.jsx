import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LeftWrap, RightWrap, ButtonGroup, RightSpacing } from './Style';
import { Divider } from '../SubmitIdea/Style';
import List from '../../components/List/List.jsx';
import { LinkButton } from '../../components/LinkButton/Button';
import Post from '../../components/Post/Post.jsx';
import { getIdeas } from '../../Services.js';


export default function Main(props) {
    const [activeItem, setActiveItem] = useState('POPULAR');
    const [ideas, setIdeas] = useState([]);

    useEffect(() => { 
        async function callAPI(params) {
            await getIdeas()
            .then(response => {
                setIdeas(response.data);
            });
        }

        callAPI();

        return () => setIdeas(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function sortIdeas() {
        const params = query.get('order') || 'POPULAR'; 
        if (activeItem !== params) {
            setActiveItem(params);
        }

        let orderedIdeas = [];

        if (params === 'POPULAR') {
            orderedIdeas = ideas.slice().sort((a, b) => b['likes'] - a['likes']);
        } else if (params === 'RECENT') {
            orderedIdeas = ideas.slice().sort((a, b) => b['postedAt'] - a['postedAt']);
        } else if (params === 'OLDEST') {
            orderedIdeas = ideas.slice().sort((a, b) => a['postedAt'] - b['postedAt']);
        } else {
            orderedIdeas = ideas.slice().sort((a, b) => a['likes'] - b['postedAt']);
        }
        return orderedIdeas;


    }

    const query = new URLSearchParams(useLocation().search);
    const orderedIdeas = sortIdeas();

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
                    return (<LinkButton key={index} to={linkTo} active={activeItem === item.toUpperCase() ? "true" : "false"} onClick={() => setActiveItem(item)}>{item}</LinkButton>)
                })}
            </ButtonGroup>

            {ideas === [] ? 'Loading...' : orderedIdeas.map((item, index) => 
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