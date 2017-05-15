// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

//Custom Components
import LoggedInUserDropdown from '../containers/LoggedInUserDropdown.js';

export default class LoginCard extends Component{

	constructor(){
		super();
		this.state = {
		}
	}

	render(){
		return (
			<header className="mdl-layout__header ">
				<div className="mdl-layout__header-row">
					<img
						className="mdl-layout__company-logo"
						src="/img/components/login-card/logo0.png"
						alt="Todo List Logo"/>

					<span className="mdl-layout-title">
						Todo List
					</span>

					<div className="mdl-layout-spacer"></div>

					<nav className="mdl-navigation">

						<div>
							<LoggedInUserDropdown />
						</div>

					</nav>
				</div>
			</header>
		);
	}

}