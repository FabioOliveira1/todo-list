// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

export default class Dashboard extends Component{

	constructor(){
		super();

		this.state = {
			test: [
				{
					_id: (Date.now() * Math.random()).toString(),
					title: "Todo 1",
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
							done: false
						},
					],
					createdBy:Meteor.userId(),
					roles: Meteor.user().roles
				},
				{
					_id: (Date.now() * Math.random()).toString(),
					title: "Todo 2",
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
							done: false
						},
					],
					createdBy:Meteor.userId(),
					roles: Meteor.user().roles
				},
				{
					_id: (Date.now() * Math.random()).toString(),
					title: "Todo 3",
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
							done: false
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
				{this.state.test.map((item)=>{
					return(

						<div key={item._id} className="
									mdl-cell
									mdl-cell--4-col-desktop
									mdl-cell--6-col-tablet
									mdl-cell--12-col-phone">
							<h4 className="modes__content-title">
								head {item.title}
							</h4>
							<div className="mdl-grid">
								<div className="
									mdl-cell
									mdl-cell--6-col
									mdl-cell--8-col-tablet
									mdl-cell--4-col-phone
								">
									bd {item.title}
								</div>
								<div className="
									mdl-cell
									mdl-cell--6-col
									mdl-cell--8-col-tablet
									mdl-cell--4-col-phone
								">
									db {item.title}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		)
	}

}