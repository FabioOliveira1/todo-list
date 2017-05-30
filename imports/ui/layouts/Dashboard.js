// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

//Custom Components
import NavBar from '../components/NavBar.js';
import SideMenu from '../containers/SideMenu.js';
import Lists from '../containers/Lists.js';

export default class Dashboard extends Component{

	render(){

		return (
			<div className="all-lists mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">

				<NavBar />

				<SideMenu />

				<div className="mdl-layout__content">
					<Lists />
				</div>


			</div>
		)
	}

}