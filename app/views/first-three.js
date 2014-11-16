export default Ember.View.extend({

  width: function() {
    return 300;
  }.property(),

  height: function() {
    return 300;
  }.property(),

  scene: function() {
    return new THREE.Scene();
  }.property(),

  camera: function() {
    return new THREE.PerspectiveCamera(75, this.get('width') / this.get('height'));
  }.property('width', 'height'),

  geometry: function() {
    return new THREE.BoxGeometry(100, 100, 100);
  }.property(),

  material: function() {
    return new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true });
  }.property(),

  mesh: function() {
    return new THREE.Mesh( this.get('geometry'), this.get('material'));
  }.property('geometry', 'material'),

  renderer: function() {
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( this.get('width'), this.get('height') );
    return renderer;
  }.property('width', 'height'),

  didInsertElement: function() {
    this.get('scene').add(this.get('mesh'));
    this.$().append(this.get('renderer.domElement'));
    this.get('renderer').render(this.get('scene'), this.get('camera'));
  }

});
