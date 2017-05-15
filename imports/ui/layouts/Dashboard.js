// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

//Custom Components
import NavBar from '../components/NavBar.js';

export default class Dashboard extends Component{

	constructor(){
		super();
	}

	render(){

		return (
			<div className="all-lists mdl-layout mdl-js-layout mdl-layout--fixed-header">

				<NavBar />

				<div className="mdl-layout__content">
					<div className="page-content mdl-color-text--blue-grey-50">
						<h4 className="modes__content-title">
							head
						</h4>
						<div className="mdl-grid">
							<div className="
								mdl-cell
								mdl-cell--6-col
								mdl-cell--8-col-tablet
								mdl-cell--4-col-phone
							">
								bd
							</div>
							<div className="
								mdl-cell
								mdl-cell--6-col
								mdl-cell--8-col-tablet
								mdl-cell--4-col-phone
							">
								db
							</div>
						</div>

					</div>
				</div>


			</div>
		)
	}

}