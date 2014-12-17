import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  ready: DS.attr('boolean'),

  project: DS.belongsTo('project', { async: true, inverse: 'todo' })
});
