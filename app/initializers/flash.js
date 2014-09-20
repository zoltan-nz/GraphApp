export default {
  name: 'flash',

  initialize: function(container, application) {
    application.inject('controller', 'flash', 'service:flash');
    application.inject('route', 'flash', 'service:flash');
  }
};
