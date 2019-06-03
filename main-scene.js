import * as THREE from 'three.js';
var scene, camera, renderer;
var cube;
var cube = [];

        function init() {
          scene = new THREE.Scene();
          renderer = new THREE.WebGLRenderer();
          renderer.serSize(window.innerWidth, window.innerHeight);
          document.body.appendChild(renderer.domElement);
          camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 20000);
          camera.position.set(0,0,50);
          scene.add(camera);

          var cubeShape = new THREE.BoxGeometry(25,25,25);
          var cubeMaterial = new THREE.MeshBasicMaterial();

          cube = new Three.Mesh( cubeShape, cubeMaterial );
          scene.add( cube );

          window.addEventListener('resize', function(){
            var newWidth = window.innerWidth;
            var newHeight = window.innerHeight;
            renderer.setSize(newWidth,newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
          })
        }

        function animate(){
          requestAnimationFrame(animate);
          renderer.render(scene,camera);
        }

