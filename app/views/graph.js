import MouseTrackingMixin from 'graph-app/mixins/mouse-tracking';

export default Ember.View.extend(MouseTrackingMixin, {
  templateName: 'views/graph',
  canvasWidth: 0,
  canvasHeight: 0,

  didInsertElement: function() {
    this._handleResize();
    this.$(window).on('resize', run.bind(this, this._handleResize));
  },

  _handleResize: function() {
    this.set('canvasWidth', this.$().width());
    this.set('canvasHeight', this.$().height());
  }

})
