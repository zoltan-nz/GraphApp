export default Ember.View.extend({

  width: 300,
  height: 300,

  scene: function() {
    return new THREE.Scene();
  }.property(),

  camera: function() {
    return new THREE.PerspectiveCamera(150, 1, 0.1, 1000);
  }.property('width', 'height'),

  geometry: function() {
    return new THREE.BoxGeometry(1, 1, 1);
  }.property(),

  material: function() {
    return new THREE.MeshBasicMaterial( { color: 0xff0000 });
  }.property(),

  cube: function() {
    return new THREE.Mesh( this.get('geometry'), this.get('material'));
  }.property('geometry', 'material'),

  renderer: function() {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( this.get('width'), this.get('height') );
    return renderer;
  }.property('width', 'height'),

  renderAnimation: function() {
    //requestAnimationFrame (this.get('render'));
    //this.get('renderer').render(this.get('scene'), this.get('camera'));
  },

  didInsertElement: function() {
    this.$().append(this.get('renderer.domElement'));
    //this.get('scene').add(this.get('renderer'));
    //this.get('renderer').render(this.get('scene'), this.get('camera'));

    //this.renderAnimation();
  }

});
