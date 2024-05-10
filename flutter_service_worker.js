'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "13bbf12001f8c0b1b784301e8b8ea755",
"/": "13bbf12001f8c0b1b784301e8b8ea755",
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
"main.dart.js": "36bddab46de4accdc6965bc5610076bb",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2fc87c02f41e43771ce323e0916e5070",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ecb86521be16cec044ee29910029c023",
".git/config": "ab3cdf3bc914b8a7892c672d4f338209",
".git/objects/95/4bcad08503aaa0d77f242d06db087e5a85dc29": "a95947f99e92e7ba6fef53b9164ecbb2",
".git/objects/95/c7694aeff89aa60959b7c9af6d1e5849f3e27f": "bc28fe1ba51f27ebeacee90baf2dc9a2",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/8abd8bae99a6e21fbd0dbe480bd99084c5b4ea": "ad9458e5fb9328387f82ba9dcb90eb1f",
".git/objects/92/8e32d6289c7dac65415844217fdafc2bfb125c": "2d0ed6a9def0234808208ad64fd6777a",
".git/objects/66/2f9ec45ea76759c4ccc253050f1af2d686e043": "389c7b34007c39faaac1c93e2d0e3efc",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6f/cab8b2f6b3d1434b10b75192ede81a7789599c": "209d16afff0a5353d7ab0893aafd972d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6a/4807bbb433a4ad21e4a6cb5cd9413e3754840c": "eeaad3c380d6344a179b6d4e424fe703",
".git/objects/6a/49cbf139fd53a04eff9c3b0b2f00ac70e0c5f5": "0aebbe64a37c8d9a712481d04f4c5961",
".git/objects/6a/1ef9b1bece02a7560e8cbb58faf105849d6163": "2727aa67efbb99290c9925fbab3a1b52",
".git/objects/35/b6cf11da4c5d5892381b0e4f972af72fa559cd": "4c333d9978fa341e296b0b4a8c697b91",
".git/objects/35/133b33ca7cd64ec7ba86c24de7c44f48f556af": "49b3411b47440cff76d9977fad4a8aa0",
".git/objects/56/108dca8d383ca60435c28c856550a145eee826": "046386ea222987d394886eb240c7ba14",
".git/objects/51/6e100d5d6a38e778c663f06141fce24d0d3314": "fe18d799bd8287e6e18c46fbe0ca9fbb",
".git/objects/0b/c87d215bf1d0fbd066241b487604077e565765": "bfb838de2e16bfc5aeb09bf13da0b6db",
".git/objects/93/342ffd0680e5566d8110de87cb9ce02fca9afd": "ccd0c22443a4b8d9369d7790a4847874",
".git/objects/93/c212515caa94842f5cd6dda85c3b31c8d5818e": "6f4ca24b8a096ed6fc7a205c53256ef1",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/60/ac346e1281210840a6d3ecb8e6ec79a54b980a": "643627af8716ed69c4656f221957aa4b",
".git/objects/60/2ab5c6b8caf23545f9b1c5b61f5c7db640e1ac": "606f7fd221be1f4118498d1460a03e6b",
".git/objects/60/7e3a438e771dc426a6ea4122728c93e4fda5eb": "2c6a6dd04622e6687737ba2754717cf7",
".git/objects/34/a0da406c7a10cf6a3c414d0e02310ffbafd4a2": "f43d7ca591ec35fcad7f89858b1ea634",
".git/objects/5a/636f3985474cb7b7844423ed9bb2ed4212588c": "9c5a21af900edc225729f8a9e57e0756",
".git/objects/5f/8d65493dada34d37b3c5a38c1ab1a2660ec571": "40caae7093a3db10ae6e6e185f19d441",
".git/objects/5f/0b20a9a77d71463ab9139cb9b1a71aabf70130": "930773ff18f16a8784f3a40b34c590cd",
".git/objects/02/32efe637ec6ce062b9d9aea442276a01d9e96e": "e8609c505126b08d483420d88e88c9bf",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ad/ddee2537c27e4a9714712a71660df7ac26bcc7": "15da490b8b4068cccc125e5895180e89",
".git/objects/b3/4abce979af9784bbdd27eccfd99b0a53ee3415": "749ffead1438b020652bee456c8d12fb",
".git/objects/d1/f6b7fd0df0b8acee99469e9d5a8dd2f74539e5": "854afbabb787f061bbc30cf43ff71051",
".git/objects/d1/467c32f0d02beb61708fa9af588e20cea3bc30": "e3bc21ebd4acccb64fa776b0ab05b715",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/3e4eb4c43224997088a7c4f6b4b60a485defb0": "6976bf690e21f6252b3d3024d50cc75f",
".git/objects/ab/a19b8d7e4d807c57795a503ae79a91e58d85fa": "1c15f615ceebe3680a2acdea4ab0477d",
".git/objects/ab/cabc0e3cef2ac3bbf96501a907abbc9a01687d": "f1da685248f1aaef4ff37e5d1de04a00",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/95de77394c64f5285b4cc65e384b894af7a72a": "97cc95fb7dfbf28295ecc50ca690f939",
".git/objects/c7/a990a643b008a1da0184dd12dbe94e11d0f2a1": "5fccc404dfc2376be4c6c58bb8a654d1",
".git/objects/c0/49f7b0da91f6d16df0168dfe25d1d99df909a4": "bc3785ec3c7331f6e425d95755cb22de",
".git/objects/c0/94ede04a7e4e52b744180fa6648593bed0ffbb": "a5113b01f181289582ad90d4c741ca38",
".git/objects/ee/0ce55746b065353269d5f3c6c70ec71602d414": "da19b17548ba57da02ecc602de920203",
".git/objects/fd/f150e50e68c52e73721ff3a8814b3252bdf364": "4b061980c39c42851a5ca55f0e87d76d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/f0a782ab67def25855f61cc7fd9f5947345c75": "89a0d4e904dbb624cc5900923bd96360",
".git/objects/fe/648445e33879e7c12ea93fe240a8878faa51f6": "0be2e863586d0609c6105f8b1b8b5afe",
".git/objects/fe/d2d16577d6c9d74d221e7f715c2306c6cec7b3": "137a50d596ddadb1015f6fae91cf8147",
".git/objects/c1/d54e97a76f14858bfe0154e8b915719ee334a4": "f0c21f0d30df16b2d9905676fc8c0239",
".git/objects/ec/7b8478f8255470ccfe1454226910055dcd8af1": "ebcbab698a7469bdfd45345093e445d7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/5909c508bb96cbf0934336208977f62cd80199": "e80d87017497d959f26c6e5c41b2acea",
".git/objects/27/b7944c2b02c8d94bc7ca57629cac2ecde347cc": "bda6dd41e77907a3093337b477d91f20",
".git/objects/4b/2f05a556f3f9bf953b0b536e37531b1d6379e2": "b172753cbf05feeea3b3062b0d648297",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/7d/55a8677480cd3cb6c150bb4d10aa9b33f72ead": "d59ca8eb8994b65ddf24be6828def485",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/8e69a8bc9263320962ceea46ec02854d7b8155": "d603aa45f5d8fa1ff93d50fa948c206a",
".git/objects/42/f1ada126245d7da8a61168c138756ddd4ff177": "8a7c9f01ec75f311391611633234a06d",
".git/objects/42/66f6fcad3ffaa6651ac8c594341e771e0042b6": "665b1af7444e021cbbf6172e6f0879c5",
".git/objects/45/7f1ecc51f203c0c1faf6edef9b50b5751a1016": "3bf7533341dabf3b790cd3a588fcd360",
".git/objects/1f/2a07e741c21f2518d25efc24380bc708d8e070": "ea2f48cc229a9f630e6eb40c7f9780c1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/e4286291015eba7551d90b8d92504768130a37": "61dc563bcf64c0a475b7f54a0c8b1896",
".git/objects/74/331568e09f92e37fa65d356ffc72560fe53ee3": "42537ca91f4d5f2f0425b69928359202",
".git/objects/1a/45d91cf60f69b4ddfade8b6c12e194cd1d8b28": "a573fc2cd8fe8ad24efec20b68579c22",
".git/objects/8a/615228596c535f8ba8799d27349a87e991fa1c": "e920a6525c0cadb58dcc6e5278ff3c8e",
".git/objects/10/b4c134063aa48a9f23d4e17942ce722960c2a7": "cbd5b54d1d87ad4eb99fcbe576073387",
".git/objects/10/efac86e379ece5e1736c3f50b01c27b31f9652": "6fb9efdd3b692a825ed7f57fb1b16e72",
".git/objects/26/cd300a2caa3863a44f8229f49460c868eec477": "dea08e9abe387d082c3331288342b5d4",
".git/objects/21/08575f15822f7cdc4d49ba41281477e5348c7c": "771c78a42090e2dd886399b0009bb743",
".git/objects/21/0b324663b8617e677f4019a93dd14bce4cdee9": "64c77121e2fe036f3c7e20c288024b0a",
".git/objects/75/9c79f30d2e011f8061e466167374c60c047588": "bbf9b301d043a4f5be46b724e33b4ee5",
".git/objects/72/3e812c7097aed8d337c56f27e973dd4a2bd8ed": "343a7dd977fc4ca525a4fbe073f08e33",
".git/objects/2a/b2351588d530f7365440df380729a428836fe3": "bf7f8bd3592e44dabf22bac06272889d",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/07/3febaee7420a0292cfa6ace09b04ddb493abab": "6fe6bb74ba03a0447fda5f9c1006d2c5",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/6e/8123045e2051fa4aacb555fa0505e4839cd27e": "3a511de1376340ec9c70bda64e010d45",
".git/objects/6e/75103ccb555c148e307d69632a0f3053ba7f5a": "26715aa2ce6fa83e70ad7b0b840594ef",
".git/objects/9a/8f38994713c289cd32a3a2a193ba3a02da192c": "2fe0ecf042713f094456a4c12ed4ea0b",
".git/objects/5d/66d5dded93ba63d35fed4881a08ecd92c2db71": "f9e0157872a5d6db2df610236103f97b",
".git/objects/65/9975880eb43af447d5f1db475a872ce76e0564": "1524512e00402dce76b8c7bee136e9b8",
".git/objects/96/dab5f572e5de87ca21519e04daf12ae0948cd9": "cb2aff2b3c0faf407894d0dba922c6ae",
".git/objects/53/0b3aee779f3d0ab9c3528dd7b235bd0a054be8": "a2867aca0047c7f87870d89fa0da5f0e",
".git/objects/53/05ff90e8bcfec4e65c9446dc52d2373f287715": "4853720b6239af0ea75201df165a91a8",
".git/objects/3f/4e8fdd98a2c411da7fba4fd6203810fdd6b547": "bfbc2396ff6cf594d2f84e19480df543",
".git/objects/3f/0c06950c0205e5ef5aaf5eef12b3efed355851": "99a1f77d74d19eef79d29930eb65ca54",
".git/objects/30/9c5d48bb1bfa2ae9ce5ad70083a989ce36c9a2": "b345489e3f4f2ff1cc9c9003b27f619b",
".git/objects/37/14a81195366cfd96b3c6d5d0e24b71cb2b8f21": "1bd14cf3c8527a999c45c2c10db0a63a",
".git/objects/06/4fbeba418c4956d2d0de1981703508dfdef30a": "58777e3836168c775951417fc84210d8",
".git/objects/39/3d79378f2d61fb2ebb0d5b2b1b61322204694b": "d8cfe870ff0dcb276fcc2716bcd14582",
".git/objects/39/6f318de701bfd4e1395a9b690491ddf44110b8": "1709645f1e3836a63e3f65935b860f06",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e138efaee37182183d57d42da949504048e9f7": "b1a456cff6710f40a72d21641a94d8a8",
".git/objects/ba/aa050ab5d5cad9d39f2ffca46ff7001c4d96f3": "4ffa568ca0923cd9c6253532a7f3e611",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/0f94c7f5def407161241225289e0199367407a": "d66c8ca5d56137aa8becc626b4864f25",
".git/objects/d2/d83ec8898058a90a197953818e642c90af37fb": "e0f9a62b996b09463e53670a495e11fc",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/104eed64d79e74b4804e9f9efda9c802d15fbe": "91d31a7fae9254058def6a781581dbe6",
".git/objects/a8/cf5428e1b118e211a9e510371b65e357de1c97": "f3948cd67334f709739d6d2c100d510e",
".git/objects/a6/4b7033bf00bdd7adf582bd753ca37bb44be7c8": "e8bdffbf16a946a849e918cc85177f0b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/12b8cb9be865c02499502755c2af40d5ac432b": "11d2dffe2ac2a56581397e795813f159",
".git/objects/ea/176ae873160107e13c71cc7181bc88612bb53e": "55658302e81c527c2066e06ed3cf73ac",
".git/objects/e1/7505aa80fb5998dfda88dfbc26d3dccee15874": "abe68824c12467d407544dff1748386f",
".git/objects/e1/bba460b2425948f91eed31d898916ac8a47a34": "c472b5d03d74798559f3090c53a17b34",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/4b38fc0a8ac4423c99b2a2047366668e9671c2": "2c1bc37634c062109ad4dad9a6769f81",
".git/objects/cc/ad84a0ace2033aa4a5d9e8c711cbbe7a07720a": "24c28377be0d11b73b651a59ec6339c3",
".git/objects/e6/b0f759e3032408e13c190afe3a6d4cb432ec63": "5166a0b345090a230d493349ed750136",
".git/objects/e6/b7e2163c77d52df5c95fd185020aa9b6bf71b2": "b9f96c4dbdea08b804b56bd4901e9f7d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/194218b6e6b34271cb9183886476807cedfe16": "5d612299110c65d93afcc4f40e6c5a67",
".git/objects/e8/7459afead79b247d5ea5587a2038602959a60b": "ce1051622765ce9260e1dee1a18b1aa0",
".git/objects/e8/a3226ce6db99cf0ff4b5055a7970adfb906006": "5fba07282735aaadf6a5c6bdea7b3855",
".git/objects/fa/d9f7fe1e7270cf3866115b52cbd10542b75dc4": "e4c14b48bcad9d3ed74dc250806c13a9",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/0d5e78fcec434c9c1fda64dc8aa24b2949c6ee": "806b479c0c6dcf3644b94679bcd6d733",
".git/objects/e9/d0c9d7019d5102bd95aa6b44c6332809cca098": "00613c872bcda5b3537600ea1605ce42",
".git/objects/e9/06a8bfdc4908b24d2b146ff987aa868a3e04c3": "a35715d713c54788dc861cacfd24d5bc",
".git/objects/f1/612fdcd4506cde1913b453932e496fcb2c5c9a": "f4f4b2b1aba945b662258a5cfa5e3709",
".git/objects/e7/f40edecc26b408e569f078249c069b8b16e4a6": "33a9e9f105cb61d715ec82ef4fafcc92",
".git/objects/e7/7a139affbebc4a485cc740d873b13bc5d5ee63": "746dc7be714e74564eac596a438d4cbe",
".git/objects/f8/81316f9ab4a82e99485a21a3edbcd40021e562": "70341788b05fcb768cfd8fb800871088",
".git/objects/41/d8f9d3f8199bc940b799849c3db682f3956003": "1314a88dd968bee39d50a4430042ff39",
".git/objects/41/f8fe27d5c0bacfbd53a17822803592b436cd03": "469ad896c000f57dc31cfa93c9a00825",
".git/objects/77/11a30a3a49f9dfd1679d9f9a09b7a76d73dba4": "5d73fd82347f144610854a9acac7bb60",
".git/objects/84/1030b5a9c67e4f9382c5fbbe2ca4e793558a17": "19d39f213af77f4eb3e9b19cf8766ab0",
".git/objects/4a/253a4f171f052c4b60ffe022424f2c8cf3d552": "13755c2df7a6a8605c12d4f7e0293076",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/85384ee8b987eda8c5d74c562c5f6fb0331ca2": "1375cf257daf4d30bd21e1d99655c96e",
".git/objects/8d/7da1dc302698f903f21ac9905cc70ea4c59e13": "6ceb6a83c8868017f8b7bd0038ac72aa",
".git/objects/15/f3e1e2f878738025661e2de7f3d97284f45b33": "04637b4e167d892b6a67b0381db2839b",
".git/objects/12/95274dd6fddfa0dcb066b62c313c26c5f93f39": "57f07a109a885ba7a956178789001adf",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/33e696d373b8610297cda889a88d8a5a6b7b24": "de98647d3917ebed9f1a2abe27bbcbac",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/1390bfcf2737c388814a579762a54db7517ea4": "8059a454cacbad9f8aeb6ccb14360f02",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/2b/a32f15ec40ae260547cf9174142d25001d0b97": "60613d4944c1f5defbce160554c40aad",
".git/objects/13/e0ca1b0e930df3fd728124a1e8c6c17bb873de": "4ae9ce070d2cf2f0c700387bbf50c43c",
".git/objects/7f/a9659e8f22a8608a1ba97b3f2c0a8c176059de": "4cb338dca44f6b2354d95e089f6cb28f",
".git/objects/14/b41c7acabc6eb4c1cad54f5ffc50b34ceebd8e": "24ce76743e53b50a3c0bd8a63acb59a6",
".git/objects/22/8c60026dc5a73a5bca5233ce74ea27344cfe54": "d3668d05a94a9a42be0ff33581479363",
".git/objects/22/21c6948bab1c002e010c62335a697640d6c52a": "0128b90622d2f5ad37085ec7199bbf5e",
".git/objects/25/6389d0be0a05ae554e768c73a1d9d7cf04cd90": "fe3c8974c66e69264c044b00837cf142",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a998b54d8f629c1f0148d528d48a2051",
".git/logs/refs/heads/main": "8dd0bcfa2ee91b50990f8f10330b2e65",
".git/logs/refs/remotes/origin/main": "3668c577ec4edff0ff0fd5fd1fc0ccaa",
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
".git/refs/heads/main": "597deca8fcef1d38023b1b0883b78cd9",
".git/refs/remotes/origin/main": "597deca8fcef1d38023b1b0883b78cd9",
".git/index": "e8c012293c62adfb1119a09c1b0407fb",
".git/COMMIT_EDITMSG": "0de6d9d7b76054c739bc6f34ceb67a17",
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
