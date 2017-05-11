import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import  AppBody  from '../../ui/layouts/AppBody.js';
import  Dashboard  from '../../ui/layouts/Dashboard.js';
import  Login  from '../../ui/layouts/Login.js';

const history = createBrowserHistory();

// Set up all routes in the app
Meteor.startup(() => {
	render(
		<Router history={history}>
			<div id="routes-container">
				<Route exact path="/" component={ AppBody }/>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/login" component={Login} />
			</div>
		</Router>,
		document.getElementById('app-container')
	);
});