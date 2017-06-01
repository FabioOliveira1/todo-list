// Meteor
import { Meteor } from 'meteor/meteor';
// React
import React, { Component } from 'react';
// History
import createBrowserHistory from 'history/createBrowserHistory'
//Bert alert
import { Bert } from 'meteor/themeteorchef:bert';

//Custom Components
import LoginCard from '../components/LoginCard.js';

const history  = createBrowserHistory();
export default class Login  extends Component{

	_doLogin(e,p){
			Meteor.logout();
			Meteor.loginWithPassword({email:e},p,(error)=>{
				if(error){
					console.log("error.message: ", error.message)
					Bert.alert({
						message: error.message,
						type: "danger",
						style: "growl-top-right",
						icon: "fa-times"
					});
				}else{
					Bert.alert({
						message: "Logging in!",
						type: "success",
						style: "growl-top-right",
						icon: "fa-check"
					});
					Meteor.call("initDatabase");
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