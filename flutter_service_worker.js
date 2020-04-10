'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "36e54297163d118c683b8285e1c269cd",
"assets/assets/avatar.jpg": "3d047bfd286e0c8a0f9902effba91dbe",
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
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/ballblast.png": "1b9c940f0f22b29e20a3b346abbe0d2a",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "e024c8b78897040de518e91ba05e0323",
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
"index.html": "7c78271ad664b5c9d8b7af433415aa5d",
"/": "7c78271ad664b5c9d8b7af433415aa5d",
"main.dart.js": "6915f3667a3c7d250df0543abec3803e",
"manifest.json": "3c41fb16c8b3294b86b94ef13eaeda7a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
