import React from 'react'
import OrgItems from "../OrgItems/OrgItems";
import './OrgSearch.css'

const OrgSearch = (props) => {
    return(
        <div className="">
            <h1>Search Organization</h1>
            <form onSubmit={props.getBase} className="OrgForm wrapper">
                <input className="form-control inp" type="text" placeholder="Search" name = 'name'/>
                <button className="btn btn-primary">GO</button>
            </form>
            <div className='box'>
                <OrgItems items = {props.state.org} getInfo={props.getInfo}/>
            </div>
        </div>
    )
};

export default OrgSearch;