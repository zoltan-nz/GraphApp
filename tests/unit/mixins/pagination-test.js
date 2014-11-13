import Ember from 'ember';
import PaginationMixin from 'graph-app/mixins/pagination';

module('PaginationMixin');

// Replace this with your real tests.
test('it works', function() {
  var PaginationObject = Ember.Object.extend(PaginationMixin);
  var subject = PaginationObject.create();
  ok(subject);
});

test('#totalPages', function() {
  var subjectController = Ember.ArrayController.extend(PaginationMixin, {
  });
  var subject = subjectController.create();
  ok(subject);
  ok(subject.totalPages());
});
