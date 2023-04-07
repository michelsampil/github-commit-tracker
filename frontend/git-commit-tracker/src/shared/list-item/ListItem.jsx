import React from "react";
// import styles from './ListItem.scss'

export const ListItem = (props) => {

    const { itemData } = props;
    return(<li className={`styles.listContainer`} style={{padding: '2rem', listStyle: 'none'}}>
        <div> {itemData?.author} </div>
        <a href={itemData?.url}> {itemData?.message} </a>
        <div> {Date(itemData?.date)} </div>
        <div> {itemData?.branch} </div>
    </li>)
}