export default Ember.View.extend({
  classNames: ['alert-box'],
  templateName: 'views/alert',
  messages: [],

  alertMessageChangedObserver: function() {
    this.get('messages').addObject(this.get('controller.alert.message'));
  }.observes('controller.alert.message')
});
