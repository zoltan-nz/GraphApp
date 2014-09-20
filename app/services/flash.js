export default Ember.Object.extend({

  message: null,

  init: function() {
    console.log('Flash initialized');
  },

  activeController: function() {
    return this.container.lookup('controller:application').get('currentRouteName');
  },

  notice: function(message) {
    this._createMessage(message, 'notice');
  },

  success: function(message) {
    this._createMessage(message, 'success');
  },

  alert: function(message) {
    this._createMessage(message, 'alert');
  },

  _createMessage: function(message, type) {
    this.set('message', Ember.Object.create({text: message, type: type}));
  }

});
