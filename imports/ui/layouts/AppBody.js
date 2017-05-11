import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class AppBody extends Component{

	constructor(){
		super();
	}

	render(){
		return (
			<div className="app-body">
				<div>AppBody</div>
				<a href="/dashboard">Dashboard</a>
			</div>
		)
	}

}