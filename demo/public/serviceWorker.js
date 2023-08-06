const cacheName = "monk-v1";
const staticAssets = [
  "./",
  "./index.html",
  "./assets/",
  "./monk.svg",
  "./logo.svg",
  "./maskable.svg",
  "./manifest.json",
  "https://avatars.githubusercontent.com/u/105801170?s=400&u=768e67c843441822df7e79d887a15e14b368b07d&v=4",
  "https://raw.githubusercontent.com/sarbanandabhikkhu/sarbanandabhikkhu/main/assets/monk.gif",
  "https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
];

self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
});

self.addEventListener("fetch", async (e) => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
