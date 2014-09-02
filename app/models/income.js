import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  amount: DS.attr('integer')
});
