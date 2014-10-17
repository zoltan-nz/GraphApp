export default Ember.Route.extend({

  beforeModel: function(transition) {

  },

  model: function() {
    return this.store.find('todo');
  },

  afterModel: function(model, transition) {

  },

  setupController: function(controller, model) {
    this._super(controller, model);
  },

  renderTemplate: function() {
    this.render();


    //this.render('post', {  // the template name associated with 'post' Route
    //  into: 'application', // the parent route to 'post' Route
    //  outlet: 'main',      // {{outlet}} and {{outlet 'main' are synonymous}},
    //  view: 'post',        // the view associated with the 'post' Route
    //  controller: 'post',  // the controller associated with the 'post' Route
    //})
  }

});
