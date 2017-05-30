// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

//Custom Components
import NavBar from '../components/NavBar.js';
import SideMenu from '../containers/SideMenu.js';
import Lists from '../containers/Lists.js';

export default class ManageLists extends Component{
	componentDidMount(){
		console.log("this.props: ", this.props)
	}

	render(){

		return (
			<div className="all-lists mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-drawer">

				<NavBar />

				<SideMenu url={this.props.url} />

				<div className="mdl-layout__content">
					<Lists />
				</div>

			</div>
		)
	}

}