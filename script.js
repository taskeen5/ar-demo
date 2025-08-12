import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-image-three.prod.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log("Initializing AR...");
    
    // 1. Initialize AR engine
    const mindarThree = new MindARThree({
      container: document.getElementById("ar-container"),
      imageTargetSrc: "./card.mind"
    });
    
    // 2. Start AR and get context
    await mindarThree.start();
    const { renderer, scene, camera } = mindarThree; // Get after start()
    
    // 3. Add test object
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -0.5); // Position in front of camera
    scene.add(cube);
    
    // 4. Start render loop
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
    
    console.log("AR successfully started!");
    
  } catch (error) {
    console.error("AR initialization failed:", error);
    // Show user-friendly error message
    document.getElementById("ar-container").innerHTML = `
      <div style="color: red; padding: 20px;">
        AR failed to start. Please:<br>
        1. Refresh the page<br>
        2. Ensure camera access is allowed<br>
        3. Use a supported browser (Chrome/Edge)
      </div>
    `;
  }
});