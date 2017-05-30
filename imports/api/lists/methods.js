// Methods related to links

import { Meteor } from 'meteor/meteor';
// import { check, Match } from 'meteor/check';
// import slug from 'slug';

import { ListsCollection } from '/imports/api/lists/lists';

Meteor.methods({
	'lists.insert'(list) {
		// check(module.name, String);
		// check(module.description, String);
		// check(module.appKey, String);

		// return ListsCollection.insert({
		// 	createdAt: Date.now(),
		// 	...list
		// });

		console.log("Yahoy: ", list)
	}
});
