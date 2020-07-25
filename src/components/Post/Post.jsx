import React from 'react';
import { PostWrap, Title, Text, Tags, BottomButton } from './Style';
import { LinkButton } from '../LinkButton/Button';
export default function Post(post) {
    return (

            <PostWrap>
                <div className="postItens" style={{padding: '24px'}}>
                    <Title>A simple HTTP Server</Title>
                    <Text>During our web development journey, all of us would have used a web server in one way or the other (MAMP, Apache, Node Server etc). But you would get a better understand of how the server works if you implement one on your own. Learn socket programming and try to give it a shot and see if you can serve web pages</Text>
                    <Tags>
                        <LinkButton to="?tag=server">#server</LinkButton>
                        <LinkButton to="?tag=socket">#socket</LinkButton>
                    </Tags>
                </div>
                <BottomButton active><span>938 ❤️</span></BottomButton>
            </PostWrap>
    )
}