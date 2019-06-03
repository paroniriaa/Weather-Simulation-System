// import './styles/main.scss';
// import * as THREE from './three';
// import ''


// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000)


// var renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', function() {
//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     renderer.setSize( width, height);
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
// })

// controls = new THREE.OrbitControls( camera, renderer.domElement);

// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true});

// var cube = new THREE.Mesh(geometry, material);

// scene.add(cube);
// camera.position.z = 5;

// var roatating  = function (){
//     cube.ratation.x += 0.01;
//     cube.ratation.y += 0.01;
// }

// var light = new THREE.PointLight(0xFFFFFF, 1, 500)
// light.position.set(10,0,25);
// scene.add(light);

// var render = function(){
//     requestAnimationFrame(render);
//     renderer.render(scene,camera);
// }

// render()
// roatating()