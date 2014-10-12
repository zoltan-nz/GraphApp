import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://api-the-one.herokuapp.com',
  namespace: 'api'
});
