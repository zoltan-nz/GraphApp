export default Ember.Mixin.create({

  eventObject: {},

  clientX: function () {
    return this.get('eventObject.clientX');
  }.property('eventObject.clientX'),

  clientY: function () {
    return this.get('eventObject.clientY');
  }.property('eventObject.clientY'),

  offsetX: function () {
    return this.get('eventObject.offsetX');
  }.property('eventObject.offsetX'),

  offsetY: function () {
    return this.get('eventObject.offsetY');
  }.property('eventObject.offsetY'),

  pageX: function () {
    return this.get('eventObject.pageX');
  }.property('eventObject.pageX'),

  pageY: function () {
    return this.get('eventObject.pageY');
  }.property('eventObject.pageY'),

  click: function (event) {
    this.set('eventObject', event);
  },

  mouseEnter: function (event) {
    this.set('eventObject', event);
  },

  mouseLeave: function (event) {
    this.set('eventObject', event);
  },

  mouseMove: function (event) {
    this.set('eventObject', event);
  }

});
