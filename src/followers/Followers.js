import React from 'react';
import OrgManFol from '../OrgManFol/OrgManFol'

const Followers = (props) => {
    const elements = props.data.map((item, id) => {
        return (
            <div className="" key={id}>
                <OrgManFol {...item}/>
            </div>
        );
    });

    return(
        <div>
            <h3>Followers: </h3>
            <div className="gridBox">
                { elements.length!==0 ? elements : <h1>(((((((</h1>}
            </div>
        </div>
    );
};

export default Followers;