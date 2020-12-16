
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x681F68, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.3 ) );

	migeometria.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.3 ) );

	migeometria.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );

	migeometria.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.3 ) );

	migeometria.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.3 ) );


	

	migeometria.faces.push( new THREE.Face3( 0, 1, 2) );
	migeometria.faces.push( new THREE.Face3( 0, 2, 3 ) );
	migeometria.faces.push( new THREE.Face3( 4,5,6));
	migeometria.faces.push( new THREE.Face3( 7,8,9));
	migeometria.faces.push( new THREE.Face3( 10,11,12));
	migeometria.faces.push( new THREE.Face3( 13,14,15));

	//OBJETO2
	var migeometria1 = new THREE.Geometry();
	migeometria1.vertices.push( new THREE.Vector3( 0.0, 0.5, -0.3 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.3, 0.5, -0.3 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.3, 0.5, 0.3 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.0, 0.5, 0.3 ) );

	migeometria1.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.3, 0.5, -0.3 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.3, 0.5, 0.3 ) );

	migeometria1.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.0, 0.5, -0.3 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.3, 0.5, -0.3 ) );

	migeometria1.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.0, 0.5, -0.3 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.0, 0.5, 0.3 ) );

	migeometria1.vertices.push( new THREE.Vector3( 0.2, 0.8, 0.0 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.0, 0.5, 0.3 ) );
	migeometria1.vertices.push( new THREE.Vector3( 0.3, 0.5, 0.3 ) );

	migeometria1.faces.push( new THREE.Face3( 0, 1, 2) );
	migeometria1.faces.push( new THREE.Face3( 0, 2, 3 ) );
	migeometria1.faces.push( new THREE.Face3( 4,5,6));
	migeometria1.faces.push( new THREE.Face3( 7,8,9));
	migeometria1.faces.push( new THREE.Face3( 10,11,12));
	migeometria1.faces.push( new THREE.Face3( 13,14,15));
    
    //OBJETO3
	var migeometria2 = new THREE.Geometry();
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.7, 0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.7, 0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.9, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.7, 0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.9, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.7, -0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.7, -0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.9, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.7, -0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.7, 0.3 ) );

	migeometria2.vertices.push( new THREE.Vector3( 0.2, 0.9, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.7, 0.3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.3, 0.7, 0.3 ) );

	migeometria2.faces.push( new THREE.Face3( 0, 1, 2) );
	migeometria2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	migeometria2.faces.push( new THREE.Face3( 4,5,6));
	migeometria2.faces.push( new THREE.Face3( 7,8,9));
	migeometria2.faces.push( new THREE.Face3( 10,11,12));
	migeometria2.faces.push( new THREE.Face3( 13,14,15));

	//OBJETOTALLO
	var migeometria3 = new THREE.Geometry();
	migeometria3.vertices.push( new THREE.Vector3( 0.1, -0.4, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, -0.4, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, 0.0, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.1, 0.0, 0.2 ) );

	migeometria3.vertices.push( new THREE.Vector3( 0.1, 0.0, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, 0.0, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, -0.4, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.1, -0.4, -0.2 ) );

	migeometria3.vertices.push( new THREE.Vector3( 0.1, -0.4, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.1, -0.4, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.1, 0.0, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.1, 0.0, -0.2 ) );

	migeometria3.vertices.push( new THREE.Vector3( 0.2, -0.4, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, -0.4, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, 0.0, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, 0.0, 0.2 ) );

	migeometria3.vertices.push( new THREE.Vector3( 0.1, -0.4, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, -0.4, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, -0.4, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.1, -0.4, 0.2 ) );

	migeometria3.vertices.push( new THREE.Vector3( 0.1, 0.0, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, 0.0, 0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.2, 0.0, -0.2 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.1, 0.0,-0.2 ) );

	migeometria3.faces.push( new THREE.Face3( 0, 1, 2) );
	migeometria3.faces.push( new THREE.Face3( 0, 2, 3 ) );
	migeometria3.faces.push( new THREE.Face3( 4,5,6));
	migeometria3.faces.push( new THREE.Face3( 4,6,7));
	migeometria3.faces.push( new THREE.Face3( 8,9,10));
	migeometria3.faces.push( new THREE.Face3( 8,10,11));
	migeometria3.faces.push( new THREE.Face3( 12,13,14));
	migeometria3.faces.push( new THREE.Face3( 12,14,15));
	migeometria3.faces.push( new THREE.Face3( 16,17,18));
	migeometria3.faces.push( new THREE.Face3( 16,18,19));
	migeometria3.faces.push( new THREE.Face3( 20,21,22));
	migeometria3.faces.push( new THREE.Face3( 20,22,23));
        
    
    var material = new THREE.MeshBasicMaterial( { color: 0x00FF00 } ); 
    var material1 = new THREE.MeshBasicMaterial( { color: 0x50EA2E} );
    var material2 = new THREE.MeshBasicMaterial( { color: 0x01560C} );
	var material3 = new THREE.MeshBasicMaterial( { color: 0xA45219 } );
    
    var miobjeto = new THREE.Mesh (migeometria, material); 
	var miobjeto1=new THREE.Mesh(migeometria1,material1);
	var miobjeto2=new THREE.Mesh(migeometria2,material2);
	var miobjeto3=new THREE.Mesh(migeometria3,material3);

	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add( miobjeto );
	scene.add(miobjeto1);
	scene.add(miobjeto2);
	scene.add(miobjeto3);

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
