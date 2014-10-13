export default Ember.ObjectController.extend({
  host: EmberENV.HOST,
  status: 'offline',

  setStatus: function() {
    var that = this;
    $.getJSON(this.get('host'), function(json) {
      if (json.response === 'instance is on service') {
        that.set('status', 'online');
      }
    });
  }.on('init')
});
