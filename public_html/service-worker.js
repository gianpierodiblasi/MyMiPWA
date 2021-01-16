/* global self, caches */

var cacheName = 'mymi-pwa-1.2.6';
var filesToCache = [
  './',
  './index.html',
  './images/icon-40x40.png',
  './images/icon-230x230.png',
  './images/icon-250x250.png',
  './images/icon-350x350.png',
  './images/MyMi-White.svg',
  './images/BabyHappy.png'
];

self.oninstall = e => e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
self.onfetch = e => e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));

self.onmessage = e => {
  if (e.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
};