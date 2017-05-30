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

Meteor.methods({
	'initDatabase': function (unit) {

		let user = Accounts.users.findOne({ _id: this.userId });
		if (typeof user == 'object' && typeof unit == 'string') {

			if (GroupsCollection.find({createdBy: user._id}).count() === 0) {
				GroupsCollection.insert([
					{
						name: "Pessoal",
						color: "#ea3b3b",
						roles: user.roles,
						createdBy: user._id,
						createdAt: Date.now()
					},
					{
						name: "Trabalho",
						color: "#eab93c",
						roles: user.roles,
						createdBy: user._id,
						createdAt: Date.now()
					},
					{
						name: "Estudos",
						color: "#4286f4",
						roles: user.roles,
						createdBy: user._id,
						createdAt: Date.now()
					}
				]);
			}


		}
	}
});