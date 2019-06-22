import React from 'react';
import OrgMan from "../OrgMan/OrgMan";
import './Organization.css'

const Organization = ({members, getFollowers, getFollowing, getUser, current}) => {

        const elements = members.map((item, id) => {
            return (
                <div className="" key={id}>
                    <OrgMan {...item} getFollowers={getFollowers} getFollowing={getFollowing} getUser={getUser}/>
                </div>
            );
        });
        return(
            <div>
                <h2>{current.login}</h2>
                { current.length!==0 &&  <img className='currentLogo' src={current.avatar_url} alt=''/>}
                { current.length!==0 && <a href={current.html_url}>{current.html_url}</a> }
                {current.length!==0 && <h4>{current.description}</h4>}
                { current.length!==0 && <h3>Members: </h3> }

            <div className="gridBox">
                { elements.length!==0 ? elements : <h1>(((((((</h1>}
            </div>
            </div>
        );
    };

export default Organization;