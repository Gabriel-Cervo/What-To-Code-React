import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, LeftWrap, RightWrap, ButtonGroup, RightSpacing } from './Style';
import { Divider } from '../SubmitIdea/Style';
import List from '../../components/List/List.jsx';
import { LinkButton } from '../../components/LinkButton/Button';
import Post from '../../components/Post/Post.jsx';
import { getIdeas, updateLike } from '../../Services.js';


export default function Main() {
    const [activeItem, setActiveItem] = useState('POPULAR');
    const [ideas, setIdeas] = useState([]);
    const [likedList, setLikedList] = useState([]);

    useEffect(() => { 
        async function callAPI() {
            await getIdeas()
            .then(response => {
                setIdeas(response.data);
            });
        }

        callAPI();

        return () => setIdeas([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function callUpdate(id, value) {
        await updateLike(id, value)
        .then(response => console.log(response));
    }

    function sortIdeas() {
        const params = query.get('order') || 'POPULAR'; 
        if (activeItem !== params) {
            setActiveItem(params);
        }

        let orderedIdeas = [];

        switch (params) {
            case "POPULAR":
                orderedIdeas = ideas.slice().sort((a, b) => b['likes'] - a['likes']);
                break;   
            case "OLDEST":
                orderedIdeas = ideas.slice().sort((a, b) => a['postedAt'] - b['postedAt']);
                break;
            // Popular...
            default:
                orderedIdeas = ideas.slice().sort((a, b) => b['postedAt'] - a['postedAt']);
                break;
                
        }

        const tag = query.get('tag');
        if (tag) {
            orderedIdeas = orderedIdeas.filter(item => item.tags.includes(tag));
        }

        return orderedIdeas;
    }

    function handleClick(id) {
        if (!likedList.includes(id)){
            setLikedList(prev => ([...prev, id]));
            const attList = [...ideas];
            attList[attList.indexOf(attList.find(element => element._id === id))]['likes'] += 1;
            setIdeas(attList);

            callUpdate(id, +1);

        } else {
            setLikedList(prev => prev.filter(item => item !== id));
            const attList = [...ideas];
            attList[attList.indexOf(attList.find(element => element._id === id))]['likes'] -= 1;
            setIdeas(attList);

            callUpdate(id, -1);

        }
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

            {ideas === [] ? 'Loading...' : orderedIdeas.map((item, index) => {
            return (
                <Post 
                    key={item._id || index}
                    id={item._id || index}
                    index={index}
                    title={item.title}
                    text={item.description}
                    tags={item.tags}
                    likes={item.likes}
                    onLike={handleClick}
                />)
                })
            }
        </RightWrap>

        <RightSpacing />
        </Container>
    )
}