// Meteor
import { Meteor } from 'meteor/meteor';
// React
import React from 'react';
//Compose
import { compose } from 'react-komposer';

//Collections
import { ListsCollection } from '/imports/api/lists/lists.js';
import { GroupsCollection } from '/imports/api/groups/groups.js';

//Custom Components
import ContentManagement	 from '../components/ContentManagement.js';
//Custom Modules
import getTrackerLoader 	from '../../modules/TrackerLoader.js';

const reactiveMapper = (props, onData) => {
	if (Meteor.user()) {
		const subsLists = Meteor.subscribe("lists.my", Meteor.userId());
		const subsGroups = Meteor.subscribe("groups.my", Meteor.userId());

		let lists = [];
		let groups = [];
		let editingList;

		if(subsLists.ready() && subsGroups.ready()){
			lists = ListsCollection.find().fetch();
			groups = GroupsCollection.find().fetch();
			editingList = ListsCollection.findOne({_id: props.id});
		}

		onData(null, {
			user: Meteor.user(),
			lists,
			groups,
			editingList
		});
	}
}

export default compose(getTrackerLoader(reactiveMapper))(ContentManagement);