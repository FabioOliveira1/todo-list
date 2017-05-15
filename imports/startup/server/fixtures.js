// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	if (Accounts.users.find({}).count() === 0) {
		const userDefault =
		//initial user
		{
			username: 'admin',
			emails: [
				{address: 'admin@todolistexample.com', verified: true}
			],
			createdAt: new Date(),
			profile:{
				name: 'admin'
			}
		}


		let _id = Accounts.users.insert(userDefault);

		Roles.addUsersToRoles(_id, 'admin');
		Accounts.setPassword(_id, 'admin');
	}
});
