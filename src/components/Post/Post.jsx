import React from 'react';
import { PostWrap, Title, Text, Tags, BottomButton } from './Style';
import { LinkButton } from '../LinkButton/Button';
export default function Post(props) {
    return (
            <PostWrap>
                <div className="postItens" style={{padding: '24px'}}>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <Tags>
                        {props.tags.map((item, index) => {
                            const link = `?tag=${item}`
                            return (<LinkButton key={index} to={link}>#{item}</LinkButton>)
                            })}
                    </Tags>
                </div>
                <BottomButton active="true" onClick={() => {props.onLike(props.id)}}><span>{props.likes}</span> <span role="img" aria-label="hearth emoji">❤️</span></BottomButton>
            </PostWrap>
    )
}