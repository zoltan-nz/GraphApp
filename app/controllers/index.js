export default Ember.ObjectController.extend({
  needs: ["sales"],

  actions: {
    generateSampleData: function() {
      _generateSampleData();
    }
  },

  _generateSampleData: function() {
    this.get('store').find('sale');
  }
});
