import React, {Component}from 'react';
import './App.css';
import Header from "../header/header";
import OrgSearch from "../OrgSearch/OrgSearch";
import{ BrowserRouter as Router, Route} from "react-router-dom";
import Organization from "../Organization/Organization";
import Followers from "../followers/Followers";
import Following from "../following/Following";
import User from "../User/User";


export default class App extends Component{

  state={
    org: [],
    members: [],
    followers: [],
    following: [],
    user: [],
    currentOrg: [],
  };

  getBase = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const api_call = await
       fetch(`https://api.github.com/search/users?q=${name}+type:organization`);
    const data = await api_call.json();

    if(data){
      this.setState({org: data.items})
    }
  };

  getInfo = async (login) => {
    const api_call = await
        fetch(`https://api.github.com/orgs/${login}/members`);
    const data = await api_call.json();
    if(data){
      this.setState({members: data});
    }
    const api_call_org = await
        fetch(`https://api.github.com/orgs/${login}`);
    const dataOrg = await api_call_org.json();
    if(dataOrg){
      this.setState({currentOrg: dataOrg});
    }

  };

  getFollowers = async (login)=>{
    const api_call = await
        fetch(`https://api.github.com/users/${login}/followers`);
    const data = await api_call.json();
    if(data){
      this.setState({followers: data});
    }
  };
  getFollowing = async (login)=>{
    const api_call = await
        fetch(`https://api.github.com/users/${login}/following`);
    const data = await api_call.json();
    if(data){
      this.setState({following: data});
    }
  };
  getUser = async (login)=>{
    const api_call = await
        fetch(`https://api.github.com/users/${login}`);
    const data = await api_call.json();
    if(data){
      this.setState({user: data});
    }
  };


  render() {
    return (
        <Router>
        <div className="App">
          <Header/>
          <Route path="/" component={()=>{
              return(<OrgSearch
                  getBase={this.getBase}
                  getInfo = {this.getInfo}
                  state={this.state}/>)}}
                 exact/>
          <Route path='/org/' component={()=>{
              return(<Organization members={this.state.members} current={this.state.currentOrg}
                                   getFollowers={this.getFollowers} getFollowing={this.getFollowing}
                                   getUser={this.getUser}
              />)
          }}exact/>
          <Route path='/followers/' component={()=>{return (<Followers data={this.state.followers}/>)}}/>
          <Route path='/following/' component={()=>{return (<Following data={this.state.following}/>)}}/>
          <Route path='/user' component={()=>{return(<User data={this.state.user}/>)}}/>
        </div>
        </Router>
    );
  }
}


