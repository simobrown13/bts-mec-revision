/* =========================================================================
   Service worker — fonctionnement hors-ligne.
   Stratégie : app shell + fiches précachées à l'install ; CDN/polices en
   cache runtime (stale-while-revalidate). Bump CACHE pour forcer la MAJ.
   ========================================================================= */
const CACHE = "btsmec-v5";

importScripts("./assets/js/content-manifest.js"); // -> self.MANIFEST

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/style.css",
  "./assets/js/content-manifest.js",
  "./assets/js/data.js",
  "./assets/js/app.js",
  "./assets/icons/favicon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
];

const CONTENT = (self.MANIFEST && self.MANIFEST.fiches ? self.MANIFEST.fiches.map((f) => "./" + f.file) : []);

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // addAll échoue si UN fichier manque : on ajoute un par un, tolérant.
    await Promise.all([...SHELL, ...CONTENT].map((u) =>
      cache.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // Cache-first pour l'app et les fiches.
    e.respondWith((async () => {
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) return cached;
      try {
        const res = await fetch(req);
        const cache = await caches.open(CACHE);
        cache.put(req, res.clone());
        return res;
      } catch {
        // Repli : page d'accueil si navigation.
        if (req.mode === "navigate") return caches.match("./index.html");
        throw new Error("offline");
      }
    })());
  } else {
    // CDN (KaTeX/marked) + polices : stale-while-revalidate.
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const fetching = fetch(req).then((res) => {
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
      }).catch(() => cached);
      return cached || fetching;
    })());
  }
});
