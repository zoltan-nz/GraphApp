export default Ember.Component.extend({

  SHOW_ALERT_FOR: 4000,
  VISIBLE_LATENCY: 100,
  REMOVE_LATENCY: 1100,

  classNames: ['alert'],
  classNameBindings: ['type', 'visible'],

  message: null,

  visible: false,

  type: function() {
    return this.get('message.type');
  }.property('message.type'),

  didInsertElement: function() {
    var that = this;
    Ember.run.later(this, function() {that.set('visible', true);}, this.VISIBLE_LATENCY);
    Ember.run.later(this, this._removeAlert, this.SHOW_ALERT_FOR);
  },

  click: function() {
    this._removeAlert();
  },

  _removeAlert: function() {
    this.set('visible', false);
    Ember.run.later(this, function() {this.destroy();}, this.REMOVE_LATENCY);
  }

});
