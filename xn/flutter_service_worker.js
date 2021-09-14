'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "54cf0d92c3e661c8ba7d69df68536067",
"splash/img/light-2x.png": "9f6a5cea4cb4cd4449a3d1beca2ec6de",
"splash/img/dark-4x.png": "6f7ef69d6e6315f299409a9b7bccde23",
"splash/img/light-3x.png": "4459d8c71862e98c20f078985beec212",
"splash/img/dark-3x.png": "4459d8c71862e98c20f078985beec212",
"splash/img/light-4x.png": "6f7ef69d6e6315f299409a9b7bccde23",
"splash/img/dark-2x.png": "9f6a5cea4cb4cd4449a3d1beca2ec6de",
"splash/img/dark-1x.png": "9b6a5e126aeeea4ae3e028ff67d0f2c9",
"splash/img/light-1x.png": "9b6a5e126aeeea4ae3e028ff67d0f2c9",
"splash/style.css": "5c74776d35b9e85d790997a9f2349a2d",
"index.html": "2a4f35ce62aab62f24cbd7a44bfea9a4",
"/": "2a4f35ce62aab62f24cbd7a44bfea9a4",
"main.dart.js": "00f11e3e3c94e3e4bae11150336727b9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2ee6405651c0d0286b63c53b14ac74dd",
"assets/images/quantize/2.0x/img_unselected.png": "9f66374c9b6f9b1a66f56b7d76e75738",
"assets/images/quantize/2.0x/img_selected.png": "53bf3c8fb7f0649471a1ad657b2b0abd",
"assets/images/quantize/img_unselected.png": "9d1448bb26ed160fedadf8bed0f15d19",
"assets/images/quantize/img_selected.png": "c6c0acedb147db5508afeb99c835a19a",
"assets/images/quantize/3.0x/img_unselected.png": "a4ac008d77840dae36d4c546eefbadc5",
"assets/images/quantize/3.0x/img_selected.png": "da0b2d5d9e948dd72c3c0fea724f4806",
"assets/images/home/img_invite_award.png": "83ba237b17dd10951bd6118335fcfae8",
"assets/images/home/img_banner1.png": "adf5f75e3962c1357d4a70afe9104f43",
"assets/images/home/img_banner3.png": "d4b9a3ac582495ebc7e995fcb8cdc274",
"assets/images/home/img_banner2.png": "da47204a001457195a39ea6a6832b602",
"assets/images/home/img_create_account.png": "1c1c11788a027d79d171cc7df6584f39",
"assets/images/home/img_quantize.png": "f5622da958d406bc38fb3f0a2e5b3b30",
"assets/images/home/2.0x/img_invite_award.png": "ed2dcf1addfa91ffd0df85c2f56a4317",
"assets/images/home/2.0x/img_banner1.png": "27e6cd2adb7dae59db98576c023576c2",
"assets/images/home/2.0x/img_banner3.png": "176937e904a4add4bf6cf0368c76d673",
"assets/images/home/2.0x/img_banner2.png": "c439999860ca3fc86d2c871e821ddf13",
"assets/images/home/2.0x/img_create_account.png": "68b3bbf3eb0bbb7c46be4845f7b7b29f",
"assets/images/home/2.0x/img_quantize.png": "ddad66516f6c52e7352ff54fa0e13db5",
"assets/images/home/2.0x/img_notice.png": "0e8144c40b44f4c8bc60824c808ffb84",
"assets/images/home/2.0x/img_api.png": "221dc7d91a11d009883b3227faa3460d",
"assets/images/home/2.0x/img_more.png": "d88b4789eed9224c0f21908203fc723c",
"assets/images/home/2.0x/img_top3.png": "29e39ddc19b3fc11216f246811d4e1a7",
"assets/images/home/2.0x/img_top2.png": "91f2dd0f71a23ca08bd43896e83f6432",
"assets/images/home/2.0x/img_help.png": "da4d134873e2330c539727cbdab5eb63",
"assets/images/home/2.0x/img_top1.png": "4c777d5585f8a24567da84749117c80f",
"assets/images/home/3.0x/img_invite_award.png": "87c217e61551734cd427b4bd0de6fcfd",
"assets/images/home/3.0x/img_banner1.png": "51d1b437f9c2bff54ae020db4ab3c219",
"assets/images/home/3.0x/img_banner3.png": "a4e5ce2442a0f31ca97a0288c2b1cd89",
"assets/images/home/3.0x/img_banner2.png": "1ea89af51936e1b74a69fdaa85fc66b7",
"assets/images/home/3.0x/img_create_account.png": "f16bf3f32517f1486bf0abba6e606623",
"assets/images/home/3.0x/img_quantize.png": "a57802e34c9530dbc54d5eadf508dd0b",
"assets/images/home/3.0x/img_notice.png": "9c58959f657888bf16e864c43d5117a4",
"assets/images/home/3.0x/img_api.png": "13bb934848f07ea2d2a6217b5cfa8a44",
"assets/images/home/3.0x/img_more.png": "5a9355367534cf142a893dc551a24bd5",
"assets/images/home/3.0x/img_top3.png": "cb61bd664db94ff22cb5783dcdefaabe",
"assets/images/home/3.0x/img_top2.png": "28bf6d769859c335d5ec58baa2e297f1",
"assets/images/home/3.0x/img_help.png": "43207f41810a119ed48a723efb29a0ac",
"assets/images/home/3.0x/img_top1.png": "4e188e73684fbf43a511b3f055d3852c",
"assets/images/home/img_notice.png": "56e918a14f91b7d10847250b75d40d9c",
"assets/images/home/img_api.png": "9ea4a47b2ffa5794289abeece361a97e",
"assets/images/home/img_more.png": "bfa0f1cf0356e0e60d45ec9d4349ae8d",
"assets/images/home/img_top3.png": "47b2a7ab6d8910fd3a267348c2d1895e",
"assets/images/home/img_top2.png": "1fd30b27f3a8d7f8bb66bd05fc10c8b2",
"assets/images/home/img_help.png": "39023ed35603c8137dbcc239334d62c0",
"assets/images/home/img_top1.png": "49639392cceffb88b9b87afa690c949b",
"assets/images/splash/splash.png": "fc2b208b7ea25dc039a3da01c3d30102",
"assets/images/common/btn_down.png": "e5d71fc708bf1d1c1356266266e722da",
"assets/images/common/img_binance.png": "d2b70ffa0531089e4db6511500014e30",
"assets/images/common/btn_add.png": "f3b423a38b76713e495606bfda55e8a5",
"assets/images/common/img_svip.png": "7a2eb14979bf45bf6457aade1ddbe7d7",
"assets/images/common/coin_usdt.png": "d24d2207c8635bd2002c908957b0ad01",
"assets/images/common/2.0x/btn_down.png": "9737ab65f88a03fb46abf3d0b0e71dcb",
"assets/images/common/2.0x/img_binance.png": "dd1a55cc338d16ec05726f45335707f1",
"assets/images/common/2.0x/btn_add.png": "8737036f003003e55adbef2894a4b916",
"assets/images/common/2.0x/img_svip.png": "4812ce587b94b90914b44192660f3899",
"assets/images/common/2.0x/coin_usdt.png": "b98d541f13ecc52350ad00f73be06dfe",
"assets/images/common/2.0x/img_link.png": "ad8db090c235b5be331df11ea545e0a7",
"assets/images/common/2.0x/img_huobi.png": "67751edccd6ce8bc040e577dc966d4d9",
"assets/images/common/2.0x/img_icon.png": "6556354ff909eb5e8acce19ad0ce7314",
"assets/images/common/2.0x/img_coin.png": "ef8f868cee1f02dbe71046461d279ac0",
"assets/images/common/2.0x/img_exchange_huobi.png": "9d024b43c2e508dda061bd265f6d8edf",
"assets/images/common/2.0x/img_star.png": "6197356901e84d60de8855b43d8194ee",
"assets/images/common/2.0x/back.png": "954ee2ee888e2b729dff7ca19d5b91aa",
"assets/images/common/2.0x/btn_close.png": "f9f8713f72ceae959b6a6f486e77ea18",
"assets/images/common/2.0x/btn_right.png": "1a40dbf4518dac67f30ceabfb1490139",
"assets/images/common/img_link.png": "4871316c3d29fc00069dc5aee8ab62bb",
"assets/images/common/img_huobi.png": "0352ff1313b319d38c93595eb6bacc27",
"assets/images/common/3.0x/btn_down.png": "cf25676095ae205d229821d8441f95f3",
"assets/images/common/3.0x/img_binance.png": "9a0a742e7b9d8466a6b0a914ecf3957c",
"assets/images/common/3.0x/btn_add.png": "eded71b4e831189900147a3032b8065d",
"assets/images/common/3.0x/img_svip.png": "279235e73fde6d5faba5ac08799fb37a",
"assets/images/common/3.0x/coin_usdt.png": "fce319572653db884b25063f65004aa5",
"assets/images/common/3.0x/img_link.png": "126b94dc3197110d997e1fb6b8113f37",
"assets/images/common/3.0x/img_huobi.png": "7635c6deeb46f4a412d475c85e597a2f",
"assets/images/common/3.0x/img_icon.png": "e45534bd3d9bee02d39a74da87455e92",
"assets/images/common/3.0x/img_coin.png": "035a33d67203d5c47c765056befac4cc",
"assets/images/common/3.0x/img_exchange_huobi.png": "f5eb45a73f95593960a050fde31037a2",
"assets/images/common/3.0x/img_star.png": "9d0150254d57a6d960768b4a19e24585",
"assets/images/common/3.0x/back.png": "bc0f54fef4043ffc01643600af993717",
"assets/images/common/3.0x/btn_close.png": "3de283b75714062ff604115f5ebb4b89",
"assets/images/common/3.0x/btn_right.png": "3fb2b6a8faf8d80b045a0024c306da7b",
"assets/images/common/img_icon.png": "a46f5f67bdde7527a8e62aa3db952f41",
"assets/images/common/img_coin.png": "b02d9b3f78114eddabb3d5259c38eabc",
"assets/images/common/img_exchange_huobi.png": "ed7eb072ec39bd0ff63d53c484a53017",
"assets/images/common/logo.png": "f2666968126d0d1871513d6fac970708",
"assets/images/common/img_star.png": "4e68aa54859665842e6bd5b7bb2462e8",
"assets/images/common/back.png": "af0c8de43cfd41e0f92cdb45eb5afaa9",
"assets/images/common/btn_close.png": "ed298c39d23b8bac013f3ff4f4916b39",
"assets/images/common/btn_right.png": "71b45c521b7291d980179231ab91fee4",
"assets/images/common/img_logo.png": "e027e7184892f002f6e28d8aea7360c6",
"assets/images/mine/btn_setting.png": "1789b8f811b2851e67661160cd4f3011",
"assets/images/mine/btn_en.png": "36739ed3be3ba99d1f77b432a4acfe3d",
"assets/images/mine/img_invite_bg.png": "ff901393097b9fe8f7ed7740c20db9d9",
"assets/images/mine/btn_swich_white.png": "ea580cf52555b20dbd005ec3a44413e8",
"assets/images/mine/img_gray.png": "8637989b69d2a68057e2cc60750d53f7",
"assets/images/mine/2.0x/btn_setting.png": "701d6c9638f432c6088fde5cdd089a82",
"assets/images/mine/2.0x/btn_en.png": "472b7fccb8582314e32b395772f84587",
"assets/images/mine/2.0x/img_invite_bg.png": "3563afea085ade11f1073ce954f73421",
"assets/images/mine/2.0x/img_gray.png": "fcc3e38412bdbac2f3cbcbe8da038f5b",
"assets/images/mine/2.0x/btn_invite.png": "3387fe5f4fa29eed9872330ef565529c",
"assets/images/mine/2.0x/btn_secure.png": "1e8d490123af925b3ffce7ed295711eb",
"assets/images/mine/2.0x/img_huobi.png": "774e535cc2177adaa45f5f776da65d5d",
"assets/images/mine/2.0x/img_usable_code_bg.png": "712c6376604824d83a894c116f120108",
"assets/images/mine/2.0x/btn_service.png": "e18b62991d9641d0741f9a8634b4195a",
"assets/images/mine/2.0x/btn_copy.png": "dd606837a9e29a093bfd163c3077ce8c",
"assets/images/mine/2.0x/img_useless_code_bg.png": "144ac65c24a74fd27c53f9ba5ba9d94f",
"assets/images/mine/2.0x/btn_help.png": "a9a14711745c2edfdcd0adc085240f8d",
"assets/images/mine/2.0x/btn_push.png": "78d469a995a556f6c378862808c3f1a9",
"assets/images/mine/2.0x/btn_api.png": "60f2eb7f73cf97fd0e48a6019ddfda96",
"assets/images/mine/2.0x/btn_cooperation.png": "a13264200cd3b56e88ded593664ec166",
"assets/images/mine/2.0x/btn_notice.png": "02423719a9dc5fafd5d670a81fab5c2a",
"assets/images/mine/btn_invite.png": "6801755ae0c442db9fd34743344ed05d",
"assets/images/mine/btn_swich_gold.png": "a529892185ede32489357cc9cfb3589b",
"assets/images/mine/btn_secure.png": "9df20d1b15bddf7ccbe5f21a3a37eebf",
"assets/images/mine/img_huobi.png": "2b7fd3064ebb328dc675d9b04014acb7",
"assets/images/mine/img_usable_code_bg.png": "ff4229177e53562b93306de7b835ef57",
"assets/images/mine/3.0x/btn_setting.png": "cf43a6f0b3a17973a31debb525d4620b",
"assets/images/mine/3.0x/btn_en.png": "058916b639c186829225d74b90da0794",
"assets/images/mine/3.0x/img_invite_bg.png": "c2c1711e9414a6cb96d805f3788dd160",
"assets/images/mine/3.0x/img_gray.png": "443862aca57570342665bc7da35bff51",
"assets/images/mine/3.0x/btn_invite.png": "88cb8e7cc78c2187dbd134444aa532b0",
"assets/images/mine/3.0x/btn_secure.png": "7ffcb90a96abf306d2b841f8081bb719",
"assets/images/mine/3.0x/img_huobi.png": "9a1e6e22fe4e26bde048127d7c400ca3",
"assets/images/mine/3.0x/img_usable_code_bg.png": "7d931c3bcca9400cdcdf1fe2564fea6d",
"assets/images/mine/3.0x/btn_service.png": "78831042e5ea4d38424997df3de9fe0d",
"assets/images/mine/3.0x/btn_copy.png": "a1aaf2a85e819646d3d98ad0b60a5356",
"assets/images/mine/3.0x/img_useless_code_bg.png": "f3f0562c32bfc20a5008310c95ccf1a0",
"assets/images/mine/3.0x/btn_help.png": "4e87265870cbc1ae0870e84ab03091af",
"assets/images/mine/3.0x/btn_push.png": "b3f432b071902843d755d540374eb381",
"assets/images/mine/3.0x/btn_api.png": "ed42f2f4b8cee9c3f44f3d85cf3fa830",
"assets/images/mine/3.0x/btn_cooperation.png": "80f3916d19ad78abfae0fdbd2228cb78",
"assets/images/mine/3.0x/btn_notice.png": "019ee7a690f0ece4905eabfbba9cbc6f",
"assets/images/mine/btn_swich_en.png": "52de7eec1671b0710c8cd890422a433d",
"assets/images/mine/btn_service.png": "25c8a5bc75faa795591490bdcf915fb4",
"assets/images/mine/btn_copy.png": "95df0865a2e67de0c0ae1c2c162e2826",
"assets/images/mine/img_useless_code_bg.png": "38357c1271f8efd4e6b8d165d9a1c683",
"assets/images/mine/btn_help.png": "c14997a5723b65b08d7fbf72e53fd475",
"assets/images/mine/btn_push.png": "a91a3cec61bcbfc2a01fe6f46afc5f7b",
"assets/images/mine/btn_api.png": "29dbfb366f2b6c6271f01a6814dd1ff8",
"assets/images/mine/btn_cooperation.png": "d984223afc9daab21925117b338d5cc2",
"assets/images/mine/btn_notice.png": "8b64d3c803aa245388dba779d8e148c3",
"assets/images/mine/btn_swich_zh.png": "9205e37d77d2855361cb32d7e382082e",
"assets/images/nav/2.0x/assets-nav-0.png": "c0bdad95355a49665d683908353ef14d",
"assets/images/nav/2.0x/assets-nav-1.png": "9650cc25f2a3014b2647d5a33cfe60ad",
"assets/images/nav/2.0x/home-nav-0.png": "db89a30a0d4471eaa30e119717dd4b68",
"assets/images/nav/2.0x/home-nav-1.png": "9975eac127b167956e6d10ef57ae8a93",
"assets/images/nav/2.0x/quantize-nav-0.png": "ec5f204a811a1e9eb3e0aa0f1e4727a4",
"assets/images/nav/2.0x/quantize-nav-1.png": "7489074b180b20251d2c7675b9475788",
"assets/images/nav/2.0x/mine-nav-0.png": "87ee9d8349800b4f5cba0466747b473b",
"assets/images/nav/2.0x/mine-nav-1.png": "3c1046dc9157c11e94b967a3c0e3cdea",
"assets/images/nav/3.0x/assets-nav-0.png": "2b232257581546f141732cb7494d251e",
"assets/images/nav/3.0x/assets-nav-1.png": "d1f6fedf5ca17f3cd343fbdc5ad84d43",
"assets/images/nav/3.0x/home-nav-0.png": "edb6e11118954ab9c6f1a939fbef342b",
"assets/images/nav/3.0x/home-nav-1.png": "a44c19f14a55a1795e1887e53ef05aff",
"assets/images/nav/3.0x/quantize-nav-0.png": "c8ab5f97925e39ed0f35db2035251105",
"assets/images/nav/3.0x/quantize-nav-1.png": "998df08dcbcbd555ad14605de9f55737",
"assets/images/nav/3.0x/mine-nav-0.png": "bc4f8976eb42546e3f920ee995728637",
"assets/images/nav/3.0x/mine-nav-1.png": "bd50b7115f12fea7d5f11618b42c48e1",
"assets/images/nav/assets-nav-0.png": "53c768fe96add55328c77038343aafef",
"assets/images/nav/assets-nav-1.png": "0ee60cafaeab4ffa195d53b3fdf71480",
"assets/images/nav/home-nav-0.png": "5a142c499b18ac8f1201face841ceed0",
"assets/images/nav/home-nav-1.png": "0d89621ec45b1106e32742aeaec4edc7",
"assets/images/nav/quantize-nav-0.png": "3acce0373388c4f2bd472f266feab9b3",
"assets/images/nav/quantize-nav-1.png": "ba8ec39dbe02193435664a261fc29cdc",
"assets/images/nav/mine-nav-0.png": "acd44a4deacba99ea3258a96290dec21",
"assets/images/nav/mine-nav-1.png": "39dffcc2c3a3eb6224d14ffa3cfb0a0f",
"assets/images/assets/btn_usable_score.png": "bc4547a580cfd14b159c3cf5b7c9587a",
"assets/images/assets/btn_withdraw.png": "77be84feec7728fed899d457b0c1af9a",
"assets/images/assets/btn_selected.png": "44accce3e1e9fef5f0faea00184b10f1",
"assets/images/assets/btn_record.png": "be1bddb01c1e1ab8b9317f9fdd0c8e31",
"assets/images/assets/2.0x/btn_usable_score.png": "3f28d9380e534bb2b87dc079411078ed",
"assets/images/assets/2.0x/btn_withdraw.png": "21f06e7df32d0361cd6467ce09ecd2c7",
"assets/images/assets/2.0x/btn_selected.png": "4b2672602c7c25dc1b73cfbea24a9996",
"assets/images/assets/2.0x/btn_record.png": "4f531733d566ba599691d2b590fa2406",
"assets/images/assets/2.0x/btn_recharge.png": "9eafa6a2f6f56c1d1cdaefe061464d60",
"assets/images/assets/2.0x/btn_eye_open.png": "a51f0f3e59757503765bb750c2ef307b",
"assets/images/assets/2.0x/img_transform.png": "f09b5a62801d24b4924eb0d1b6126214",
"assets/images/assets/2.0x/btn_scan.png": "ca878cab184b6e461ee72b4f44b8b11c",
"assets/images/assets/2.0x/btn_eye_close.png": "f5b3a44fef4707a0dbcf8e59214500eb",
"assets/images/assets/2.0x/btn_transform.png": "fa105dd52d8f72cadea6261041dfa020",
"assets/images/assets/btn_recharge.png": "a3db4bb38b63c0abfec5090370887723",
"assets/images/assets/3.0x/btn_usable_score.png": "9701bbf4cedb7e21d512af1d35e37918",
"assets/images/assets/3.0x/btn_withdraw.png": "4e3841fe38238a8bcce9269c0bd65ca7",
"assets/images/assets/3.0x/btn_selected.png": "611d5c3497da190a04ca170ef2b51a2a",
"assets/images/assets/3.0x/btn_record.png": "cf7c9bdf00de1772aeba4709874f2224",
"assets/images/assets/3.0x/btn_recharge.png": "bf872a624f11bf8fe8c24671fc475b79",
"assets/images/assets/3.0x/btn_eye_open.png": "46c35b621cae2a30a8dfad9cba4fc09b",
"assets/images/assets/3.0x/img_transform.png": "444ec3cc7ba263107268a4eb9914cbff",
"assets/images/assets/3.0x/btn_scan.png": "57bb41f926dcddbbee0e562faf715f44",
"assets/images/assets/3.0x/btn_eye_close.png": "4106eab63fa584652215ca9893e10a47",
"assets/images/assets/3.0x/btn_transform.png": "779dccabaa61064f97c13cbdaf868055",
"assets/images/assets/btn_eye_open.png": "a81a4a0b55b53291a89b7bd85d25f8ac",
"assets/images/assets/img_transform.png": "21a0abccf0261e34114cb3cd3d866139",
"assets/images/assets/btn_scan.png": "3212f46bbe704abfb9ccf955cdd1d340",
"assets/images/assets/btn_eye_close.png": "602a13a11a37139386c45109b91b5e2b",
"assets/images/assets/btn_transform.png": "6d9a954da891977dc89c79827856d35b",
"assets/images/help/help3.png": "b1f59c457f76b7f9c33cba6a8de6d76f",
"assets/images/help/help2.png": "77b6b392b51ce733b673d2aaffd024d1",
"assets/images/help/help1.png": "b566d1d8f4db9c69608aa6e59d71395c",
"assets/images/help/help5.png": "56dedc9587097050640750b61325895c",
"assets/images/help/help4.png": "40064b77b5adae704eea5b1e12d3abe0",
"assets/images/help/help6.png": "6c941f67e8e33ed2810c5252243b682d",
"assets/AssetManifest.json": "f8c1cc3dd82883c797e38dbac029d260",
"assets/NOTICES": "8a9cc33c2cae9250f2b44e36fd605534",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
