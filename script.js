import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-image-three.prod.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log("Initializing AR...");
    
    const mindarThree = new MindARThree({
      container: document.getElementById("ar-container"),
      imageTargetSrc: "./card.mind"
    });

    const { renderer, scene, camera } = mindarThree; // Get Three.js context
    
    // Access THREE through mindarThree.THREE
    const geometry = new mindarThree.THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new mindarThree.THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new mindarThree.THREE.Mesh(geometry, material);
    scene.add(cube);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
    
    console.log("AR successfully started!");
  } catch (error) {
    console.error("AR initialization failed:", error);
  }
});