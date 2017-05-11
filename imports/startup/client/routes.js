import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import  AppBody  from '../../ui/layouts/AppBody.js';
import  Dashboard  from '../../ui/layouts/Dashboard.js';
import  Login  from '../../ui/layouts/Login.js';

const history = createBrowserHistory();
const requireAuth = (currentState) => {
	console.log(currentState);
	return (false) ? (<Redirect to="/main" />) : (<Redirect to="/login" />)
}

// Set up all routes in the app
Meteor.startup(() => {
	render(
		<Router history={history}>
			<div id="routes-container">
				<Route exact path="/" render={requireAuth} />
				<Route path="/main" render={requireAuth} />
				<Route path="/dashboard"  render={requireAuth}  />
				<Route path="/login" component={Login}  />
			</div>
		</Router>,
		document.getElementById('app-container')
	);
});