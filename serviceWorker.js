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
    "revision": "ab84980f0ea332dd78176f86a0edbb1c"
  },
  {
    "url": "logo192.844572fc.png",
    "revision": "e61e417385dffea2c47b2fe208a4fc89"
  },
  {
    "url": "logo512.ae802749.png",
    "revision": "adbef02055c77b708c796f23317926d7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "82b8f16d2a2580bf208fd609d06e736f"
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
    "url": "src.3230ea77.js",
    "revision": "5772da8470e8c897e86d30ec6d7138f7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));
