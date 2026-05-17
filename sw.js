const CACHE='roadbook-marken-umbrien-2026-v2';
const ASSETS=[
  "./",
  "index.html",
  "manifest.webmanifest",
  "sw.js",
  "gpx/Tag 01 R1 - GAP-Tim-Huber.gpx",
  "gpx/Tag 01 R2- GAP-Brenner-Huber.gpx",
  "gpx/Tag 02 R1 - Huber-Chioggia.gpx",
  "gpx/Tag 03 R1 - Chioggia-Loreto.gpx",
  "gpx/Tag 04 R1 - Loreto - Perugia.gpx",
  "gpx/Tag 05 Rund 01 - Assisi-Gubbio-Umbertide 001.gpx",
  "gpx/Tag 06 Rund 02 - Spoletto - Norcia.gpx",
  "gpx/Tag 07 Rund 03 - Gran Sasso.gpx",
  "gpx/Tag 08 Rund 04 - Siena.gpx",
  "gpx/Tag 09 R1 - Perugia-Montecantini.gpx",
  "gpx/Tag 09 R2 - Perugia -Padua.gpx",
  "gpx/Tag 10 R1 - MonteC-Brescia.gpx",
  "gpx/Tag 10 R2 - Padua-Huber.gpx",
  "gpx/Tag 10 R3 - MonteC-Vicenza.gpx",
  "gpx/Tag 11 R1 - Brescia-Samnaun.gpx",
  "gpx/Tag 11 R2 - Huber-M.gpx",
  "gpx/Tag 11 R3 - Vicenza-Huber.gpx",
  "gpx/Tag 12 R1 - Samnaun-M.gpx",
  "gpx/Tag 12 R3 - Huber-M.gpx"
];
self.addEventListener('install', e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate', e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{const copy=res.clone(); if(e.request.method==='GET') caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{}); return res;}).catch(()=>cached)));});
