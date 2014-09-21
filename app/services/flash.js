export default Ember.Object.extend({

  message: null,

  init: function() {
    console.log('Flash initialized');
  },

  activeController: function() {
    return this.container.lookup('controller:application').get('currentRouteName');
  },

  info: function(message) {
    this._createMessage(message, 'alert-info');
  },

  success: function(message) {
    this._createMessage(message, 'alert-success');
  },

  warning: function(message) {
    this._createMessage(message, 'alert-warning');
  },

  danger: function(message) {
    this._createMessage(message, 'alert-danger');
  },

  _createMessage: function(message, type) {
    this.set('message', Ember.Object.create({text: message, type: type}));
  }

});
