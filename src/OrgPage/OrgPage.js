import React from 'react';
import {Link} from 'react-router-dom';
import'./OrgPage.css';


const OrgPage = (props) => {

        return (
            <div className='flex-div'>
                <Link className="link" to='/org/' onClick={()=>props.getInfo(props.login)}>{props.login}</Link>
            </div>
        )
};

export default OrgPage;

