export default Ember.Component.extend({
  classNames: ['alert'],
  classNameBindings: ['type'],

  message: null,

  type: function() {
    return this.get('message.type');
  }.property('message.type'),

  didInsertElement: function() {
    Ember.run.later(this, this._removeAlert, 4000);
  },

  click: function() {
    this._removeAlert();
  },

  _removeAlert: function() {
    this.$().fadeOut(800);
    Ember.run.later(this, function() {this.destroy();}, 4600);
  }

});
