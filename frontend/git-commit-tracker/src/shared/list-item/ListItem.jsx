import React from "react";
import "./styles.scss";

export const ListItem = (props) => {

    const { itemData } = props;
    return(<li className={`listItem`} style={{padding: '2rem', listStyle: 'none'}}>
        <div> {itemData?.author} </div>
        <a href={itemData?.url}> {itemData?.message} </a>
        <div> {Date(itemData?.date)} </div>
        <div> {itemData?.branch} </div>
    </li>)
}