const CACHE_NAME = 'mousekoin-v1';
const ASSETS = [
  '/', '/index.html',
  '/styles/main.css',
  '/service-worker.js',
  '/images/logo.webp',
  '/images/particles.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
