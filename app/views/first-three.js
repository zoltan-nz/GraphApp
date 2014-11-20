export default Ember.View.extend({

  width: 300,
  height: 300,
  color: 0x00ff00,
  z: 5,

  scene: function() {
    return new THREE.Scene();
  }.property(),

  camera: function() {
    return new THREE.PerspectiveCamera( 75, this.get('width')/this.get('height'), 0.1, 1000);
  }.property('width', 'height'),

  renderer: function() {
    return new THREE.WebGLRenderer();
  }.property(),

  geometry: function() {
    return new THREE.BoxGeometry( 1,1,1 );
  }.property(),

  material: function() {
    return new THREE.MeshBasicMaterial( { color: this.get('color')});
  }.property('color'),

  cube: function() {
    return new THREE.Mesh( this.get('geometry'), this.get('material') );
  }.property('geometry', 'material'),

  rendererSizeChanged: function() {
    this.get('renderer').setSize(this.get('width'), this.get('width'));
  }.on('init').observes('width', 'height'),

  cameraZChanged: function() {
    this.get('camera').position.z = this.get('z');
  }.on('init').observes('z'),

  didInsertElement: function() {

    var scene = this.get('scene');
    var camera = this.get('camera');

    //var renderer = this.get('renderer');
    //renderer.setSize( this.get('width'), this.get('width') );

    this.$().append( this.get('renderer').domElement );

    //var geometry = this.get('geometry');
    //var material = this.get('material');
    //var cube = new THREE.Mesh( geometry, material );
    scene.add( this.get('cube') );

    var that = this;

    function render() {
      requestAnimationFrame( render );

      that.get('cube').rotation.x += 0.1;
      that.get('cube').rotation.y += 0.1;

      that.get('renderer').render( that.get('scene'), that.get('camera') );
    }

    render();
  },

  click: function() {
    console.log('click');
  }

});
