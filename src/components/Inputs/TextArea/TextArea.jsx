import React from 'react';
import { Label, Input } from './Style'


export default function TextArea(props) {
    return (
        <div style={{ margin: "20px 0" }}>
            <Label>{props.labelText}</Label>
            <Input 
                placeholder={props.placeHolder} 
                rows="7"
                maxLength={props.maxLength}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                />
        </div>
    )
}