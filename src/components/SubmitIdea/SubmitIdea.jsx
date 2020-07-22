import React, { useState } from 'react';
import { Body, Title, Divider, SubmitButton } from './Style';
import InputText from '../Inputs/InputText/InputText';
import TextArea from '../Inputs/TextArea/TextArea';

export default function SubmitIdea() {
    const [inputValue, setInputValue] = useState({inputText: '', textArea: '', tags: ''});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputValue(prev => (
            {...prev, [name]: value}
        ))
    }

    return (
        <Body>
            <Title>Tell the world What To Code!</Title>
            <Divider />
            <InputText 
                labelText="Title (max. 100)"
                placeHolder="A small step for a human but a big step for mankind"
                maxLength="100"
                name="inputText"
                value={inputValue.inputText}
                onChange={handleChange}
            />
            <TextArea 
                labelText="Description (max. 1000, optional)"
                placeHolder="..."
                maxLength="1000"
                name="textArea"
                value={inputValue.textArea}
                onChange={handleChange}
            />
            <InputText 
                labelText="Tags (max. 6, optional)"
                placeHolder=""
                maxLength=""
                name="tags"
                value={inputValue.tags}
                onChange={handleChange}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
        </Body>
    )
}