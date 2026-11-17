/* Fórmula PWA — cache local de todos os arquivos necessários para estudar offline. */
const CACHE_NAME = 'formula-pwa-v13';
const CORE_FILES = [
  './',
  'index.html',
  'style.css',
  'script.js',
  'manifest.webmanifest',
  'data/matematica/modules.js',
  'data/matematica/lessons.js',
  'data/biologia/modules.js',
  'data/fisica/modules.js',
  'data/quimica/modules.js',
  'assets/icons/house-chimney.svg',
  'assets/icons/user-fast-running.svg',
  'assets/icons/book-open-cover.svg',
  'assets/icons/career-growth.svg',
  'assets/icons/formula-icon.svg',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const urls = CORE_FILES.map(file => new URL(file, self.registration.scope).href);
    await cache.addAll(urls);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('formula-pwa-') && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        const fallback = await cache.match(new URL('index.html', self.registration.scope).href);
        if (fallback) return fallback;
      }
      return new Response('Este conteúdo ainda não foi salvo para uso offline. Abra o Fórmula uma vez com internet para preparar o aplicativo.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
