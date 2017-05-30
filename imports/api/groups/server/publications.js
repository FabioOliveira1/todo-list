// All links-related publications

import { Meteor } from 'meteor/meteor';
import { GroupsCollection } from '../groups.js';

Meteor.publish('groups.all', function () {
  return GroupsCollection.find();
});

Meteor.publish('groups.my', function ( userId ) {
  return GroupsCollection.find({ createdBy: userId });
});