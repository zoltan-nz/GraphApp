export default Ember.View.extend({

  classNames: 'first-three',
  templateName: 'views/first-three',

  width: 300,
  height: 300,
  color: 0x00ff00,
  z: 2,

  eventObject: {},

  oldPageX: null,
  oldPageY: null,

  clientX: function() {
    return this.get('eventObject.clientX');
  }.property('eventObject.clientX'),

  clientY: function() {
    return this.get('eventObject.clientY');
  }.property('eventObject.clientY'),

  offsetX: function() {
    return this.get('eventObject.offsetX');
  }.property('eventObject.offsetX'),

  offsetY: function() {
    return this.get('eventObject.offsetY');
  }.property('eventObject.offsetY'),

  pageX: function() {
    return this.get('eventObject.pageX');
  }.property('eventObject.pageX'),

  pageY: function() {
    return this.get('eventObject.pageY');
  }.property('eventObject.pageY'),

  moveX: function() {

    var oldPageX = this.get('oldPageX'),
        pageX    = this.get('pageX');

    if (oldPageX) {
      ((oldPageX-pageX) > 0) ? this.send('moveLeft') : this.send('moveRight');
      this.set('oldPageX', pageX);
    } else {
      this.set('oldPageX', this.get('pageX'));
    }
  }.observes('pageX'),

  moveY: function() {

    var oldPageY = this.get('oldPageY'),
        pageY    = this.get('pageY');

    if (oldPageY) {
      ((oldPageY-pageY) > 0) ? this.send('moveUp') : this.send('moveDown');
      this.set('oldPageY', pageY);
    } else {
      this.set('oldPageY', this.get('pageY'));
    }
  }.observes('pageY'),

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
    this.renderRunner();
  }.on('init').observes('z', 'width', 'height'),

  renderRunner: function() {
    this.get('renderer').render( this.get('scene'), this.get('camera') );
  },

  didInsertElement: function() {

    this.$('#cube').append( this.get('renderer').domElement );
    this.get('scene').add( this.get('cube') );

    this.renderRunner();
  },

  click: function() {
    this.get('cube').rotation.x += 0.1;
    this.get('cube').rotation.y += 0.1;
    this.renderRunner();
  },

  mouseEnter: function(event) {
     this.set('eventObject', event);
  },

  mouseLeave: function(event) {
    this.set('eventObject', event);
  },

  mouseMove: function(event) {
    this.set('eventObject', event);
  },

  actions: {
    moveLeft: function() {
      this.get('cube').rotation.x += 0.1;
      this.renderRunner();
    },

    moveRight: function() {
      this.get('cube').rotation.x -= 0.1;
      this.renderRunner();
    },

    moveUp: function() {
      this.get('cube').rotation.y += 0.1;
      this.renderRunner();
    },

    moveDown: function() {
      this.get('cube').rotation.y -= 0.1;
    }
  }
});
