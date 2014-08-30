import Ember from 'ember';
import RawDataArray from 'graph-app/models/raw-data-array';

export default Ember.Route.extend({
  model: function() {
    return this.get('rawData');
  },

  rawData: RawDataArray
});
