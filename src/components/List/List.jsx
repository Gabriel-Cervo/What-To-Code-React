import React from 'react';
import { Title, ItemGroup } from './Style';
import { LinkButton } from '../LinkButton/Button';

export default function List(props) {
    return (
        <>
            <Title>{props.title}</Title>
            <ItemGroup>
                {props.itens.map((item, index) => {
                    const itemLink = props.tags ? `?tag=${item}` : `${item.toLowerCase()}`;
                    const itemName = props.tags ? `#${item}` : `${item}`;
                    return (<li key={index}><LinkButton to={itemLink}>{itemName}</LinkButton></li>)
                })}
            </ItemGroup>
        </>
    )
}