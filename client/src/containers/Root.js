import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Login from './Login'
import {loginRefresh} from '../actions/index';
import Home from './Home'
import Shared from './Shared'
import Group from './Group'
import GroupPage from './GroupPage'
import Log from './Log'
import Account from './Account'
import { Route } from 'react-router-dom'

const store = configureStore()

export default class Root extends Component {	
  componentDidMount(){
    let token = localStorage.getItem('token');
    if (token !== null) {
      store.dispatch(loginRefresh(token));
    }  
  }
  render() { 	
    return (
      <Provider store={store}>
		<div>
		<Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home } />
    <Route exact path="/shared" component={Shared } />
		<Route exact path="/group" component={Group } />
		<Route exact path="/home/:folder" component={Home } />
    <Route exact path="/shared/:folder" component={Shared } />
    <Route exact path="/group/:folder" component={GroupPage} />
    <Route exact path="/group/groupPage/:folder" component={GroupPage} />
		<Route exact path="/account" component={Account } />
    <Route exact path="/log" component={Log } />
	    </div>      
	  </Provider>
    )
  }
}