import {moduleFor,test} from 'ember-qunit';

moduleFor('service:alert', 'AlertService', {
  // Specify the other units that are required for this test.
  needs: ['controller:index']
});

test('injected in controllers', function() {
  var controllerIndex = this.get('controller:index');
  ok(controllerIndex.alert);
});
