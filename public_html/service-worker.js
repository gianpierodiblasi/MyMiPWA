/* global self, caches */

var cacheName = 'mymi-pwa';
var filesToCache = [
  './',
  './index.html',
  './images/icon-32x32.png',
  './images/icon-180x180.png',
  './images/icon-192x192.png',
  './images/icon-270x270.png',
  './images/MyMi-White.svg',
  './images/BabyHappy.png'
];

/* Avvia il Service Worker e Memorizza il contenuto nella cache */
self.addEventListener('install', e => e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache))));

/* Serve i Contenuti Memorizzati quando sei Offline */
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(response => response || fetch(e.request))));