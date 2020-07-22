import React from 'react';
import { Label, Input } from './Style'

export default function InputField(props) {
    return (
        <>
            <Label>{props.labelText}</Label>
            <Input 
                placeholder={props.placeHolder}
                maxLength={props.maxLength}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                />
        </>
    )
}