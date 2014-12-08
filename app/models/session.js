export default DS.Model.extend({
  email:    DS.attr(),
  csrf:     DS.attr(),
  password: DS.attr(),
  remember: DS.attr('boolean', { defaultValue: false }),

  user: DS.belongsTo('user')
})
