import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className='navbar-brand mb-0 h1'>GitHub DB</Link>
            <Link to='/' className="nav-link">Organisation Search </Link>
            <Link to='/org/' className="nav-link">Organisation</Link>
            <Link to='/user' className="nav-link">User Page</Link>
        </div>
    )
};

export default Header;