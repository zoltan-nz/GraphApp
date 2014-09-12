var Router = Ember.Router.extend({
  location: GraphAppENV.locationType
});

Router.map(function() {
  this.resource('sales');
  this.resource('sale', { path: ':sale_id' });
});

export default Router;
