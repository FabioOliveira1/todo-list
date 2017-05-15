// Meteor
import { Meteor } from 'meteor/meteor';
// React
import React, { Component } from 'react';
// History
import createBrowserHistory from 'history/createBrowserHistory'

const history  = createBrowserHistory();
export default class NotFound extends Component{

	constructor(){
		super();
		this.state = {
			redirectTime: 5
		}
	}

	componentDidMount(){
		this._redirect(this.state.redirectTime);
	}

	_redirect(s){
		if(s > 0){
			setTimeout(()=>{this.setState({redirectTime: s - 1}); this._redirect(s-1);}, 1000);
		}
		else{
			history.push("/dashboard");
			history.go(0);
		}
	}

	render(){
		return (

			<div className="not-found">
				<div className="not-found__not-found-card mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title">
						<h2 className="mdl-card__title-text">
							<strong>404 Not Found</strong>
						</h2>
					</div>
					<div className="mdl-card__supporting-text">
						{`Página não encontrada. Estaremos te redirecionando em ${this.state.redirectTime}.`}
					</div>
				</div>
			</div>
		);
	}

}