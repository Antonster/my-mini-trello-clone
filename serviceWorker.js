/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "8f7d1311bc87b9b5c6b19d159c3ff382"
  },
  {
    "url": "logo192.ec1737a3.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.0169c94f.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bc1b615fc60e82958f41725bd7d26994"
  },
  {
    "url": "reset.7c5a02e2.css",
    "revision": "637250798755c14ec47a9f840b544b1a"
  },
  {
    "url": "src.e5c226a7.js",
    "revision": "5717469272554913665c2e190f4fe0aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));