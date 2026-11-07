const C='sonia-celion-v2';
const A=['./','index.html','manifest.json','img/og.jpg','img/icon-192.png','img/protocolo-dna.jpg','img/sos12.jpg','img/muno-t.jpg','img/neurocell.jpg','img/cellergy-boost.jpg','img/celion-power.jpg','img/r3shake.jpg','img/volante.jpg','media/power-dr-quiroz.jpg','media/cellagen.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||e.request.url.endsWith('.mp4'))return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)));
});
