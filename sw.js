const C="spm-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(["/index.html","/manifest.json","/icon.png"])).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match("/index.html")))));
