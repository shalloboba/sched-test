const CACHE_NAME = "pwa-cache-v2";

const urlsToCache = [
  "/sched-test/",
  "/sched-test/index.html",
  "/sched-test/favicon.ico",
  "/sched-test/favicon192.png",
  "/sched-test/favicon512.png",
  "/sched-test/ogp.png",
  "/sched-test/manifest.json",
  "/sched-test/sitemap.xml"
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

