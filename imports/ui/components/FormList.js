// Meteor
import { Meteor } from 'meteor/meteor';
// React Package
import React, { Component } from 'react';

export default class FormList extends Component{
	componentDidMount(){
		console.log("this.props: ", this.props)
	}

	render(){

		return (
			<div className="
				form-list
				mdl-cell
				mdl-cell--5-col-desktop
				mdl-cell--6-col-tablet
				mdl-cell--8-col-phone
			">
				FormList
			</div>
		)
	}

}