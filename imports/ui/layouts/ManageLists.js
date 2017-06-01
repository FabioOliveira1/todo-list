// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

//Custom Components
import NavBar from '../components/NavBar.js';
import SideMenu from '../containers/SideMenu.js';
import ContentManagement from '../containers/ContentManagement.js';

export default class ManageLists extends Component{
	render(){
		return (
			<div className="all-lists mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">

				<NavBar />

				<SideMenu url={this.props.url} />

				<ContentManagement id={(this.props.params.id) ? this.props.params.id : ""}/>

			</div>
		)
	}

}