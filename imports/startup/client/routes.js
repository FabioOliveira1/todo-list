import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'


import  AppBody  from '../../ui/layouts/AppBody.js'
import  Dashboard  from '../../ui/layouts/Dashboard.js'

const history = createBrowserHistory();
console.log("history: ", history);
console.log("AppBody: ", AppBody);
console.log("Dashboard: ", Dashboard);
// Set up all routes in the app
Meteor.startup(() => {
	render(
		<Router history={history}>
			<div>
				<Route exact path="/" component={ AppBody }/>
				<Route path="/dashboard" component={Dashboard} />
			</div>
		</Router>,
		document.getElementById('app-container')
	);
});