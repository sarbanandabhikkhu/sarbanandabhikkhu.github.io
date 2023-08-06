async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./serviceWorker.js");
      alert(`SW registration working`);
    } catch (e) {
      alert(`SW registration failed`);
    }
  }
}

export default registerServiceWorker;
