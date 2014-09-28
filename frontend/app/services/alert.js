export default Ember.Object.extend({

  message: null,

  info: function(title, message) {
    this._createMessage(title, message, 'alert-info');
  },

  success: function(title, message) {
    this._createMessage(title, message, 'alert-success');
  },

  warning: function(title, message) {
    this._createMessage(title, message, 'alert-warning');
  },

  danger: function(title, message) {
    this._createMessage(title, message, 'alert-danger');
  },

  _createMessage: function(title, message, type) {
    this.set('message', Ember.Object.create({title: title, text: message, type: type}));
  }

});
