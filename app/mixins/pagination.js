import Ember from 'ember';

export default Ember.Mixin.create({

  totalPages: function() {
    var typeKey = this.get('model.type.typeKey');
    return this.store.metadataFor(typeKey).total;
  }.property('model')
});
