import React from 'react';

const User = ({data}) => {
    return(
        <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} alt=''/>
            {data.login && <p>followers: {data.followers}</p>}
            {data.login && <p>following: {data.following}</p>}
            {data.login && <a href={data.html_url}>{data.html_url}</a>}
            {data.login===undefined && <h1>choose user first</h1>}
        </div>
    )
};

export default User