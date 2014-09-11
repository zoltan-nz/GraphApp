import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GraphAppENV.locationType
});

Router.map(function() {
  this.resource('sale', { path: 'sales/:sale_id' });
});

export default Router;
