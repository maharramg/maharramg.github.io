'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "95ecbba8e2b95e1fedcc0ddb27c34d51",
"/": "95ecbba8e2b95e1fedcc0ddb27c34d51",
"main.dart.js": "d006a95f093837b70baa02a65f014d35",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "9ed8e0bd193c55ad6e72d6ee165cb7f5",
"main-icon.png": "01cbae9dc901c9c1206cdebc31658535",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "591c5866e1f4cc2d79c7449767ad3b0a",
"assets/NOTICES": "e0e4e2491bb98e600f917b6f66cef0f3",
"assets/FontManifest.json": "279252e8563026c125555301876f17ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b98b9796e5a035fc6092191c31a5c67e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "780ed096849ab1fa2dc034cb0316c1bb",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "059b258fa8cd629a2ceb3f54ba116ddb",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/screenshots/inloya/inloya-1.webp": "f8100f4bc8e8aeda86c67a00472dba48",
"assets/assets/images/screenshots/wibty/wibty-4.webp": "21fce819fd1165021f2e4a077bc36b84",
"assets/assets/images/screenshots/wibty/wibty-5.webp": "5d11e7c1ff6243587357a28751a22730",
"assets/assets/images/screenshots/wibty/wibty-2.webp": "23f1b300f6e96c0c7f12c746fc923fad",
"assets/assets/images/screenshots/wibty/wibty-3.webp": "7d2f4bc0d0a9deedb8cb1c42028a2b9b",
"assets/assets/images/screenshots/wibty/wibty-1.webp": "a45f0a3747ef3297dd93897e22b26a3f",
"assets/assets/images/screenshots/wibty/wibty-6.webp": "55d0eecf322262869d2c9dc853ce4ab4",
"assets/assets/images/screenshots/gunka/gunka-1.png": "8a81e4b60378fe08537034756b1eb854",
"assets/assets/images/screenshots/rahat/rahat-1.png": "b329874b183e52f5dbb5edd8c24afb92",
"assets/assets/images/screenshots/tentony/tentony-4.webp": "64fbb9c2c57775a3b933584f6c5ff661",
"assets/assets/images/screenshots/tentony/tentony-2.webp": "a48814026304eaad1cdf77b6171e01e1",
"assets/assets/images/screenshots/tentony/tentony-3.webp": "ed0fef72d4d1204d4e16befb38ea7a16",
"assets/assets/images/screenshots/tentony/tentony-1.webp": "227b5ad6f0857f6cf859924eec36e458",
"assets/assets/images/screenshots/tendopay/tendopay-5.webp": "676895f89c82d5e4792a9af9e9f2a9a0",
"assets/assets/images/screenshots/tendopay/tendopay-4.webp": "d8fef985f7b4dc80960569b6ec6ebce9",
"assets/assets/images/screenshots/tendopay/tendopay-3.webp": "56cbb38baf2906bb3a471a4a8bb0a70d",
"assets/assets/images/screenshots/tendopay/tendopay-2.webp": "3e0c66080ff4aa62bf96d45c44f02b22",
"assets/assets/images/screenshots/tendopay/tendopay-1.webp": "ffaa9c6031d5f03f751b979e51c56516",
"assets/assets/images/screenshots/tendopay/tendopay-7.webp": "8fdd786d239a514b9bcbc52ae17edb9d",
"assets/assets/images/screenshots/tendopay/tendopay-6.webp": "0ef548ee002fcb12942ce4142f1e3f13",
"assets/assets/images/screenshots/ra9/ra9-1.webp": "ecb9a8af68481e3e3e65227f0c4ce060",
"assets/assets/images/screenshots/ra9/ra9-3.webp": "1388b6ea37f5f059efdfdc11bd1b61dd",
"assets/assets/images/screenshots/ra9/ra9-2.webp": "ab884980c072262d22b6849fd05b423a",
"assets/assets/images/screenshots/ra9/ra9-4.webp": "671870fec49890d898cc217b458f258d",
"assets/assets/images/screenshots/inloya-pos/inloya-pos-5.webp": "2015ddf5950ef37049650ff1e8a339dd",
"assets/assets/images/screenshots/inloya-pos/inloya-pos-4.webp": "fd52fb25c146ced9dd388a1b5a8c5ded",
"assets/assets/images/screenshots/inloya-pos/inloya-pos-3.webp": "553da242b5af148a46251c25ccb43d44",
"assets/assets/images/screenshots/inloya-pos/inloya-pos-2.webp": "ee5f1a4c979fb994836435087165fdfc",
"assets/assets/images/screenshots/inloya-pos/inloya-pos-1.webp": "970dd257f7ceaa125673325d79841a67",
"assets/assets/images/screenshots/tezibu/tezibu-1.webp": "169bd9e9753ee50dba1f558d2b5889ce",
"assets/assets/images/screenshots/tezibu/tezibu-3.webp": "82582e5e291fb5fdf70a664494e54c3b",
"assets/assets/images/screenshots/tezibu/tezibu-2.webp": "bf68633766c4c4dc7ded6777a43fdb05",
"assets/assets/images/screenshots/tezibu/tezibu-5.webp": "16d54fcd54d0d847303db5fb7db6c0b4",
"assets/assets/images/screenshots/tezibu/tezibu-4.webp": "f7c4e46b45cfbb689d99460733162cd0",
"assets/assets/images/screenshots/lilac/lilac-1.webp": "05a8e8325bd4dd950bc7c73967e29371",
"assets/assets/images/screenshots/lilac/lilac-2.webp": "e59a556dd2710e6b41a0d4dc909a874a",
"assets/assets/images/screenshots/lilac/lilac-3.webp": "cd4f599c54e3aa9c4d8e57953f7b8f79",
"assets/assets/images/screenshots/lilac/lilac-4.webp": "69a1277be0364cbc6420424f3e3b8015",
"assets/assets/images/screenshots/lilac/lilac-5.webp": "62364033b27449ded9b878770f524462",
"assets/assets/images/screenshots/bouquet/bouquet-4.webp": "58b44f1fce48388eb989dfd5bdd72f01",
"assets/assets/images/screenshots/bouquet/bouquet-5.webp": "df5ccd086cf88d4b3c1023de5117c219",
"assets/assets/images/screenshots/bouquet/bouquet-2.webp": "0feea30cc7c82781c40b5fb3f21c6fdb",
"assets/assets/images/screenshots/bouquet/bouquet-3.webp": "f940668e4f05b3f34597279dbb68abc0",
"assets/assets/images/screenshots/bouquet/bouquet-1.webp": "9a9bd65489ff674f0e1d964714a7cbe0",
"assets/assets/images/screenshots/flostore/flostore-1.webp": "a9a8c3561d5e7c78f31493cf408795c7",
"assets/assets/images/screenshots/flostore/flostore-5.webp": "429473a783715c5baf0ba55b10767648",
"assets/assets/images/screenshots/flostore/flostore-4.webp": "61914046199b6dec45f881e86c210330",
"assets/assets/images/screenshots/flostore/flostore-3.webp": "f6bf42c0c7a9e1c130f21d54406f7763",
"assets/assets/images/screenshots/flostore/flostore-2.webp": "a755c1f556c6ce0722e09ba2ef87ba19",
"assets/assets/images/screenshots/dentistore/dentistore-1.webp": "69fdf400b857d24e655088431fa16ed8",
"assets/assets/images/screenshots/dentistore/dentistore-4.webp": "13ec282fcd5fc1f62884f89d46101c86",
"assets/assets/images/screenshots/dentistore/dentistore-2.webp": "593565db2f7f1ecb2d89de9adb18c2b4",
"assets/assets/images/screenshots/dentistore/dentistore-3.webp": "b52291f20721dcd93dd5b7b0331cffbb",
"assets/assets/images/screenshots/tezibu-partner/tezibup-1.webp": "87b647adfe556c2036c7429af022aef2",
"assets/assets/images/screenshots/tezibu-partner/tezibup-4.webp": "961148cd8feaedc3cf408201230f4984",
"assets/assets/images/screenshots/tezibu-partner/tezibup-2.webp": "5589a3e896c2fc944622f579ea81788d",
"assets/assets/images/screenshots/tezibu-partner/tezibup-3.webp": "52dbde6ee95ecec2991019e0afef901b",
"assets/assets/images/screenshots/unityfood/unityfood-2.webp": "b9a533aa00af059c67d6ccaa4b3606a3",
"assets/assets/images/screenshots/unityfood/unityfood-3.webp": "6a86fd535d70e5052c6c5282dda76866",
"assets/assets/images/screenshots/unityfood/unityfood-4.webp": "ac6e72b8e95881c8c56e7b372aaa1088",
"assets/assets/images/screenshots/unityfood/unityfood-1.webp": "f104032f9611868f88380d25a20efcc9",
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
"assets/assets/images/icons/home-icon-black.jpg": "e382eb1af37b6ee0f1ab81b30023e4e8",
"assets/assets/images/icons/main-icon.png": "01cbae9dc901c9c1206cdebc31658535",
"assets/assets/images/icons/home-icon-grey.png": "2ab00262b647aeaa97bafc25c6260007",
"assets/assets/images/icons/main-icon-black.jpg": "9ed8e0bd193c55ad6e72d6ee165cb7f5",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-Light.ttf": "25dac24a0b5ebd35a40801dac67641c7",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-Thin.ttf": "ba4263f922eb7ef7e4eea132ae0df1dd",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-Medium.ttf": "e105d80d4e642d0499d6649a0247d495",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-LightItalic.ttf": "1c7884d1a3a7abde63034dd99d6e89e8",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-Bold.ttf": "b67441280a53d5ed8f81f19a726524f6",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-ExtraBold.ttf": "fd1adcce09e5b66c5f7f1dfb1bfb6393",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-BlackItalic.ttf": "6e29958c3ad35dc0c3ed82ba8100d2df",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-SemiBoldItalic.ttf": "7de6e8a557e9a701323ee35af286a377",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-SemiBold.ttf": "55455cb1bba82d0b569db38386ee42ff",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-Regular.ttf": "25eee1f86bf35c83038278afb1e3a4a6",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-Italic.ttf": "5a344ae3941c848ea5e5cd94654d2e74",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-ExtraBoldItalic.ttf": "da1fa77dc0b017d05eae3e73ae2c2b4b",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-MediumItalic.ttf": "57c54344048d84dcce0080142b404552",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-ThinItalic.ttf": "dd38525eb9694704f0ceab8374123fd1",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-ExtraLight.ttf": "a543982cddcffd2bf2a763f68f9dc72a",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-Black.ttf": "8bd2dfff99e3e58cde93b83e9cfd5f9f",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-ExtraLightItalic.ttf": "c14e366c5387ac9fdcba4f3a09f10710",
"assets/assets/fonts/hankengrotesk/HankenGrotesk-BoldItalic.ttf": "bd120417ff1ab04d75068629af7a4820",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
