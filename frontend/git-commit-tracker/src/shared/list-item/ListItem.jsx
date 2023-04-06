import React from "react";
// import styles from './ListItem.scss'

export const ListItem = (props) => {

    const { itemData } = props;
    console.log('itemData: ', itemData);
    return(<li className={`styles.listContainer`}>
        <div> {itemData?.author} </div>
        <div> {Date(itemData?.date)} </div>
        <div> {itemData?.branch} </div>
        <div> {itemData?.url} </div>
    </li>)
}