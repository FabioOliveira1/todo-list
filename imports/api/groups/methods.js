// Methods related to links

import { Meteor } from 'meteor/meteor';
// import { check, Match } from 'meteor/check';
// import slug from 'slug';

import { GroupsCollection } from '/imports/api/groups/groups';

Meteor.methods({
	'groups.insert'(group) {
		// check(module.name, String);
		// check(module.description, String);
		// check(module.appKey, String);

		// return GroupsCollection.insert({
		// 	createdAt: Date.now(),
		// 	...list
		// });

		console.log("Yahoy: ", group)
	}
});
