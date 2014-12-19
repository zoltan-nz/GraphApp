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

test('visiting /', function() {
  visit('/');

  andThen(function() {
    equal(currentPath(), 'index');
  });
});

test('has First Second Third', function() {
  visit('/');

  andThen(function() {
    equal(find('.list').text().trim().replace(/\s\s/g, ''), 'First Second Third');
  });
});
