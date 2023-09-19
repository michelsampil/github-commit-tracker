import React from "react";
import { ListItem } from "../list-item/ListItem";
import "./styles.scss";

export const List = (props) => {
    const { commits }= props;
    return (<ul>
        <div className='listContainer'> SAPBE </div>
        { commits ? commits.map((e) => {
            return <ListItem className='listContainer' itemData={e}/>
        }) : <div> No commtis</div>}
    </ul>)
}