'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "eb35a56084a91f70d895f14acde3bc73",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "5855c69babd8beedb6a86e8bf84084b5",
"/": "5855c69babd8beedb6a86e8bf84084b5",
"main.dart.js": "afe5c30a23c9e03c57b49471c8a8c66c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/favicon.png": "2fc87c02f41e43771ce323e0916e5070",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ecb86521be16cec044ee29910029c023",
".git/config": "ab3cdf3bc914b8a7892c672d4f338209",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/8abd8bae99a6e21fbd0dbe480bd99084c5b4ea": "ad9458e5fb9328387f82ba9dcb90eb1f",
".git/objects/92/8e32d6289c7dac65415844217fdafc2bfb125c": "2d0ed6a9def0234808208ad64fd6777a",
".git/objects/3e/ee43a72a032c84079db6fce87bf951e398ddbd": "7d983a9716c43eb8d199cacd50d975cf",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/cab8b2f6b3d1434b10b75192ede81a7789599c": "209d16afff0a5353d7ab0893aafd972d",
".git/objects/9e/0364108369ce746a90d33c70e38e251f9cc3a5": "07f0e827dd659d45cb7063ca3737ce1a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/b6cf11da4c5d5892381b0e4f972af72fa559cd": "4c333d9978fa341e296b0b4a8c697b91",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/56/108dca8d383ca60435c28c856550a145eee826": "046386ea222987d394886eb240c7ba14",
".git/objects/3d/2dc2c9159ff25514d31b204b577f3e30d0f7da": "b7b94ba33603f95158d5651adee9d2fb",
".git/objects/58/d785c38d514ec844e1cbd63a1004af1e64cfd8": "7d4075781be9a03e504ad9aa96f692e2",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/c87d215bf1d0fbd066241b487604077e565765": "bfb838de2e16bfc5aeb09bf13da0b6db",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/7e3a438e771dc426a6ea4122728c93e4fda5eb": "2c6a6dd04622e6687737ba2754717cf7",
".git/objects/02/32efe637ec6ce062b9d9aea442276a01d9e96e": "e8609c505126b08d483420d88e88c9bf",
".git/objects/ad/ddee2537c27e4a9714712a71660df7ac26bcc7": "15da490b8b4068cccc125e5895180e89",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/3a4632503db8ecb1494ce8cd4d3c566c17ff34": "70a7c986c31d4fe2fc363e5c4cc11498",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/bb1b4f27df1b0a73a6395838309795c38eda17": "41ee9efd9908d986f560955c10fc00db",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/3e4eb4c43224997088a7c4f6b4b60a485defb0": "6976bf690e21f6252b3d3024d50cc75f",
".git/objects/d8/fd77764ff15cc20d0483ecf172df56380c93e3": "8fb3b614cdf2435aa7af59abbe2c5264",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/95de77394c64f5285b4cc65e384b894af7a72a": "97cc95fb7dfbf28295ecc50ca690f939",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/a990a643b008a1da0184dd12dbe94e11d0f2a1": "5fccc404dfc2376be4c6c58bb8a654d1",
".git/objects/c0/49f7b0da91f6d16df0168dfe25d1d99df909a4": "bc3785ec3c7331f6e425d95755cb22de",
".git/objects/ee/0ce55746b065353269d5f3c6c70ec71602d414": "da19b17548ba57da02ecc602de920203",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/fe/52d4062fbc3305b086dfa6dd3fe4e59cb099e2": "21f44883c79ae80fd9d1540c4a6a7a28",
".git/objects/fe/d2d16577d6c9d74d221e7f715c2306c6cec7b3": "137a50d596ddadb1015f6fae91cf8147",
".git/objects/c8/616e06e974a487515ef1ed2410899b2372577c": "a0a67ab4f8f5c25aa899fd6fb1d5fa60",
".git/objects/c1/d54e97a76f14858bfe0154e8b915719ee334a4": "f0c21f0d30df16b2d9905676fc8c0239",
".git/objects/4e/16dbd993ef47f11d0bd00049d3d1ad09d5b202": "1779b2ec236810a53f05a3c3af3b742b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/5909c508bb96cbf0934336208977f62cd80199": "e80d87017497d959f26c6e5c41b2acea",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/b7944c2b02c8d94bc7ca57629cac2ecde347cc": "bda6dd41e77907a3093337b477d91f20",
".git/objects/27/d96ec163b652e667f1584f864be4850a11f0e0": "9398a27a19639ed2bd004513ec50cdce",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/7d/55a8677480cd3cb6c150bb4d10aa9b33f72ead": "d59ca8eb8994b65ddf24be6828def485",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/16/c2321376b4f69328e2296c9921606668eae409": "2e378fb270c8ca187e55077b8840884c",
".git/objects/42/f1ada126245d7da8a61168c138756ddd4ff177": "8a7c9f01ec75f311391611633234a06d",
".git/objects/45/7f1ecc51f203c0c1faf6edef9b50b5751a1016": "3bf7533341dabf3b790cd3a588fcd360",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/331568e09f92e37fa65d356ffc72560fe53ee3": "42537ca91f4d5f2f0425b69928359202",
".git/objects/1a/45d91cf60f69b4ddfade8b6c12e194cd1d8b28": "a573fc2cd8fe8ad24efec20b68579c22",
".git/objects/26/cd300a2caa3863a44f8229f49460c868eec477": "dea08e9abe387d082c3331288342b5d4",
".git/objects/21/08575f15822f7cdc4d49ba41281477e5348c7c": "771c78a42090e2dd886399b0009bb743",
".git/objects/4d/9e4c6951ae1c495cf0f128ebbff9cc1aeb7cc3": "44ac052e9fbd4b7cbb91a562ee1b128e",
".git/objects/75/9c79f30d2e011f8061e466167374c60c047588": "bbf9b301d043a4f5be46b724e33b4ee5",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/556201ceec6f92e637a93feea63fe46372d8ee": "c7ea71c77838cd12cae61fc5ff92570e",
".git/objects/6e/8123045e2051fa4aacb555fa0505e4839cd27e": "3a511de1376340ec9c70bda64e010d45",
".git/objects/6e/75103ccb555c148e307d69632a0f3053ba7f5a": "26715aa2ce6fa83e70ad7b0b840594ef",
".git/objects/6e/0c6eb262eb26e2032059640ec5ca1d5ff7ce79": "b28e095c272a992c919f9b9b1a82ee27",
".git/objects/36/587f88fb72100bb282b7fa085236af3e267b38": "d063f298122890352a9f9ebf366c99e2",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/c1c704e6cac5cc8af4a3d04af3db3f8f13f4c0": "efa214538bcddc39d00a671a975dcf41",
".git/objects/62/5a120d5e049f40f8a5b772536935745fdf212e": "1f7aea1dfedd75d7d7ba00a2a6b7ab39",
".git/objects/62/163624972e0d828d273b525f09d3aaf6461311": "4b461a0d7b965c44fec465d5975a5269",
".git/objects/96/81af0436cca82b8048d382ba319f1677c5f995": "51102baba60fafa88b2e76959089f1ec",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/4e8fdd98a2c411da7fba4fd6203810fdd6b547": "bfbc2396ff6cf594d2f84e19480df543",
".git/objects/3f/0c06950c0205e5ef5aaf5eef12b3efed355851": "99a1f77d74d19eef79d29930eb65ca54",
".git/objects/30/9c5d48bb1bfa2ae9ce5ad70083a989ce36c9a2": "b345489e3f4f2ff1cc9c9003b27f619b",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/52/4fd291cb81efd5d646798b2ba8bd653c211a1b": "64c9565ffeb14ab0298fdc4b525377ab",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c7e5ac52c882032b264ddac3828b95267da54e": "c686f7cc9f9694a5d59f32e7608a9ffe",
".git/objects/ba/aa050ab5d5cad9d39f2ffca46ff7001c4d96f3": "4ffa568ca0923cd9c6253532a7f3e611",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/0f94c7f5def407161241225289e0199367407a": "d66c8ca5d56137aa8becc626b4864f25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/104eed64d79e74b4804e9f9efda9c802d15fbe": "91d31a7fae9254058def6a781581dbe6",
".git/objects/a8/cf5428e1b118e211a9e510371b65e357de1c97": "f3948cd67334f709739d6d2c100d510e",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/de/26ff216151db16b112bb30757b2af3cd65584f": "34cbe373e19f35c675291646404478b6",
".git/objects/ef/12b8cb9be865c02499502755c2af40d5ac432b": "11d2dffe2ac2a56581397e795813f159",
".git/objects/c4/a593732b2219bce8600453c9ced4fc75eddd97": "2747e895c2386fa1b1a6ae703e2cdbb4",
".git/objects/e1/7505aa80fb5998dfda88dfbc26d3dccee15874": "abe68824c12467d407544dff1748386f",
".git/objects/e6/b7e2163c77d52df5c95fd185020aa9b6bf71b2": "b9f96c4dbdea08b804b56bd4901e9f7d",
".git/objects/e8/e8811f3f08fc94df60e118e4ad94a22cf36045": "5596c07c08a0cb2cbfd7173441608081",
".git/objects/e8/194218b6e6b34271cb9183886476807cedfe16": "5d612299110c65d93afcc4f40e6c5a67",
".git/objects/fa/d9f7fe1e7270cf3866115b52cbd10542b75dc4": "e4c14b48bcad9d3ed74dc250806c13a9",
".git/objects/c2/3b0ac4078885df66ef6fbfc018612f886421b7": "41154e18d6b55d63658f17bace0d7344",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "caeda771011fc98b1bc4f220a169aedf",
".git/objects/ce/1de948eee1cecd6a535bb6198002111c2c86f2": "04f8cdd27ad069d1599e3434afd308f4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/d8f9d3f8199bc940b799849c3db682f3956003": "1314a88dd968bee39d50a4430042ff39",
".git/objects/77/11a30a3a49f9dfd1679d9f9a09b7a76d73dba4": "5d73fd82347f144610854a9acac7bb60",
".git/objects/48/bf50bc4186f46e3359534c99852948c30325b0": "9a3a4c3b5b30ec28e5cb6f299384ca98",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/12155b5e674c24fe0414f58f287d76c472a1cf": "2c7cf041bec456cfb855f973b12de784",
".git/objects/4f/176c092ed9df2bda512d1131c30665dd688efd": "6b72a8852956a27127a6373d74d42b3e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/b9a0d6753df36173fb7ee281f3dcb70f7754d6": "adce48ebb51c3fb5cc9f2aefd8ab6827",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/1390bfcf2737c388814a579762a54db7517ea4": "8059a454cacbad9f8aeb6ccb14360f02",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/32b7b9e6103d50ccab3669c83d4df29727e6a1": "40ea44c29c5c42a96618f8075d6f48e4",
".git/objects/2b/a32f15ec40ae260547cf9174142d25001d0b97": "60613d4944c1f5defbce160554c40aad",
".git/objects/47/d739cfbbd24c9e637bfaa72bdbdee7e0f83e0b": "190bccf40e8ef72621adc81cb1a085bd",
".git/objects/22/8c60026dc5a73a5bca5233ce74ea27344cfe54": "d3668d05a94a9a42be0ff33581479363",
".git/objects/22/21c6948bab1c002e010c62335a697640d6c52a": "0128b90622d2f5ad37085ec7199bbf5e",
".git/objects/25/6389d0be0a05ae554e768c73a1d9d7cf04cd90": "fe3c8974c66e69264c044b00837cf142",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ddd965565ba9b20f7c1464cf6b30f29a",
".git/logs/refs/heads/main": "c2e1f05fc63c632fa578eab45350c74d",
".git/logs/refs/remotes/origin/main": "cde5fe42d7a821e553c471fbcbcedb9b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "83f9f863ca7eb7d390e652af4ac3f38f",
".git/refs/remotes/origin/main": "83f9f863ca7eb7d390e652af4ac3f38f",
".git/index": "a38e7a4542c51f7eb928996b244b2bc3",
".git/COMMIT_EDITMSG": "a9aabf9dcda17422d92bda759fe92fc8",
"assets/AssetManifest.json": "1594244dc2ce36993f58756a8d3e9800",
"assets/NOTICES": "7dfe9f7173dae9cd007e89429dc8e4c7",
"assets/FontManifest.json": "0ba060775eff7bac341aa991ac262564",
"assets/AssetManifest.bin.json": "474939dbdab59e202b5446c2dc263370",
"assets/Maharram_Guliyev_CV.pdf": "4aa57a7c0e836280296c82401578aa5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c4d98c68eb5a7c65bb07c09d678098b2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0219c5ac9710b221888d78cd3365c8fc",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ff9fdcfff19ca4c6d61446759a8221f8",
"assets/fonts/MaterialIcons-Regular.otf": "4ea977939aa5df05330a0ecd899fb4c8",
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
"assets/assets/images/logos/esimafly.png": "1a675bcec8bd498c05ec97c0a7678280",
"assets/assets/images/logos/lilac.png": "5435dfc32e93d3a3a4094ad495ce3e2a",
"assets/assets/images/logos/bouquet.webp": "2290cebe6376a5f1cdfd23c1bb309167",
"assets/assets/images/logos/dentistore.webp": "9b721c45f83d7705fd9777063a05c948",
"assets/assets/images/logos/gunka.png": "2d3dac8938d7d96c91e0e4e825794cee",
"assets/assets/images/mockups/lilac-mockup.png": "a6a1e6a23ab5133f60767bdf97ae8710",
"assets/assets/images/mockups/esimafly-mockup.png": "6cf46837e5749263f82fcb7e189a6479",
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
"assets/assets/images/about1.png": "e92ebe1cf89f09455b6d9fd62600ac92",
"assets/assets/images/about.png": "504c9a40e90e0d065efb09a6772cb345",
"assets/assets/fonts/neue-power/NeuePower-Ultra.ttf": "94518335ea7fb83da1989eb9c5d08853",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/animations/chevron_down.json": "fe1556a61c23180c51311d8d10550330",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
