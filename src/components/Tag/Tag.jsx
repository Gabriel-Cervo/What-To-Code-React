import React from 'react';
import { Container } from './Style';

export default function Tag(props) {
    return (
        <Container>
            {props.text} 
            <button type="button" onClick={() => props.onDelete(props.id)}>X</button>
        </Container>
    );
}