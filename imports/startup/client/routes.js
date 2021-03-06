// Npm Packages
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
// Meteor Packages
import createBrowserHistory from 'history/createBrowserHistory'

// Custom Components
import  Dashboard  from '../../ui/layouts/Dashboard.js';
import  ManageLists  from '../../ui/layouts/ManageLists.js';
import  Login  from '../../ui/layouts/Login.js';
import  NotFound  from '../../ui/layouts/NotFound.js';

const history = createBrowserHistory();
const requireAuth = () => {
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
				<Route exact path="/" render={(match)=>((requireAuth()) ? <Redirect to="/dashboard" /> : <Redirect to="/login" />)} />
				<Route path="/login" render={(match)=>(<Login />)}  />
				<Route exact path="/dashboard"  render={(history)=>((requireAuth()) ? <Dashboard {...history.match}/> : <Redirect to="/login" />)}  />
				<Route exact path="/manage-lists"  render={(history)=>((requireAuth()) ? <ManageLists {...history.match}/> : <Redirect to="/login" />)}  />
				<Route exact path="/manage-lists/:id"  render={({match})=>((requireAuth()) ? <ManageLists {...match}/> : <Redirect to="/login" />)}  />
				<Route exact path="/not-found" render={ ()=>(<NotFound />) } />
				<Redirect to="/not-found"/>
			</Switch>
		</Router>,
		document.getElementById('app-container')
	);
});