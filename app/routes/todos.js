export default Ember.Route.extend({

  //beforeModel: function(transition) {
  //
  //},

  model: function() {
    var status = this.controllerFor('application').get('status');
    return (status === 'online') ? this.store.find('todo') : [{body: 'The server is offline'}];
  }

  //afterModel: function(model, transition) {
  //
  //},
  //
  //setupController: function(controller, model) {
  //  this._super(controller, model);
  //},
  //
  //renderTemplate: function() {
  //  this.render();
  //
  //
  //  //this.render('post', {  // the template name associated with 'post' Route
  //  //  into: 'application', // the parent route to 'post' Route
  //  //  outlet: 'main',      // {{outlet}} and {{outlet 'main' are synonymous}},
  //  //  view: 'post',        // the view associated with the 'post' Route
  //  //  controller: 'post',  // the controller associated with the 'post' Route
  //  //})
  //}

});
