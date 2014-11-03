import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Index', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /index', function() {
  visit('/index');

  andThen(function() {
    equal(currentPath(), 'index');
  });
});
