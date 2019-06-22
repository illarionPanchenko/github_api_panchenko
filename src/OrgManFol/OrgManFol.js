import React from 'react';
import './OrgManFol.css'





const OrgManFol =(props)=> {

    return(
        <div className='card'>
            <img src={props.avatar_url} className="imgCard" alt=''/>
            <span className="nav-link">{props.login}</span>
        </div>

    )
};

export default OrgManFol;