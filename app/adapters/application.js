import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: EmberENV.HOST,
  namespace: 'api'
});
