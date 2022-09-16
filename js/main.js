alert('get')
import * as THREE from '../node_modules/three/build/three.module.js'
// import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js'

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200)

// Renderer
const renderer = new THREE.WebGL1Renderer({ antialias : true })

renderer.setClearColor("#8e57a2")

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// Make canvas responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})

// Create box
const boxGeometry = new THREE.BoxGeometry(2, 2, 2)
const boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
const boxMesh = new THREE.Mesh(boxGeometry, 
boxMaterial);
boxMesh.rotation.set(40, 0, 40);
scene.add(boxMesh);