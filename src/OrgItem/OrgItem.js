import React from 'react'
import './OrgItem.css'
import OrgPage from "../OrgPage/OrgPage";

const OrgItem = (props) => {
        return(
            <div className='wrap'>
                    <div className="block">
                    </div>
                <img src={props.avatar_url} className="img" alt=''/>
                <OrgPage login = {props.login} getInfo={props.getInfo}/>
            </div>
        )
};

export default OrgItem;