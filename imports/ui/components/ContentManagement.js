// Meteor
import { Meteor } from 'meteor/meteor';
// React Package
import React, { Component } from 'react';

//Custom Components
import FormList from './FormList.js';
import MiniListCard from './MiniListCard.js';

export default class ContentManagement extends Component{

	render(){

		return (
			<div className="mdl-layout__content">
				<div className="mdl-grid">
					<div className="
						form-list
						mdl-cell
						mdl-cell--5-col-desktop
						mdl-cell--6-col-tablet
						mdl-cell--8-col-phone
					">
						<FormList list={(this.props.editingList) ? this.props.editingList : undefined} groups={this.props.groups}/>
					</div>
					<div className="
						all-mini-card-list
						mdl-cell
						mdl-cell--7-col-desktop
						mdl-cell--6-col-tablet
						mdl-cell--4-col-phone
					">
						<div className="mdl-grid">
							<MiniListCard />
						</div>
					</div>
				</div>
			</div>
		)
	}

}