// Meteor
import { Meteor } from 'meteor/meteor';
// React
import React, { Component } from 'react';

//Custom Components
import LoginCard from '../components/LoginCard.js';

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
				this.setState({
					errorMessage: error.message
				});
			}else{

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