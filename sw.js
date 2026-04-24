const CACHE = 'zeitplan-v1';
const FILES = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() =>
      new Response('{"error":"offline"}', { status: 503, headers: { 'Content-Type': 'application/json' } })
    ))
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      if (list.length) return list[0].focus();
      return clients.openWindow('./index.html');
    })
  );
});

// Listen for messages from the main app (e.g. to trigger test notifications)
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SHOW_NOTIF') {
    self.registration.showNotification(e.data.title, {
      body: e.data.body || '',
      icon: './icon.svg',
      badge: './icon.svg',
      vibrate: [200, 100, 200],
      tag: e.data.tag || 'zeitplan'
    });
  }
});
