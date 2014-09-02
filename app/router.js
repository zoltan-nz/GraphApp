import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GraphAppENV.locationType
});

Router.map(function() {
  this.resource('income');
});

export default Router;
