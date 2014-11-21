export default Ember.View.extend({

  classNames: 'first-three',
  templateName: 'views/first-three',

  width: 300,
  height: 300,
  color: 0x00ff00,
  z: 5,

  eventObject: null,

  clientX: function() {
    return this.get('eventObject.clientX')
  }.property('eventObject.clientX'),

  clientY: function() {
    return this.get('eventObject.clientY')
  }.property('eventObject.clientY'),

  offsetX: function() {
    return this.get('eventObject.offsetX')
  }.property('eventObject.offsetX'),

  offsetY: function() {
    return this.get('eventObject.offsetY')
  }.property('eventObject.offsetY'),

  pageX: function() {
    return this.get('eventObject.pageX')
  }.property('eventObject.pageX'),

  pageY: function() {
    return this.get('eventObject.pageY')
  }.property('eventObject.pageY'),

  scene: function() {
    return new THREE.Scene();
  }.property(),

  camera: function() {
    return new THREE.PerspectiveCamera( 75, this.get('width')/this.get('height'), 0.1, 1000);
  }.property(),

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
    this.get('renderer').setSize(this.get('width'), this.get('height'));
  }.on('init').observes('width', 'height'),

  cameraParamsChanged: function() {
    var camera = this.get('camera');

    camera.aspect = this.get('width')/this.get('height');
    camera.position.z = this.get('z');
    camera.updateProjectionMatrix();
  }.on('init').observes('z', 'width', 'height'),

  didInsertElement: function() {

    this.$('#cube').append( this.get('renderer').domElement );
    this.get('scene').add( this.get('cube') );

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
    this.get('cube').rotation.x += 0.1;
    this.get('cube').rotation.y += 0.1;
    this.get('render');
  },

  mouseEnter: function(event, view) {
     this.set('eventObject', event);
  },

  mouseLeave: function(event, view) {
    this.set('eventObject', event);
  },

  mouseMove: function(event, view) {
    this.set('eventObject', event);
  }

});
