// Meteor
import { Meteor } from 'meteor/meteor';
// React
import React, { Component } from 'react';
// History
import createBrowserHistory from 'history/createBrowserHistory'
//Custom Components
import LoginCard from '../components/LoginCard.js';

const history  = createBrowserHistory();
export default class Login  extends Component{
	constructor(){
		super();
		this.state ={
			errorMessage: false
		}
	}

	_doLogin(e,p){
			Meteor.logout();
			Meteor.loginWithPassword({email:e},p,(error)=>{
				if(error){
					console.log("error.message: ", error.message)
				}else{
					console.log("Success!");
					history.push("/dashboard");
					history.go(0);
				}
			})
	}

	render() {
		return (
			<div className="login">

				<LoginCard
					_doLogin={this._doLogin.bind(this)}
					className="login__login-card">
				</LoginCard>
			</div>
		);
	}
}