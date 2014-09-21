export default {
  name: 'alert',

  initialize: function(container, application) {
    application.inject('controller', 'alert', 'service:alert');
    application.inject('route', 'alert', 'service:alert');
  }
};
