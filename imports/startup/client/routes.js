// Npm Packages
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// Meteor Packages
import createBrowserHistory from 'history/createBrowserHistory'

// Custom Components
import  AppBody  from '../../ui/layouts/AppBody.js';
import  Dashboard  from '../../ui/layouts/Dashboard.js';
import  Login  from '../../ui/layouts/Login.js';
import  NotFound  from '../../ui/layouts/NotFound.js';

const history = createBrowserHistory();
const requireAuth = (currentState) => {
	if(Meteor.user() || Meteor.loggingIn()){
		console.log("User: ", Meteor.user(), "LoggingIn: ", Meteor.loggingIn());
		return true;
	}

	console.log("No user: ", Meteor.user());
	return false;
}

// Set up all routes in the app
Meteor.startup(() => {
	render(
		<Router history={history}>
			<Switch>
				<Route exact path="/" render={()=>((requireAuth()) ? <Redirect to="/dashboard" /> : <Redirect to="/login" />)} />
				<Route path="/login" render={()=>((requireAuth()) ? <Redirect to="/dashboard" /> : <Login />)}  />
				<Route exact path="/dashboard"  render={()=>((requireAuth()) ? <Dashboard /> : <Redirect to="/login" />)}  />
				<Route exact path="/dashboard/:id"  render={()=>((requireAuth()) ? <Dashboard /> : <Redirect to="/login" />)}  />
				<Route exact path="/not-found" render={ ()=>(<NotFound />) } />
				<Redirect to="/not-found"/>
			</Switch>
		</Router>,
		document.getElementById('app-container')
	);
});