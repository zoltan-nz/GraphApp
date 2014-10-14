export default Ember.ObjectController.extend({
  needs: ['todos'],

  actions: {
    add: function() {
      var that = this;
      this.get('model').save(function() {that.transitionTo('todos');}, function(errors) {console.log(errors.toString());});
    }
  }
});
