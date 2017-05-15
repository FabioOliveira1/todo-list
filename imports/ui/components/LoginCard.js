// Meteor
import { Meteor } from 'meteor/meteor';
// React
import React, { Component } from 'react';


export default class LoginCard extends Component{

	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	submit(e){
		e.preventDefault();
		this.props._doLogin(this.state.email,this.state.password)
	}

	_handlerEmail(e){
		this.setState({
			email:e.target.value
		})
	}

	_handlerPassword(e){
		this.setState({
			password:e.target.value
		})
	}

	render(){
		return (

			<div className={`${this.props.className} mdl-card mdl-shadow--2dp`}>
				<div className="mdl-card__title">
					<h2 className="mdl-card__title-text">
						<img
							className="mdl-card__company-logo"
							src="/img/components/login-card/logo1.png"
							alt="Todo List Logo"/>

						<strong>Todo List</strong>
					</h2>
				</div>
				<div className="mdl-card__supporting-text">
					Faça o login com seu usuário e senha
				</div>
				<div className="mdl-card__actions mdl-card--border">

					<form id="form-submit-login" onSubmit={(e)=>{e.preventDefault(); this.props._doLogin(this.state.email,this.state.password);}}>
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
							<input
								className="mdl-textfield__input"
								type="text"
								id="email"
								onChange={this._handlerEmail.bind(this)}
								value={this.state.email}
							/>
							<label className="mdl-textfield__label" htmlFor="email">Email</label>
						</div>

						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
							<input
								className="mdl-textfield__input"
								type="password"
								id="password"
								onChange={this._handlerPassword.bind(this)}
								value={this.state.password}
							/>
							<label className="mdl-textfield__label" htmlFor="password">Senha</label>
						</div>

						<div>
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-color--blue-100 mdl-button--raised mdl-js-ripple-effect"

							>
								Entrar
							</button>

						</div>

						<hr/>

						<div className="forgot-password">
							<h6 className="forgot-password__disclamer">
								<div onClick={()=>{console.log("esqueceu a senha")}}>
									esqueceu a senha?
								</div>
							</h6>

						</div>

					</form>
				</div>
				<div id="toast-wrapper" className="mdl-js-snackbar mdl-snackbar">
					<div className="mdl-snackbar__text"></div>
					<button className="mdl-snackbar__action" type="button"></button>
				</div>
			</div>
		);
	}

}