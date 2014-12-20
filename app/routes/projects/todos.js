export default Ember.Route.extend({

  model: function (params) {
    return this.store.find('project', params.project_id).then(function (project) {
      project.get('todos').then(function (todos) {
        return todos;
      });
    });
  }

});
