import * as THREE from 'three';
import * as Cesium from 'cesium';
import { RGBELoader  } from 'three/examples/jsm/loaders/RGBELoader';
import { getThreeModelQuaternion } from './3d';
type ThreeParams = {
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
}

const createCamera = (dom: HTMLDivElement) => {
    const camera = new THREE.PerspectiveCamera(
        75,
        dom.clientWidth / dom.clientHeight,
        0.1,
        100000,
    );
    return camera;
}

const addLight = (scene: THREE.Scene) => {
    const topLight = new THREE.DirectionalLight(0xffffff, 1.8);
    //@ts-ignore
    topLight.position.copy(Cesium.Cartesian3.fromDegrees(120.002, 30));
    topLight.position.z = topLight.position.z + 100
    topLight.setRotationFromQuaternion(
        new THREE.Quaternion(...getThreeModelQuaternion(120.002, 30))
    );
    const helper = new THREE.CameraHelper(topLight.shadow.camera)
    scene.add(helper)
    // topLight.position.set(0, 5000000, 5000000);
    topLight.castShadow = true;
    // const bottomLight = new THREE.DirectionalLight(0xffffff, 0.8);
    // bottomLight.position.set(0, -5000000, 0);
    // bottomLight.castShadow = true;
    const pointLight = new THREE.PointLight(0xffffff, 0.3);
    pointLight.position.set(5000000, 5000000, 5000000);
    const ambientLight = new THREE.AmbientLight(0xffffff, 10)

    scene.add(topLight);
    // scene.add(bottomLight);
    scene.add(pointLight);
    scene.add(ambientLight);
}

const createScene = () => {
    return new THREE.Scene();
}

const createRenderer = (dom: HTMLDivElement) => {
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        logarithmicDepthBuffer: true,
    });
    renderer.setSize(dom.clientWidth, dom.clientHeight);
    dom.appendChild(renderer.domElement);
    return renderer;
}

const addHDRI = (scene: THREE.Scene) => {
    new RGBELoader()
    .load('hdri/main.hdr', texture => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        
        // scene.background = texture
        scene.environment = texture
        // scene.rotation.y = Math.PI
    })
}

const threeInit = (dom: HTMLDivElement) => {
    const camera = createCamera(dom);
    const renderer = createRenderer(dom);
    const scene = createScene();
    addHDRI(scene);

    // add stuff
    addLight(scene);

    return {
        camera,
        renderer,
        scene,
    } as ThreeParams;
}

export type { ThreeParams };

export default threeInit;