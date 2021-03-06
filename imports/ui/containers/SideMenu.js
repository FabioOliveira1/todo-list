// Meteor
import { Meteor } from 'meteor/meteor';
// React
import React from 'react';
//Compose
import { compose } from 'react-komposer';

//Custom Components
import SideMenu	from '../components/SideMenu.js';
//Custom Modules
import getTrackerLoader 	from '../../modules/TrackerLoader.js';

const reactiveMapper = (props, onData) => {
	if (Meteor.user()) {

		onData(null, { user: Meteor.user()});
	}
}

export default compose(getTrackerLoader(reactiveMapper))(SideMenu);