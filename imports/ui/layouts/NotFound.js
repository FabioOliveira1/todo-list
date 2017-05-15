import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class NotFound extends Component{

	constructor(){
		super();
	}

	render(){
		return (
			<div className="app-body">
				<div>NotFound</div>
				<a href="/dashboard">Dashboard</a>
			</div>
		)
	}

}