import React from "react";
import { ListItem } from "../list-item/ListItem";

export const List = (props) => {
    const { commits }= props;
    console.log('commits: ', commits);
    return (<ul>
        { commits ? commits.map((e) => {
            return <ListItem itemData={e}/>
        }) : <div> No commtis</div>}
    </ul>)
}