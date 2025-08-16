const CACHE_NAME = "lynzx-cache-v1";
const ASSETS = [
  "lynzxweb.html",
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "video4.mp4",
  "video5.mp4"
];

// Install Service Worker → cache semua video + html
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch handler → ambil dari cache kalau offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});