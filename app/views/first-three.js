export default Ember.View.extend({

  width: 300,
  height: 300,

  scene: function() {
    return new THREE.Scene();
  },

  didInsertElement: function() {

    var scene = this.get('scene').apply();
    var camera = new THREE.PerspectiveCamera( 75, this.get('width')/this.get('height'), 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( this.get('width'), this.get('width') );

    this.$().append( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function render() {
      requestAnimationFrame( render );

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render( scene, camera );
    }

    render();
  }

});
