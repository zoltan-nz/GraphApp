export default Ember.ObjectController.extend({
  needs: ["sales"],

  actions: {
    generateSampleData: function() {
      this._generateSampleData();
    }
  },

  _generateSampleData: function() {
    this.store.createRecord('sale', {date: new Date().toString(), amount: Math.random()*1000});
  }
});
