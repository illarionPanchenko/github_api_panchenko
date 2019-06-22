import React from 'react';
import './OrgMan.css'
import { Link } from "react-router-dom";




const OrgMan =(props)=> {

    return(
                <div className='card'>
                    <img src={props.avatar_url} className="imgCard" alt=''/>
                    <Link to='/user' className="nav-link"
                          onClick={()=>props.getUser(props.login)}>{props.login}</Link>
                     <Link to='/followers/' className="nav-link"
                          onClick={()=>props.getFollowers(props.login)}>Followers</Link>
                    <Link to='/following/' className="nav-link"
                          onClick={()=>props.getFollowing(props.login)}>Following</Link>
                </div>

    )
};

export default OrgMan;

