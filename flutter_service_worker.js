'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "67b31d20227d8728cd2d18ff8a6224d6",
"/": "67b31d20227d8728cd2d18ff8a6224d6",
"main.dart.js": "d6af491bea347f4858030af3ef4f5d26",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "9ed8e0bd193c55ad6e72d6ee165cb7f5",
"main-icon.png": "01cbae9dc901c9c1206cdebc31658535",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "ab3cdf3bc914b8a7892c672d4f338209",
".git/objects/59/eb24c67d6db4ee8b00c3d3ecf8dac0f815595b": "7873ae24625f8faa36ca60cb6a32b872",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/8e32d6289c7dac65415844217fdafc2bfb125c": "2d0ed6a9def0234808208ad64fd6777a",
".git/objects/0c/0347ed7f3d04f2eb734071ae5caf0a6dc4539f": "6356a97136003ff7815d035f7ace1e27",
".git/objects/0c/f53ee6aa4c73f76db3962f616a39bc992c8fed": "f5d9be74d8d22ed32f5426205742e72c",
".git/objects/66/9920d6811efefe7ce6c9f068aca7208476112e": "c690e558fbe769dc7d8ea7a04fcc42cc",
".git/objects/66/15d7002649fca88ac034b031b08389a68458af": "c6c4264f37cc7793ce62c5fd11f26cdf",
".git/objects/66/e49ad6585210ecab9351ab0dda1b7d7a975e9d": "7aece198ef9b1ad1558163dbf47b5595",
".git/objects/3e/2a66c5ae2f0c0423ae37df572982dea7145c70": "196d843b8bf2204a448b5d32eca18a72",
".git/objects/68/09fd908c3d51a704ec438244d64d60c9352af6": "1476794a4cac1569517aaf2663d75ee7",
".git/objects/3b/6eeae26fe94f53f62c7cb6ce45882265039e56": "9feab2a2cc8f37256d4c833cb6ab2f71",
".git/objects/04/e37a9e014c04fb774108c209abe13594df5935": "399b11d344d35ec2a9a605964cc97365",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/1ef9b1bece02a7560e8cbb58faf105849d6163": "2727aa67efbb99290c9925fbab3a1b52",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/7fd91c3a7ebd3db6a3496f21c8253fcc239f57": "bfe1a64bafb3c4a03199d18760a06c40",
".git/objects/67/44378095ae6f3ac1071e1d670682d03d6c057d": "33b17a34a563fea89b253c8d6ceadd68",
".git/objects/93/109a907408d3d3b15795b84c3bf0ce76f91148": "598cc37d99c56487068beb55e7a7752c",
".git/objects/93/c212515caa94842f5cd6dda85c3b31c8d5818e": "6f4ca24b8a096ed6fc7a205c53256ef1",
".git/objects/34/eab7db6f1ae918edd315bec1347371e3dba609": "0d4f62d251ce1f582f1cc1ccfecbfe7b",
".git/objects/34/904b5ddcced49a0f7a569725a81f98af91243b": "7a85966bead83754a319e9b943b28158",
".git/objects/33/a0bbdbe2b70b5e4d80acdf3cd797dc9de15086": "b5a10b595070100c4b7732237bfe4fd0",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/5554a79389e9e02cf76f117760e58645e980b9": "23a9ac1211a76e2d8392a86f91456745",
".git/objects/9c/c444e17a7e168c1640dda75c25017699b9ccdf": "a8c9394d573a3188efcd2c19a5ff1804",
".git/objects/9c/8eabc6b93294d5dc406e80fba7f2c7fe685cc6": "b93a75be9a46e1501b894f648313e163",
".git/objects/9c/e2afac361c0f876c7e3d41196f7ed5c3213517": "9a35a73ffe0556d046d856c5e85b21e4",
".git/objects/02/0fb7b58b409aca0932f52a51f968cb036a92d3": "25ad4879c226a65f76b0f08ed32da82f",
".git/objects/a3/6fc27a326e25efab3e87838e0e20d0d562cb38": "28d5b1ce3b9bc73afbc36d5fc966e910",
".git/objects/a3/4efac576298d6255b1799126a571af33727535": "5ccdb62c1f8c0016c61f5b0394955d6a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/9a2777acb4207976e6697f3d377fdbb36d6961": "e8a1be9c893e63d03e61e664e6ff5d4d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/f74d9600bea843fb9746e9927c1e22b90227d3": "66db0e1aa829f71da943a48d59c7cbc4",
".git/objects/d0/d8cdc9cf75cdf708c3b37202338fd095526114": "32ee8d4829abe6835925107736227297",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/bd/044fdf590792f30f440507b1cb43daf236ffc3": "714b31200b849392f937e4430495ca81",
".git/objects/bd/4320b6d271d643914699b4c67339a292da617a": "04978341b90e622b82a89e4f6b0a2ea6",
".git/objects/d6/a12d0eea09da560f81ed383cea8573ccf77afc": "f725c1878f1f56ac305620949c23eb2c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/6e2e28df49f34e0bd1d84adbe6f3ba01a98019": "0c443475e8ee8e4f91d44e544bb6b88f",
".git/objects/ab/43a5b9a1900c718e096a7e92335d1775619325": "cb8d071da95c06fd195b70735c92292c",
".git/objects/e2/7b84ec4aa3677a1b34089472637cc5eed07c63": "7502e61b31873e254ae533e877b23588",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/95de77394c64f5285b4cc65e384b894af7a72a": "97cc95fb7dfbf28295ecc50ca690f939",
".git/objects/c7/a990a643b008a1da0184dd12dbe94e11d0f2a1": "5fccc404dfc2376be4c6c58bb8a654d1",
".git/objects/c0/49f7b0da91f6d16df0168dfe25d1d99df909a4": "bc3785ec3c7331f6e425d95755cb22de",
".git/objects/fc/6d5ad1d6621d862d08b8c59260d80dd2ef7938": "01a845b27a4819787d4d789d078eaa1f",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e3/0f6792559bbbf43d9fc069fadee37e05003a3e": "29762f7f6bebeeb9f450edc2ed15c7da",
".git/objects/cf/f0abe3040d2febeb549476ff262061924fed80": "997ad9bd7cc5ba8429c00a040ee07a11",
".git/objects/ca/1b62d1ad84cea93f7c668d62c8e3a116cd7534": "fb69e01472bff194f6ba9be5d94baf17",
".git/objects/ca/3132827b43299ddf245fdb9d8ff6b6aa5e12a6": "5b1231936eb04522f4895b94d94c5190",
".git/objects/e4/a2f3acd99a80254efdaca4d2774035f33ce193": "741a9b0afe8e3cca385811e7aaac0eab",
".git/objects/e4/08805ed025cc380e63925c74ba3b539820881a": "f635d4280f7617c6c6fb7710032dd8f0",
".git/objects/e4/fca92757d6622bf652c1d90372ef26b2a1b73a": "bf52c0e12ae4b69e866d5f4fbc9640a0",
".git/objects/e4/04df561bf947a353905c17612c47146c0dc60f": "f8c0615b555b1917d3bfeb0528e7dc9e",
".git/objects/fe/9c65be7990da2ba368619106eae9cb021b17d5": "9b819f8fe1fd33c91478318b5c9edc10",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/184f4be6c25ab1c69e801d8a2ee797eabfc9a1": "57478b9991821e5af497b93002d5c7de",
".git/objects/ec/a9e286b7f2c179fe94d06390f738aa1d031949": "a5199f56a3db03ae393f781d1f19a76d",
".git/objects/4e/dd1e48120f11b9481c77cb805bba08c3d43689": "383b21870deae02be7b75d670cdaa43f",
".git/objects/4e/aa575af16568b5a78ff43e4f4a69e5c236fe6d": "c8f492658aee890b767b876442a58f5c",
".git/objects/18/093582f7eec66110452178dcdb4dbcfa1f4f3a": "a2ce1a5f355c6ae0bda04f598aa2d057",
".git/objects/27/b5d00848425b204c0e50740af69ac531e785a5": "38ec3c2ddbd1f85759787ce1c12e5a9c",
".git/objects/27/2d833dcd60844eb2b17831c096c7b3ca05e40b": "19554f33eef9801967a899d3beb37412",
".git/objects/4b/a1d4d1bfad803fab40725bc7f2462f875856b6": "4c04ee62bd24a72b7a638b250d3c9005",
".git/objects/29/0bf8b2c09c482d10bfc65985a6f28eeab08aa8": "820e1f57a58bd47b91105fb4d3ddb12d",
".git/objects/42/f1ada126245d7da8a61168c138756ddd4ff177": "8a7c9f01ec75f311391611633234a06d",
".git/objects/89/f9f4d112d4f6f5ac299455ec9ba7de06169264": "f08d76b64cfc3e732f9988656450fa96",
".git/objects/89/22ea3a995ab98be73990567c67b7a355bae5d3": "f2d112e57bdff90556bba02872542f73",
".git/objects/73/d77b4396e1d796977e4c27e893e18b8ac5576e": "3739774c3609922352bd51d447299c82",
".git/objects/73/f3512c029ca963c3e35a1fae6c8a786547050f": "7f56e16e74f3c107b8aebbd2fa39dad3",
".git/objects/74/e4286291015eba7551d90b8d92504768130a37": "61dc563bcf64c0a475b7f54a0c8b1896",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/7e/bc6bf2f08ad261f39e2c3fe124bb1ddfa91725": "5c54f6a17baa5546112299a67ed798b0",
".git/objects/10/a644c78b8cb0e284d362b8c1150fff0798bbfd": "5fcc67c434a7028b5b6fb1ef0d8682d9",
".git/objects/4c/a7c060e2abfd5fb0535aebecb157b03e4da7fd": "c61ce6ebfc409c45772f09d1c79c999b",
".git/objects/21/503f2c9ffd8e4884e97df13afe3efce708f758": "30cc6ffb4ff2911408f51b06f55a9c3b",
".git/objects/21/0b324663b8617e677f4019a93dd14bce4cdee9": "64c77121e2fe036f3c7e20c288024b0a",
".git/objects/75/9c79f30d2e011f8061e466167374c60c047588": "bbf9b301d043a4f5be46b724e33b4ee5",
".git/objects/75/e0c44a046737bba665a224efa1fd6eecaff921": "39ce4f26d22989a5136d9c05d2aace18",
".git/objects/75/07e7c70a550caadd74e1357bf691fe2786016f": "72c486d549decc576bf520d2d657fac3",
".git/objects/81/d89ef54e60c0e698a5f4b2eac31e24fb1a7ae1": "842b47747e65a47e03999aaa88cceb28",
".git/objects/86/4b4030639df8485e8b15fb46527967e827304d": "c26bf0560b8511eed9094cc9c4f7faeb",
".git/objects/72/3e812c7097aed8d337c56f27e973dd4a2bd8ed": "343a7dd977fc4ca525a4fbe073f08e33",
".git/objects/2f/8cdd850aa30426fd320047afebb94bf6e72e45": "587e20e80a5e10ec02587ec79308adb2",
".git/objects/2f/9c6fb0f929f31a7054a8f98a1172e71347589f": "9044b57605df4573dc2f0dd5bca9ffbd",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/ec426507b6df28830af8c29e2832addb99b101": "d3f3bea298fad4722794f1eae4b645e9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/6d2c34edc038cb343d6e2081f5b3c0ef805b2c": "6f77a5ebd6cd16366aec61a49ef9f5a7",
".git/objects/00/7011f22bb52f165b0dcf1f26de38b182cc12e1": "9e19bf53bea574129c609ce032dce009",
".git/objects/00/1c00026042c8fe827dbc1f8964f0b1a8d8c465": "bd3fdcf8494db6cb415adb27560f208e",
".git/objects/6e/bba6a5ac61caaf5eddcf6753f52a97889ae86d": "de919c77b168c28d45f2505abd324fe7",
".git/objects/6e/8123045e2051fa4aacb555fa0505e4839cd27e": "3a511de1376340ec9c70bda64e010d45",
".git/objects/6e/fea2cbb1ee6e27de464f3061dfea486f717ef8": "4a6c99028cfa16ae8ff3215a6a9ddd55",
".git/objects/9a/8f38994713c289cd32a3a2a193ba3a02da192c": "2fe0ecf042713f094456a4c12ed4ea0b",
".git/objects/09/1b10c13d5775e25c7f7cbf97384f6cccd8ab30": "d6a42c9650563100686aa0607ec5e0dd",
".git/objects/09/fade74e467197f967e54d61c5e9ec3445a8e87": "46c3d695362e209c358e332b5c86ddad",
".git/objects/5d/6d727d15ff23785b005ad826a4c8bfaf2d96fb": "a56dfe07528b33216dec833ed43e64e0",
".git/objects/5d/66d5dded93ba63d35fed4881a08ecd92c2db71": "f9e0157872a5d6db2df610236103f97b",
".git/objects/62/e12b84361d6057583a4eeeb82834e293cf2612": "caa6223fc4a98318a432eb1cb964e0ff",
".git/objects/53/0b3aee779f3d0ab9c3528dd7b235bd0a054be8": "a2867aca0047c7f87870d89fa0da5f0e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/9a48b81dfc006fa8ebb77963693eb18976d599": "a9a9eb68ad373f37351174af548bae08",
".git/objects/3f/0c06950c0205e5ef5aaf5eef12b3efed355851": "99a1f77d74d19eef79d29930eb65ca54",
".git/objects/30/f5ae2036f1f6080ce37677f55fda9fd3ed7745": "e4962ad945b9f53bc1a4c42a91a0b95a",
".git/objects/30/bfa21a6170acfd30ec73d4718acaad9f9922b7": "7d56e3be10d0ca9e7274b51e3ad00e6b",
".git/objects/30/9c5d48bb1bfa2ae9ce5ad70083a989ce36c9a2": "b345489e3f4f2ff1cc9c9003b27f619b",
".git/objects/30/bbfc799b5aeb970dcf7048b39d5edfab5bb315": "c2ed4f03f56cc1d0139044a326c73d43",
".git/objects/37/0fcbe35d4a81750c24e89151773e3ed4f7fe80": "5da2ac2a8f721377b6e8cef76597950a",
".git/objects/6d/16c24a69c67c563661b1b0c1be26d8a9f739e1": "c628d7f38542f46e0350db6c77509ca8",
".git/objects/6d/f503a5f534062abaae63cb2d6c5f89fbcf3796": "077f750236be60c0364396b848caf39e",
".git/objects/06/337fb43f5bf7711ce56418e16a7a151e17d676": "b18c4bdef68f977fa2e32f62d037b2b6",
".git/objects/06/4fbeba418c4956d2d0de1981703508dfdef30a": "58777e3836168c775951417fc84210d8",
".git/objects/06/3b6304a3fbdbc1f305f52929b06f73b8fd2569": "33271a4302a7f7c86874bd126e4680f9",
".git/objects/55/4938c36a3247700b0446fc20ab7b4512cc2dc7": "4d58455432a3cd69b206aff83a6114ec",
".git/objects/0a/f4553c3747cc88163f69889312c9f10382cad3": "72177b11a0e484fa52f90f148c7844cb",
".git/objects/90/ed948693967309a292bb902171b79c1b63e705": "833c08d05e3df1a2d80ba5a3d14df4e8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/aa050ab5d5cad9d39f2ffca46ff7001c4d96f3": "4ffa568ca0923cd9c6253532a7f3e611",
".git/objects/a0/9614cdae8dc4c8e0466521c6f11040b43a012e": "198e359b24796a91e30428256b63b78c",
".git/objects/b1/494405fd575211fc42038995dcb45d93b490e0": "daa8a48780c13a6378d1b19e4e4981c5",
".git/objects/dd/0f94c7f5def407161241225289e0199367407a": "d66c8ca5d56137aa8becc626b4864f25",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/d6bb326acb7841080b4407fdebd1a6e95ca129": "7a0084c711da223a636ad7442da3d47f",
".git/objects/d2/5c34f6be5bede3e25bd32b27aab222a71f37bc": "74281ebe0f4cc996351393cd50aafc32",
".git/objects/d2/bfc12c7ac3ef11ec8c77dafd3ea37b69f2a227": "99925483c51a2bb1dd5ece296b85b7d3",
".git/objects/d2/db13958b617978d8b426566eac3b71f7356e20": "4ee3114ef107c2850318a060f6366d04",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/94a57ab7676cb73761bf041979cb8b7ec81e2a": "d4af17636bc5ed4a688917a02e25651d",
".git/objects/b0/46366359e10f9caf54dc54255a2c966b2c67cf": "af566d8c2cfcd6ec077063968255e427",
".git/objects/a6/4b7033bf00bdd7adf582bd753ca37bb44be7c8": "e8bdffbf16a946a849e918cc85177f0b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/9f5ff20fde43c3316109103baeb9561cf82096": "cd29c44a4ef1868aa7ca9fe1ed3f019d",
".git/objects/ea/176ae873160107e13c71cc7181bc88612bb53e": "55658302e81c527c2066e06ed3cf73ac",
".git/objects/ea/adb0d1cbd1bb79a97b451d888ad40d51062c7b": "aa5d5635c66a07ef8b6ecfcc41915983",
".git/objects/ea/fce92c696e36f5902c5602f6afc6325f153b39": "3b07b28a868a7adbfa7a738bef7ef50b",
".git/objects/ea/19a7b26dcbc6b033bbd975ac6a10bd77ac9bec": "2d4b7617f743194e35600b53e7d44060",
".git/objects/e1/b2e86872522005db4a74a3c9c17f27e16ba04c": "1b49744f7425e1f173460c4afe8ce918",
".git/objects/cc/d75e6f62cbb612ac1c41c3945d96cbd28e88e6": "30ef249853fd84b30bb2bcd26db1a28c",
".git/objects/cc/0e8422a7408ba9ccd5822f630d4d80915964bd": "381aca55015fc4b1a621909f2c73f35b",
".git/objects/e6/b7e2163c77d52df5c95fd185020aa9b6bf71b2": "b9f96c4dbdea08b804b56bd4901e9f7d",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/194218b6e6b34271cb9183886476807cedfe16": "5d612299110c65d93afcc4f40e6c5a67",
".git/objects/e8/7459afead79b247d5ea5587a2038602959a60b": "ce1051622765ce9260e1dee1a18b1aa0",
".git/objects/fa/d9f7fe1e7270cf3866115b52cbd10542b75dc4": "e4c14b48bcad9d3ed74dc250806c13a9",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/ff/a16e2b119e1bbeb5b3f595e302f95b0854d6df": "6c64c3d2e0fa9f532e989bb2d2f32c14",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e7/52ac094f52bf4167645f0fa74638a62e039bab": "a175c481d901eb2134d53607335cda82",
".git/objects/e7/7a139affbebc4a485cc740d873b13bc5d5ee63": "746dc7be714e74564eac596a438d4cbe",
".git/objects/ce/e71778ca1dd7d6d0f43ff36ff8a2f6275aa421": "3d231588470be6e0b9783ae28a9592d3",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/b5772a6a7700d54459cffbf63bd2c27589d486": "4c6250be846b730bb9e400d010ae695e",
".git/objects/79/38f07c1c489ce805c08433166e9cf6eb2092df": "1382400f6d9aaabc8b6eebc7191269d2",
".git/objects/79/1f2942981c8723d24dabbf3465887d940c83ef": "15e6409b8ac3d7d621b959ce09b2bacc",
".git/objects/2d/59255a4bdf213f5725a7c02d9d243132bc6be6": "583e6bd03ca832910be9aca015824a90",
".git/objects/41/59653e1039272d53a238a0ee261de88626d756": "0d345af58b16ab470d82f07a90963cef",
".git/objects/41/5831290a7b64def597ed94b87069881eb1b3a8": "7c27f9f5921cab11e60336e8086e4cab",
".git/objects/83/3f1de9c3596ff2d3ec5d75aa160def9d93b0b3": "035c32104947f3b6187a57ca31c444fa",
".git/objects/1b/74571c3ab7dfbd12a0f5d717ad90bd19c8ce8e": "b07239407707e7fa198001fcc82b5f9f",
".git/objects/77/11a30a3a49f9dfd1679d9f9a09b7a76d73dba4": "5d73fd82347f144610854a9acac7bb60",
".git/objects/77/533962c192058fd46080a748ea24f287d9c2fd": "29e70752bfe471cabe256771e4800031",
".git/objects/70/b876c838b337c2dc155bba67c6f4a778118d04": "96cc5d78ab99da07afe2db2873b95e7d",
".git/objects/1e/cc30703ecf41a95d446ada1079fe4693120599": "e3208a486aeda19ca764273ff15c3c0e",
".git/objects/4a/253a4f171f052c4b60ffe022424f2c8cf3d552": "13755c2df7a6a8605c12d4f7e0293076",
".git/objects/4f/49c5c8389857ed560715ea97cca7d1afee19b2": "eb70eb7fc55f56c6205416fc85dda837",
".git/objects/8d/bf8d24e7a5e1485fdc8839fc54df929460e8b3": "bac842c53a04941aa45869b63e84db13",
".git/objects/8d/a2e5b7ab7047a986ed1776aeff091e7af7e854": "1c11c20140336afd93702bab84314282",
".git/objects/12/95274dd6fddfa0dcb066b62c313c26c5f93f39": "57f07a109a885ba7a956178789001adf",
".git/objects/8c/6a60f6230a006c144bd31fcdc575ec99532818": "18e3bc3e4c63652856298a40fca7087e",
".git/objects/8c/927909739d1831e3701a9fa309fe16f316dbf0": "841015017502a52c23fbc8c2e0ede87f",
".git/objects/85/daf78bafe426b4d7e87efd96cb497812304176": "4ceac6655aa643380241746ec396f2dd",
".git/objects/76/1390bfcf2737c388814a579762a54db7517ea4": "8059a454cacbad9f8aeb6ccb14360f02",
".git/objects/49/c163852e0b5b397e03dc9e88644c4b29451463": "b706fe7d4d88bd5dccc212831858a63a",
".git/objects/40/5a09dfc0b96312e848016db7f004be99a95124": "10d54140f0640376c68ad99fe78486dd",
".git/objects/2e/3a26041d5f3ef8ce637c7fb71f3a81e08f51ee": "86569f19b0b095868471ba03c9caed8c",
".git/objects/47/c53dbd690bbb5702f2d11ff4d5175ec43f9e85": "303544002aa027516c7cc3249f7c9ac8",
".git/objects/8b/01d1540dae5d5832e100a1b313938b4b87c4b6": "4ba0ba1c7137ac82f222e109f6e77c44",
".git/objects/13/616ab057b9fce7c0e2129e78cc7b7fb7c07882": "f2adfd77dc0eeb697399030d3762df80",
".git/objects/7f/47fe8e8b9a304d41445be6b0889e47500a15e5": "d485bda03ab816f414c97ab0d4818607",
".git/objects/7a/8e104d72d60cd9d43efe01a952fbb278dcd889": "7f7c690cba6f094bb07ffb99095c87c9",
".git/objects/14/b41c7acabc6eb4c1cad54f5ffc50b34ceebd8e": "24ce76743e53b50a3c0bd8a63acb59a6",
".git/objects/25/6389d0be0a05ae554e768c73a1d9d7cf04cd90": "fe3c8974c66e69264c044b00837cf142",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2fd39afe0f77f1c36aae09d3b2aa6540",
".git/logs/refs/heads/main": "0c29d88823f35be55fa2827c0a9a1de8",
".git/logs/refs/remotes/origin/main": "02bb152fe0c8849283d7f2647f1dbdaa",
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
".git/refs/heads/main": "dc65805a7699814b64e6d4102e05a2a9",
".git/refs/remotes/origin/main": "dc65805a7699814b64e6d4102e05a2a9",
".git/index": "b8154c62c043e6e8b981ce9da16feec5",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "e488bc1b0659fd364d53e3c405f1be00",
"assets/NOTICES": "e0e4e2491bb98e600f917b6f66cef0f3",
"assets/FontManifest.json": "279252e8563026c125555301876f17ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b98b9796e5a035fc6092191c31a5c67e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "780ed096849ab1fa2dc034cb0316c1bb",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ea08f51b130a72afc0acf74b1db4244b",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/screenshots/inloya/inloya-1.webp": "f8100f4bc8e8aeda86c67a00472dba48",
"assets/assets/images/screenshots/wibty/wibty-4.webp": "21fce819fd1165021f2e4a077bc36b84",
"assets/assets/images/screenshots/wibty/wibty-5.webp": "5d11e7c1ff6243587357a28751a22730",
"assets/assets/images/screenshots/wibty/wibty-2.webp": "23f1b300f6e96c0c7f12c746fc923fad",
"assets/assets/images/screenshots/wibty/wibty-3.webp": "7d2f4bc0d0a9deedb8cb1c42028a2b9b",
"assets/assets/images/screenshots/wibty/wibty-1.webp": "a45f0a3747ef3297dd93897e22b26a3f",
"assets/assets/images/screenshots/wibty/wibty-6.webp": "55d0eecf322262869d2c9dc853ce4ab4",
"assets/assets/images/screenshots/tezibu-courier/tezibu-courier-3.png": "843f52e823105358d0f3d8f1f5332507",
"assets/assets/images/screenshots/tezibu-courier/tezibu-courier-2.png": "fe2733e8453bc0cb6691c9524b39f196",
"assets/assets/images/screenshots/tezibu-courier/tezibu-courier-1.png": "334040fe360fda680f37ffc8fb8db7c3",
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
