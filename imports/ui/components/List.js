// Meteor
import { Meteor } from 'meteor/meteor';
// Npm Packages
import React, { Component } from 'react';

export default class List extends Component{
	componentDidMount(){
		componentHandler.upgradeDom();
	}

	render(){
		return(
			<div className="
				mdl-cell
				mdl-cell--4-col-desktop
				mdl-cell--6-col-tablet
				mdl-cell--12-col-phone
				list-card
			">
				<div className="demo-card-wide mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title">
						<h2 className="mdl-card__title-text">{this.props.name}</h2>
					</div>
					<div className="demo-list-action mdl-list">
						{this.props.items.map((item)=>(
							<div key={item._id} className="mdl-list__item">
								<span className="mdl-list__item-primary-content">
								<span className={(item.done) ? "mdl-list__item-done" : ""}>{item.name}</span>
								</span>
								<div className="mdl-list__item-secondary-action">
									<i className={`${(item.done) ? "mdl-list__item-done " : ""} material-icons`}>{(item.done) ? "check_box" : "check_box_outline_blank"}</i>
								</div>
							</div>
						))}
					</div>
					<div className="mdl-card__menu">
						<button id={`menu-actions${this.props._id}`} className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
						<i className="material-icons">more_vert</i>
						</button>

						<ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor={`menu-actions${this.props._id}`}>
							<li className="mdl-menu__item">Editar</li>
							<li disabled className="mdl-menu__item">Arquivar</li>
							<hr className="standard-divider"/>
							<li className="mdl-menu__item">Excluir</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}