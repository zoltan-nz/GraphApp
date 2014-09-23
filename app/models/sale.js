import Model from 'graph-app/models/model';

export default Model.extend({
  date: DS.attr('date'),
  amount: DS.attr('number')
});
