import * as THREE from 'three';
import * as Cesium from 'cesium';
import { RGBELoader  } from 'three/examples/jsm/loaders/RGBELoader';
import { getThreeModelQuaternion } from './3d';
type ThreeParams = {
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    lights: THREE.DirectionalLight
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
    const topLight = new THREE.DirectionalLight(0xffffff, 50);
    //@ts-ignore
    topLight.position.copy(Cesium.Cartesian3.fromDegrees(120, 30));
    topLight.position.y += 100
    topLight.position.z += 35
    topLight.position.x -= 35
    topLight.castShadow = true
    const d = 50;
    topLight.shadow.camera.left = -d;
    topLight.shadow.camera.right = d;
    topLight.shadow.camera.top = d;
    topLight.shadow.camera.bottom = -d;
    topLight.shadow.mapSize.width = 1024 * 4
    topLight.shadow.mapSize.height = 1024 * 4
    topLight.shadow.camera.near = 0.5
    topLight.shadow.camera.far = 100
    topLight.shadow.bias = 0.0001
    topLight.setRotationFromQuaternion(
        new THREE.Quaternion(...getThreeModelQuaternion(120, 30))
    );
    const dirLightHelper = new THREE.DirectionalLightHelper(topLight, 10);
    dirLightHelper.castShadow = true;
    const helper = new THREE.CameraHelper(topLight.shadow.camera)
    scene.add(helper)
    // topLight.position.set(0, 5000000, 5000000);
    // topLight.castShadow = true;
    // const bottomLight = new THREE.DirectionalLight(0xffffff, 0.8);
    // bottomLight.position.set(0, -5000000, 0);
    // bottomLight.castShadow = true;
    const pointLight = new THREE.PointLight(0xffffff, 0.3);
    pointLight.position.set(5000000, 5000000, 5000000);
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)

    scene.add(topLight);
    // scene.add(bottomLight);
    // scene.add(pointLight);
    // scene.add(ambientLight);
    return topLight
}

const createScene = () => {
    return new THREE.Scene();
}

const createAxesHelper = (scene: THREE.Scene) => {
    const axesHelper = new THREE.AxesHelper(500)
    scene.add(axesHelper)
}

const createRenderer = (dom: HTMLDivElement) => {
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        logarithmicDepthBuffer: true,
    });
    renderer.setSize(dom.clientWidth, dom.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // renderer.gammaFactor = 2.2;
    // renderer.outputEncoding = THREE.sRGBEncoding;
    // renderer.physicallyCorrectLights = true
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
    const lights = addLight(scene);
    createAxesHelper(scene)

    return {
        camera,
        renderer,
        scene,
        lights
    } as ThreeParams;
}

export type { ThreeParams };

export default threeInit;