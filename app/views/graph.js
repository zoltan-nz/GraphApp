import MouseTrackingMixin from 'graph-app/mixins/mouse-tracking';

export default Ember.View.extend(MouseTrackingMixin, {
  templateName: 'views/graph',
  canvasWidth: 0,
  canvasHeight: 0,
  ctx: null,

  didInsertElement: function() {
    this._handleResize();
    this.$(window).on('resize', Ember.run.bind(this, this._handleResize));

    this.set('ctx', this.$().find('canvas')[0].getContext('2d'));
    this._clean();
    this._drawAxis();
  },

  canvasSizeChanged: function() {
    if (!this.get('ctx')) return;
    this._clean();
    this._drawAxis();
  }.observes('canvasWidth', 'canvasHeight'),

  _handleResize: function() {
    this.set('canvasWidth', this.$().width());
    this.set('canvasHeight', this.$().height());
  },

  _clean: function() {
    var ctx = this.get('ctx');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0,0, this.get('canvasWidth'), this.get('canvasHeight'));
  },

  _drawAxis: function() {
    var ctx = this.get('ctx');
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(10,40);
    ctx.closePath();
    ctx.stroke();
  },

  mouseMove: function(event) {
    this._super(event);
    var ctx = this.get('ctx'),
        imageData = ctx.createImageData(1,1);

    ctx.putImageData(imageData, parseFloat(this.get('offsetX')), parseFloat(this.get('offsetY')));
  }

})
