import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class Dashboard extends Component{

	constructor(){
		super();
	}

	render(){
		return (
			<div className="app-body">
				<div>Dashboard</div>
				<a href="/">AppBody</a>
			</div>
		)
	}

}