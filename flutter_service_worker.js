'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "029aff29d68c713f64fb348d6f7724d1",
"/": "029aff29d68c713f64fb348d6f7724d1",
"images/inloya/inloya-1.webp": "994ecc401fd51542c17f7225c501d377",
"images/wibty/wibty-2.webp": "23f1b300f6e96c0c7f12c746fc923fad",
"images/wibty/wibty-3.webp": "7d2f4bc0d0a9deedb8cb1c42028a2b9b",
"images/wibty/wibty-1.webp": "a45f0a3747ef3297dd93897e22b26a3f",
"images/tezibu-courier/tezibu-courier-3.png": "843f52e823105358d0f3d8f1f5332507",
"images/tezibu-courier/tezibu-courier-2.png": "fe2733e8453bc0cb6691c9524b39f196",
"images/tezibu-courier/tezibu-courier-1.png": "334040fe360fda680f37ffc8fb8db7c3",
"images/gunka/gunka-1.png": "1a83849c75961df5854b7276ce50116a",
"images/rahat/rahat-1.png": "3365b0e1775397070d52b4be1660dd62",
"images/tentony/tentony-2.webp": "b67ed1592d4e6caa1e53e60947df3dda",
"images/tentony/tentony-3.webp": "c7d8d702474d5a9aface73e0cc35fa61",
"images/tentony/tentony-1.webp": "e244ff461ab71ea88b79042904b9fc88",
"images/tendopay/tendopay-3.webp": "278ed9a3f9509ffcf81618714bdf9126",
"images/tendopay/tendopay-2.webp": "fc6f64ff73fb7d5d58911168305155dd",
"images/tendopay/tendopay-1.webp": "1716075291f32160ffaa02f5e65b83b3",
"images/ra9/ra9-1.webp": "131d37191c9d315f1e0a42ffc708bc8a",
"images/ra9/ra9-3.webp": "afdb6634be0f6b0be65f2fb773559682",
"images/ra9/ra9-2.webp": "fcb3349528bd6192392fd1214795da94",
"images/inloya-pos/inloya-pos-3.webp": "6bce1e83d6df272a6a21e9b52867f728",
"images/inloya-pos/inloya-pos-2.webp": "72a1afd2f1b03fb8619ecf955f983a0d",
"images/inloya-pos/inloya-pos-1.webp": "c5bb53a8001bf56633fd667958b8e8cc",
"images/tezibu/tezibu-1.webp": "169bd9e9753ee50dba1f558d2b5889ce",
"images/tezibu/tezibu-3.webp": "82582e5e291fb5fdf70a664494e54c3b",
"images/tezibu/tezibu-2.webp": "bf68633766c4c4dc7ded6777a43fdb05",
"images/lilac/lilac-1.webp": "e272f3c56f34c25e129ef92b5e5e1985",
"images/lilac/lilac-2.webp": "9ad2fa45a9e307f15f0b9098c6e8af12",
"images/lilac/lilac-3.webp": "2f19835fea43e0be13a7ae0541dd7db6",
"images/bouquet/bouquet-2.webp": "90bfef0381703978c642e101c23822f7",
"images/bouquet/bouquet-3.webp": "eb1f6643c58923712508b362b513320c",
"images/bouquet/bouquet-1.webp": "444730bc4ea250ed5e6bc1689e671ebd",
"images/flostore/flostore-1.webp": "235ad0260a8984f287bb193f50f830a0",
"images/flostore/flostore-3.webp": "6a10c4db87f88d9041f91a9885ba7326",
"images/flostore/flostore-2.webp": "f9640619d224de85fb3d76cb004302cb",
"images/dentistore/dentistore-1.webp": "812d8f66e149c9250413f31185341cd8",
"images/dentistore/dentistore-2.webp": "f9219badb5367832702df168c28fdde5",
"images/dentistore/dentistore-3.webp": "5ee307143036e970567fbc29c8926c8a",
"images/tezibu-partner/tezibup-1.webp": "87b647adfe556c2036c7429af022aef2",
"images/tezibu-partner/tezibup-2.webp": "5589a3e896c2fc944622f579ea81788d",
"images/tezibu-partner/tezibup-3.webp": "52dbde6ee95ecec2991019e0afef901b",
"images/unityfood/unityfood-2.webp": "b9a533aa00af059c67d6ccaa4b3606a3",
"images/unityfood/unityfood-3.webp": "6a86fd535d70e5052c6c5282dda76866",
"images/unityfood/unityfood-1.webp": "f104032f9611868f88380d25a20efcc9",
"main.dart.js": "4c88d78ec7f0adb0f0f3c2d9c733c609",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2fc87c02f41e43771ce323e0916e5070",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ecb86521be16cec044ee29910029c023",
"assets/AssetManifest.json": "0fb21eae9c32c0e321fcc67845b9b0a1",
"assets/NOTICES": "61a8a27845555e038d1da6890e23629a",
"assets/FontManifest.json": "0ba060775eff7bac341aa991ac262564",
"assets/AssetManifest.bin.json": "2b3a4d6b5d076e3d3cc47195f0e0dcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "21e17d7fd86b650a2c397d48e8bb3223",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0219c5ac9710b221888d78cd3365c8fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "86c12fad04798e46c6cc1136ecac3bc4",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/logos/tezibu-partner.png": "5a30a16ae575033318c884a908fd6c23",
"assets/assets/images/logos/wibty.webp": "7d13738cd4ac6079e2fb3b8a794d62b8",
"assets/assets/images/logos/flo.webp": "8300901a788a8ea603a108349175792f",
"assets/assets/images/logos/tezibu.jpg": "e6273c8c8039bab8f21773aab25470de",
"assets/assets/images/logos/tezibu-courier.png": "1da81be038e4eca0e3367f3b15e6f320",
"assets/assets/images/logos/unityfood.webp": "d7da1edf03c60f3871220408a65c57a6",
"assets/assets/images/logos/tentony.webp": "8a9a4ed10ee639d7737b846fb77558ed",
"assets/assets/images/logos/tendopay.jpeg": "57ee6c685a9501d367944932081fa46e",
"assets/assets/images/logos/inloya.jpg": "60bc63b13e9fd8f56904bcdbc66a2704",
"assets/assets/images/logos/inloya-pos.webp": "038bd90a336a5026a342cb237ea7771e",
"assets/assets/images/logos/rahat.png": "d12294035a88a8e159a384e77cfb7957",
"assets/assets/images/logos/ra9.webp": "16fa2ca328afecbd0fe7ad160e3bb406",
"assets/assets/images/logos/lilac.png": "5435dfc32e93d3a3a4094ad495ce3e2a",
"assets/assets/images/logos/bouquet.webp": "2290cebe6376a5f1cdfd23c1bb309167",
"assets/assets/images/logos/dentistore.webp": "9b721c45f83d7705fd9777063a05c948",
"assets/assets/images/logos/gunka.png": "2d3dac8938d7d96c91e0e4e825794cee",
"assets/assets/images/mockups/lilac-mockup.png": "a6a1e6a23ab5133f60767bdf97ae8710",
"assets/assets/images/mockups/tezibu-mockup.png": "fe219b8d18442779fe3d0f435d497b8a",
"assets/assets/images/mockups/tendopay-mockup.png": "30aa223e640e2f54a23b81d78ae37e52",
"assets/assets/images/mockups/unityfood-mockup.png": "2594b7c9e518f9fb69fd4f2b1cb85e82",
"assets/assets/images/mockups/ra9-mockup.png": "c99cd9b5e2e78985cf2abce4bb3c2779",
"assets/assets/images/mockups/rahat-mockup.png": "e9105f28e385f7116b3ffc380804e0ef",
"assets/assets/images/mockups/flo-mockup.png": "2cef65aefa0167697dfa558249d46eb0",
"assets/assets/images/mockups/wibty-mockup.png": "6348f32c3fb3ff8b06d334cbb006d9cd",
"assets/assets/images/mockups/tezibu-courier-mockup.png": "39fb254fde70c277b09a50e5c8609208",
"assets/assets/images/mockups/tentony-mockup.png": "9052801eb79babc59dda59a59c6bff63",
"assets/assets/images/mockups/inloya-pos-mockup.png": "76f9b59f5c88e2eef3dc485913cce338",
"assets/assets/images/mockups/gunka-mockup.png": "89bc035b4d48ace9bf58e61eb9481b30",
"assets/assets/images/mockups/denti-store-mockup.png": "83489842b45af92ee56e04c2e4339548",
"assets/assets/images/mockups/tezibu-partner-mockup.png": "787a15a4f6b0a83bbe59840f1c0cd36b",
"assets/assets/images/mockups/bouquet-mockup.png": "6f55899a2bf0742a5a7f0483b9fc40e1",
"assets/assets/images/icons/main-icon-light.png": "5d2b98c4a55fcee53e9d919e3d4cf4a7",
"assets/assets/images/icons/main-icon-dark.png": "9047f58125d68118e9ebf9b4be112527",
"assets/assets/images/about.png": "e92ebe1cf89f09455b6d9fd62600ac92",
"assets/assets/fonts/neue-power/NeuePower-Ultra.ttf": "94518335ea7fb83da1989eb9c5d08853",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
