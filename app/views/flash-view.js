export default Ember.View.extend({
  classNames: ['flash'],
  templateName: 'views/flash',
  messages: [],

  flashMessageChanged: function() {
    this.get('messages').addObject(this.get('controller.flash.message'));
  }.observes('controller.flash.message')
});
