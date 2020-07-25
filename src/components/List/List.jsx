import React from 'react';
import { Title, ItemGroup } from './Style';
import { LinkButton } from '../LinkButton/Button';

export default function List(props) {
    console.log(props.itens)
    return (
        <>
            <Title>{props.title}</Title>
            <ItemGroup>
                {props.itens.map((item, index) => {
                    const itemLink = props.tags ? `?tag=${item}` : `/${item.toLowerCase()}`;

                    return (<li key={index}><LinkButton to={itemLink}>#{item}</LinkButton></li>)
                })}
            </ItemGroup>
        </>
    )
}