import React, { useState } from 'react';
import { Form, Title, Divider, SubmitButton, TagsWrapper } from './Style';
import InputText from '../Inputs/InputText/InputText';
import TextArea from '../Inputs/TextArea/TextArea';
import Tag from '../Tag/Tag.jsx';


export default function SubmitIdea() {
    const [inputValue, setInputValue] = useState({inputText: '', textArea: '', tag: ''});
    const [tags, setTags] = useState([])

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputValue(prev => ({...prev, [name]: value}))
    }

    function handleKeyPress(event) {
        if (tags.length === 6) {
            setInputValue(prev => ({...prev, tag: ''}));
            return;
        }
        const value = inputValue.tag;
        const keyPressed = event.key;

        if (keyPressed === ' ' || keyPressed === ',' || keyPressed === '.') {
            const lastCarac = value.length - 1;
            if (value.charAt(lastCarac) !== ' ' && value !== '') {
                setTags(prev => [...prev, value.slice()]);
                setInputValue(prev => ({...prev, tag: ''}));
            }
        }
    }

    function handleDelete(id) {
        setTags(prev => (prev.filter((item, index) => index !== id)));
    }

    return (
        <Form>
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
                name="tag"
                value={inputValue.tag}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            {tags.length > 0 &&
                <TagsWrapper>
                    {tags.map((tag, index) => (
                        <Tag 
                            id={index}
                            key={index} 
                            text={tag}
                            onDelete={handleDelete}
                        />
                    ))}
                </TagsWrapper>
            }
            <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
    )
}