export default Ember.ArrayController.extend({

  actions: {
    deleteSale: function (record) {
      record.destroyRecord();
    },

    deleteAll: function () {
      this.store.find('sale').then(function (all) {
        all.invoke('destroyRecord');
      });
      this.alert.danger('Delete All', 'Successfully deleted all record.');
    },

    generateSampleData: function () {
      this._generateSampleData();
      this.alert.success('Generate Sample Data', 'Successfully created 60 record.');
    }
  },

  _generateSampleData: function() {
    var today = new Date();
    for (var i=60; i > 0; i--) {
      this.store.createRecord('sale', {date: moment(today).subtract(i, 'days').toString(), amount: Math.random()*1000}).save();
    }
  }
});
