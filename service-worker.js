var cacheName = 'petstore-v1';
var cacheName = [
    'index.html',
    'product.js',
    'petstore.webmanifest',
    'img/math.jpg'
];

self.addEventListener('install', (e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        }
    ));
});

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.matchn(e.request).then(function (r) {
            console.log('[Service  Worker] Fetching reseource: '
                +e.request.url);
                return r
        })
    );
});