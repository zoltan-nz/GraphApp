export default Ember.ObjectController.extend({
  needs: ["sales"],

  actions: {
    generateSampleData: function() {
      this._generateSampleData();
    }
  },

  _generateSampleData: function() {
    var today = new Date();
    for (var i=60; i > 0; i--) {
      this.store.createRecord('sale', {date: moment(today).subtract(i, 'days').toString(), amount: Math.random()*1000}).save();
    }
  }
});
