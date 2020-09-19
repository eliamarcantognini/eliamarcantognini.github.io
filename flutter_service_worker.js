'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e89bb32211d3604de4512864f7bc3c52",
"assets/assets/avatar.jpg": "350b910e3ec450fb74daba3292505c48",
"assets/assets/avatar11.jpg": "3d047bfd286e0c8a0f9902effba91dbe",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/gmail.png": "598d07e7761f5bca3a3f78e95b6db422",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/siteicon.png": "5cfa5c08c3c09f719d8793732e9cf92f",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/ballblast.png": "40fb5634eaad2aeb1cb9bd5026177798",
"assets/assets/works/no_image.png": "dd603e525fe854913f489418d9a601a3",
"assets/FontManifest.json": "8f036bb4279e4857a966e259b818f8ae",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "e024c8b78897040de518e91ba05e0323",
"assets/NOTICES": "cf73e981ecf3d871fff002a09faec886",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "9a5ceee39b3d70b819811f7ae389b73e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "e91c2d5433e0681cca504e62be8c4139",
"icons/android-icon-192x192.png": "d04097039b3cbdb808b3734664f18845",
"icons/android-icon-36x36.png": "4095cc809272c09b31cdfc06b3a3b634",
"icons/android-icon-48x48.png": "590b6dcab0fb36697c4d9da5b69b656d",
"icons/android-icon-72x72.png": "b56f108438bab99fcb40dd7563f16e7c",
"icons/android-icon-96x96.png": "27afc273e3bcd3484e749538f83d6abd",
"icons/apple-icon-114x114.png": "7064762427307fe3acad2a291cb0fad1",
"icons/apple-icon-120x120.png": "d61d9e98f1bb04a1db6d191b083bd5f4",
"icons/apple-icon-144x144.png": "e91c2d5433e0681cca504e62be8c4139",
"icons/apple-icon-152x152.png": "f18f1f90e931fd48b31f522365082b60",
"icons/apple-icon-180x180.png": "0659531fd90a8eaefc72d233fad0217a",
"icons/apple-icon-57x57.png": "42d256ff698cd8d3b74c08ee1eb7c629",
"icons/apple-icon-60x60.png": "bb4043e7eeea85e6a25edeed6f7491c8",
"icons/apple-icon-72x72.png": "b56f108438bab99fcb40dd7563f16e7c",
"icons/apple-icon-76x76.png": "90b25abe999762ea4e74ee46ae436a96",
"icons/apple-icon-precomposed.png": "9155165be78c4b4fe5265336c4afa221",
"icons/apple-icon.png": "9155165be78c4b4fe5265336c4afa221",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "bbb17b078d8f851600c5d9f34fa8cb84",
"icons/favicon-32x32.png": "4b7da2cef02bac4daaff28e01e97986f",
"icons/favicon-96x96.png": "27afc273e3bcd3484e749538f83d6abd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "e91c2d5433e0681cca504e62be8c4139",
"icons/ms-icon-150x150.png": "734a92dfba85b5d6e648ff9b594c56ea",
"icons/ms-icon-310x310.png": "8b0c732064e34afcd5826a8ab66dfa8f",
"icons/ms-icon-70x70.png": "2b93829a111b41f708f3aa0882853e6b",
"index.html": "81fe4b0365973d7c82fa1da2e281290b",
"/": "81fe4b0365973d7c82fa1da2e281290b",
"main.dart.js": "701242d115823823d4d544e905790b7f",
"manifest.json": "3c41fb16c8b3294b86b94ef13eaeda7a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
