const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/favicon.ico",
  "/favicon192.png",
  "/favicon512.png",
  "/index.html",
  "/manifest.json"
  "/sitemap.xml"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});



