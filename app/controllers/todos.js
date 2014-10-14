import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['todos'],

  queryParams: ['page'],

  page: 1
});
