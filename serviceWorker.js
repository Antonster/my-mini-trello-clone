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
    "revision": "542d27120007603710645d85983436e7"
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
    "url": "menu.ee9f7366.png",
    "revision": "556cd2744d8d65b323648bddfb707f0c"
  },
  {
    "url": "reset.7c5a02e2.css",
    "revision": "637250798755c14ec47a9f840b544b1a"
  },
  {
    "url": "src.f8b33701.js",
    "revision": "6bb7bf474e4d00628f9ef57ee62e42c2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));
