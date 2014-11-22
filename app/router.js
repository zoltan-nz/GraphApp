import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('todos', { path: '/todos' }, function() {
    this.route('new');
    this.route('edit', { path: '/:todo_id'});
    this.route('delete');
  });
  this.resource('user', { path: 'users/:user_id' }, function() { });
  this.route('threejs');
});

export default Router;
