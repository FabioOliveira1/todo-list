// Npm Packages
import React, { Component } from 'react';
// Metor Packages
import createBrowserHistory from 'history/createBrowserHistory'

const history  = createBrowserHistory();
export default class LoggedInUserDropdown extends Component{

	componentDidMount(){
		componentHandler.upgradeDom('MaterialMenu', 'mdl-menu');
	}


	render(){
		return(
			<div className='logged-in-user'>
				<button
					id="logged-in-user__selection-lower-right"
					className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
					<div className="logged-in-user__avatar ">
					</div>

				</button>

				<ul id="logged-in-user-menu"  className="mdl-list mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
				htmlFor="logged-in-user__selection-lower-right">
					<div className="logged-in-user__account-details">
						<div className="logged-in-user__great-avatar">
						</div>
						<img
							className="logged-in-user__great-avatar"
							src="/img/components/logged-user-avatar/avatar0.png" alt={this.props.user.profile.name}/>
						<h5>
							<strong className="logged-in-user__user-name">{this.props.user.profile.name}</strong>
							<small className="logged-in-user__user-email">{this.props.user.emails[0].address}</small>
						</h5>

					</div>
					<hr/>

					<li
						onClick={()=>{

						}}
						className="mdl-menu__item mdl-list__item">
						<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-icon">edit</i>
							Perfil
						</span>
					</li>
					<hr/>

					<li
						onClick={()=>{
							let Redirect = (user, loggingIn) => {

								Meteor.logout();
								if(!user && !loggingIn)
									Redirect(Meteor.user(), Meteor.loggingIn())

								history.push("/login");
								history.go(0);
							}

							Meteor.logout();
							Redirect(Meteor.user(), Meteor.loggingIn());
						}}
						className="mdl-menu__item mdl-list__item">
						<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-icon">power_settings_new</i>
							Sair
						</span>
					</li>
				</ul>
			</div>
		)
	}
}



