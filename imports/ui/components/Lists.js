// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

//Custom Components
import List from './List.js';

export default class Dashboard extends Component{

	constructor(){
		super();

		this.state = {
			test: [
				{
					_id: (Date.now() * Math.random()).toString(),
					name: "Todo 1",
					date: new Date(2017, 4, 29).getTime(),
					items: [
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 1",
							done: true
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 2",
							done: false
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: false
						},
					],
					createdBy:Meteor.userId(),
					roles: Meteor.user().roles
				},
				{
					_id: (Date.now() * Math.random()).toString(),
					name: "Todo 2",
					date: new Date(2017, 4, 29).getTime(),
					items: [
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 1",
							done: false
						},,
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: true
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: true
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 2",
							done: true
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: false
						},
					],
					createdBy:Meteor.userId(),
					roles: Meteor.user().roles
				},
				{
					_id: (Date.now() * Math.random()).toString(),
					name: "Todo 3",
					date: new Date(2017, 4, 29).getTime(),
					items: [
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 1",
							done: false
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 2",
							done: false
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: true
						},
					],
					createdBy:Meteor.userId(),
					roles: Meteor.user().roles
				},
				{
					_id: (Date.now() * Math.random()).toString(),
					name: "Todo 3",
					date: new Date(2017, 4, 29).getTime(),
					items: [
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 1",
							done: false
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 2",
							done: false
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: true
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: true
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: true
						}
					],
					createdBy:Meteor.userId(),
					roles: Meteor.user().roles
				},
				{
					_id: (Date.now() * Math.random()).toString(),
					name: "Todo 3",
					date: new Date(2017, 4, 29).getTime(),
					items: [
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 1",
							done: false
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 2",
							done: false
						},
						{
							_id: (Date.now() * Math.random()).toString(),
							name: "Do 3",
							done: true
						},
					],
					createdBy:Meteor.userId(),
					roles: Meteor.user().roles
				}
			]
		}
	}

	render(){
		console.log(this.props)
		return (
			<div className="mdl-grid">
				{this.state.test.map((list)=>(<List key={list._id} {...list} />))}
			</div>
		)
	}

}