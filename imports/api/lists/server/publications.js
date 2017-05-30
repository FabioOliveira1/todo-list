// All links-related publications

import { Meteor } from 'meteor/meteor';
import { ListsCollection } from '../lists.js';

Meteor.publish('lists.all', function () {
  return ListsCollection.find();
});

Meteor.publish('lists.my', function (userId) {
  return ListsCollection.find({ createdBy: user._id });
});