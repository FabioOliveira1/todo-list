// Npm Packages
import React, { Component } from 'react';

export default class SideMenu extends Component{
	componentDidMount(){
		componentHandler.upgradeDom();
	}

	render(){
		return(
			<div className="side-menu mdl-layout__drawer">
				<div className="logged-in-user__static mdl-shadow--2dp">
					<div className="logged-in-user__full-avatar">
						<img src='/img/components/logged-user-avatar/avatar0.png' alt={ this.props.user.username }/>
					</div>
					<div className="logged-in-user__user-data">
						<h6>
							{ this.props.user.profile.name } <br/>
						</h6>
					</div>
				</div>
				<nav className="mdl-navigation">
					<a className={`mdl-navigation__link ${(this.props.url.split("dashboard").length > 1) ? "selected" : ""}`} href="/dashboard">
						<i className="material-icons">dashboard</i> Dashboard
					</a>
					<a className={`mdl-navigation__link ${(this.props.url.split("manage-lists").length > 1) ? "selected" : ""}`} href="/manage-lists">
						<i className="material-icons">mode_edit</i> Gerenciar listas
					</a>
					<a className="mdl-navigation__link" href="/submit">
						<i className="material-icons">send</i> Responder
					</a>
				</nav>

			</div>
		)

}}



