import Ember from 'ember';

export default Ember.Mixin.create({

  totalPages: function() {
    var type = this.get('model.type')
    if (!type) return 0;
    var typeKey = type.get('typeKey');
    return this.store.metadataFor(typeKey).total;
  }.property('model')
});
