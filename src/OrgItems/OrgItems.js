import React from 'react';
import OrgItem from "../OrgItem/OrgItem";

const OrgItems = (props) => {
    const elements = props.items.map((item, id) => {
        return (
            <li key={id} className = 'list-group-item'>
                <OrgItem {...item} getInfo={props.getInfo}/>
            </li>
        );
    });

    return(
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    );
};

export default OrgItems;