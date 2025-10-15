'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "209af09f41d2d49cbec960ee4a708b4f",
"version.json": "1530555deccbfe01002c0ff87c7fdc7f",
"index.html": "5738a700fc1b8e92521644d3876999e6",
"/": "5738a700fc1b8e92521644d3876999e6",
"main.dart.js": "318686986e86c58380e2d0750be82857",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "80929236de9dba20be2e07d535a56add",
"assets/AssetManifest.json": "41d092e01a9475a09a24e826d8257687",
"assets/NOTICES": "771af052c5d1854ccd969846858d87a2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "e707775bb0efb847d15616a6426805d0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4e9c9ad7e5ccc99406ffa00d939995b6",
"assets/fonts/MaterialIcons-Regular.otf": "c29ff661825f36985482a774ee2cb1e4",
"assets/assets/vo/uk/narrator/mg12_positive_road_prettier.wav": "ba09c88e3016f3b0aa85298cfc70b607",
"assets/assets/vo/uk/narrator/mg00_confirm_choice.wav": "80cac889df3c1ff5f342018767b3b5d6",
"assets/assets/vo/uk/narrator/mg14_error_not_here.wav": "94424431def0074866662b38c5cc48dc",
"assets/assets/vo/uk/narrator/mg21_positive_carriage_returned.wav": "c0f835b18357a71fb061bb5dafbb82a5",
"assets/assets/vo/uk/narrator/vo_positive_pravylno.wav": "6f537b11cb9c92964e26cfccb1194efe",
"assets/assets/vo/uk/narrator/mg07_success_cups_ready.wav": "0bb5497f34b916e1f95c04e5f067e738",
"assets/assets/vo/uk/narrator/mg24_error_check_number.wav": "d9baa417686315b5a216adfad4fca73e",
"assets/assets/vo/uk/narrator/vo_positive_tak.wav": "7e56604fca4300bc6d502ef75f3ab654",
"assets/assets/vo/uk/narrator/mg22_instruction_memory_cards.wav": "053aa396d05a23a3ca62c81ddf2a15cc",
"assets/assets/vo/uk/narrator/vo_positive_prekrasno.wav": "7f757f1cc0ea65f1d3d2956d8c179191",
"assets/assets/vo/uk/narrator/mg16_error_look_at_shadow.wav": "d2038368aad20a2c8f439189a5554fe9",
"assets/assets/vo/uk/narrator/mg00_princess_intro_zlata.wav": "bb886990b56131f055a68c0c545a533d",
"assets/assets/vo/uk/narrator/mg08_error_ne_syudy_try_again.wav": "9c80fbdd5390831c1c058088d8e80f1b",
"assets/assets/vo/uk/narrator/mg16_princess_milana_reaction.wav": "fa553161ec242fcdd12aae46a8a95774",
"assets/assets/vo/uk/narrator/mg02_error_ne_syudy.wav": "1187b352589a10f6112952c4cebfb35c",
"assets/assets/vo/uk/narrator/mg21_success_scene_alive.wav": "eb38e50aaa5c710ff89225749b46fe7a",
"assets/assets/vo/uk/narrator/mg00_princess_intro_solomiya.wav": "bb14c8d452ed48c132c4162d64fb260c",
"assets/assets/vo/uk/narrator/intro_story_zlata.wav": "c3145a49f1dc060c1c95f5457f2a59c6",
"assets/assets/vo/uk/narrator/mg09_success_cupcakes_ready.wav": "d247d575b1fe943c7cd41296943a4de2",
"assets/assets/vo/uk/narrator/mg04_instruction_match_gifts.wav": "52614e423ee04a02f46ccd607c2f5a3b",
"assets/assets/vo/uk/narrator/mg25_error_wrong_letter.wav": "5ef1655118580175f8882b16378685dc",
"assets/assets/vo/uk/narrator/mg19_error_wrong_path.wav": "5d351401da9a5187685fe5312ce6bb5b",
"assets/assets/vo/uk/narrator/mg19_success_castle_found.wav": "483a4669dcf8e045ed8160625cff702f",
"assets/assets/vo/uk/narrator/mg21_instruction_shadow_matching.wav": "99d464446e6b0715534232d6a5c4ab0c",
"assets/assets/vo/uk/narrator/mg22_error_not_these.wav": "fd35bf153836de9cdc66cd1390c2a009",
"assets/assets/vo/uk/narrator/mg00_instruction_select_princess.wav": "503a18116098bb7a9b417e83a725ae33",
"assets/assets/vo/uk/narrator/vo_positive_taki_same.wav": "b58ede6004130eb18b9ddfcddadbf11e",
"assets/assets/vo/uk/narrator/mg01_error_ne_tut.wav": "72309f70c0a60c844261990632a41526",
"assets/assets/vo/uk/narrator/mg09_error_not_this_one.wav": "233bb28faa434802e089aa1870d43940",
"assets/assets/vo/uk/narrator/mg02_instruction_dress_princess.wav": "129d50367b62a45caeb5e0c14a42339a",
"assets/assets/vo/uk/narrator/mg18_success_four_ice_creams.wav": "41b56cdd7a251c761f8b2f2d6012e86a",
"assets/assets/vo/uk/narrator/mg13_error_try_again_careful.wav": "5ebba63265d89f0e850f134fde6c3b06",
"assets/assets/vo/uk/narrator/mg00_princess_intro_milana.wav": "7054e2f250ca65adc397f7b99b3eabe1",
"assets/assets/vo/uk/narrator/mg23_success_all_sorted.wav": "e763b79adefd019f24c60d480e4cddd7",
"assets/assets/vo/uk/narrator/mg01_instruction_decorate_castle.wav": "4ab0d75db19045525e6ff0282f69ed3e",
"assets/assets/vo/uk/narrator/mg02_success_princess_ready.wav": "3dbcce921f02881229dc272639fc9757",
"assets/assets/vo/uk/narrator/vo_positive_ye.wav": "3a9b3f3b062879863c84e8b398e77a3f",
"assets/assets/vo/uk/narrator/mg11_success_all_gifts_found.wav": "c22d3a7a37bc5a071d4184c598f33d93",
"assets/assets/vo/uk/narrator/vo_positive_pair_found.wav": "29c40fc628b6aa423e749c43e27a5311",
"assets/assets/vo/uk/narrator/intro_closing_ready.wav": "f520e69809b007c0f2a8e1309e7ccf24",
"assets/assets/vo/uk/narrator/mg15_success_five_princesses.wav": "4df1e028c9b0328024fa8e8b73e04a2b",
"assets/assets/vo/uk/narrator/mg06_error_poklady_na_tort.wav": "2d9eafdabbf55d808ec973b7d82f13a3",
"assets/assets/vo/uk/narrator/mg01_positive_tak_pidhodyt.wav": "ae0e0189b028b24b618f2106e5af93d3",
"assets/assets/vo/uk/narrator/mg16_princess_zlata_reaction.wav": "45728c9de57fc8b1346daaeb593b5914",
"assets/assets/vo/uk/narrator/mg16_positive_this_gift.wav": "71b6989f496aa6083e3e62051ab6f537",
"assets/assets/vo/uk/narrator/mg17_instruction_find_different.wav": "fb77dc28110c4456f8763c1623c06a40",
"assets/assets/vo/uk/narrator/mg03_success_princess_ready.wav": "fd1cffc71eceb3b3a016cb2fc2e416fd",
"assets/assets/vo/uk/narrator/mg17_positive_this_is_different.wav": "c1255d3286233a0d505756496bf1b771",
"assets/assets/vo/uk/narrator/mg10_instruction_letter_fruit.wav": "72f5693370391a7d6b2a3d8aeec58a5f",
"assets/assets/vo/uk/narrator/vo_positive_smachno.wav": "4a36fdfdc2e1725d21486eca23771b5c",
"assets/assets/vo/uk/narrator/mg14_success_carriage_ready.wav": "3b2ec9ebe9f2f402f0f5bcc9391a7af6",
"assets/assets/vo/uk/narrator/mg21_positive_princess_place.wav": "f453be33c846ed5badd6c11c163fdaf2",
"assets/assets/vo/uk/narrator/mg08_success_table_ready.wav": "84a48070a3018b4d86bc2feb3a991368",
"assets/assets/vo/uk/narrator/vo_positive_para.wav": "116b3a073e04e1c7713839cef9ddf486",
"assets/assets/vo/uk/narrator/mg12_positive_fits.wav": "4bcddd5b156f70de96d04db2d74bc51c",
"assets/assets/vo/uk/narrator/mg15_error_try_count_carefully.wav": "57ca00e7d678a34054b1268ca9382ee4",
"assets/assets/vo/uk/narrator/mg13_hint_this_way.wav": "6702d59210e47e0af924e9d385c652ee",
"assets/assets/vo/uk/narrator/mg13_success_all_arrived.wav": "2cf60598f78cdfe77d488f45bffdbc10",
"assets/assets/vo/uk/narrator/mg05_error_ne_syudy_inakshe.wav": "0b7ea9cde1f72b7d6be6099f16d65448",
"assets/assets/vo/uk/narrator/vo_positive_krasivo.wav": "d024b58879254c7000b7435dc2ff2753",
"assets/assets/vo/uk/narrator/mg22_success_all_pairs.wav": "0aa9a67cee69e9d7f7e9e3e31e1c54c0",
"assets/assets/vo/uk/narrator/mg05_instruction_party_table.wav": "a0ed098752afa14ff6e5294c5a801734",
"assets/assets/vo/uk/narrator/mg25_instruction_word_balloons.wav": "4d7f3c483b3529a754d0e56dd8fadece",
"assets/assets/vo/uk/narrator/mg24_instruction_color_balloons.wav": "110f6b93d781054af128339998ec63d4",
"assets/assets/vo/uk/narrator/mg16_success_all_gifts_given.wav": "3046bd35eee1302aaf241de24fa5aa9f",
"assets/assets/vo/uk/narrator/mg16_princess_diana_reaction.wav": "367aff3dde107502bff672057dd40e93",
"assets/assets/vo/uk/narrator/vo_positive_smachna_para.wav": "24626b9fc15a3718f1a39525ca5d55a9",
"assets/assets/vo/uk/narrator/mg01_success_castle_ready.wav": "d6a3ee7493aa8798081bd517ae7e2e90",
"assets/assets/vo/uk/narrator/mg24_success_room_shining.wav": "f4c664a7a3488884baba06e8e65a9bd7",
"assets/assets/vo/uk/narrator/intro_story_milana.wav": "21a86f477ed6c71077f81313cec3f8bc",
"assets/assets/vo/uk/narrator/mg14_instruction_carriage_puzzle.wav": "7bcfc02a0426f834a2ced50d190de5fd",
"assets/assets/vo/uk/narrator/mg11_error_keep_looking.wav": "ffff5ec6d8bd0566d0876e895a656006",
"assets/assets/vo/uk/narrator/mg07_instruction_cups_saucers.wav": "67ed8be4a721d16a3a138ec0fd6f18e5",
"assets/assets/vo/uk/narrator/mg13_instruction_guide_carriages.wav": "914973c6c2099b8b6534b148d334936f",
"assets/assets/vo/uk/narrator/vo_positive_smachno_vyhlyadaie.wav": "5e03f9ef6c4524fc72eeaf0e76bc81e2",
"assets/assets/vo/uk/narrator/vo_positive_ce_para.wav": "23dfc26b378d382717b308a6752b07b7",
"assets/assets/vo/uk/narrator/vo_positive_sche_trishky.wav": "436bcd8a2aae0b51c342c6df2151f1e6",
"assets/assets/vo/uk/narrator/mg19_instruction_labyrinth.wav": "3786c78ca41060214cbbea7b22e042d1",
"assets/assets/vo/uk/narrator/mg18_success_one_castle.wav": "7d2422b9e3d8c961a7b34ece18b7ba84",
"assets/assets/vo/uk/narrator/mg03_instruction_decorate_princess.wav": "89f74932e1db57aed634050ab840983e",
"assets/assets/vo/uk/narrator/vo_positive_pravylno_letter.wav": "3520cc28332551bb5a3add321ad38f54",
"assets/assets/vo/uk/narrator/mg11_instruction_hidden_objects.wav": "17025021c33d2263941f584d364f4614",
"assets/assets/vo/uk/narrator/mg12_success_road_ready.wav": "bb4d5e72052ed7cd47dd85a2176ad20b",
"assets/assets/vo/uk/narrator/final_success_celebration.wav": "4d873aee704bd1fae11f47f2881d8a97",
"assets/assets/vo/uk/narrator/mg04_error_ne_ta_korobochka.wav": "2c5041651067c0c99c759f89985ae7f6",
"assets/assets/vo/uk/narrator/mg25_success_word_complete.wav": "f244944b5cdba7134e23c06976c1fe35",
"assets/assets/vo/uk/narrator/vo_positive_teper_syae.wav": "3c5ca1a304683d1e15040ca607cfc1d7",
"assets/assets/vo/uk/narrator/mg21_positive_gift_with_friend.wav": "f73eda93aba851f4df74d76f2d91d16c",
"assets/assets/vo/uk/narrator/mg05_success_table_ready.wav": "8680487a02076eeb9bdf2b1b0cf3a668",
"assets/assets/vo/uk/narrator/mg07_error_ne_ta_para.wav": "1e3e519aa988dd6cabe4fa82809ac0d8",
"assets/assets/vo/uk/narrator/mg10_error_try_again.wav": "4d722d66326c169554bcb0e64b5696f6",
"assets/assets/vo/uk/narrator/intro_story_solomiya.wav": "80211bcecb8059a0b3f61a0b858e0f86",
"assets/assets/vo/uk/narrator/final_narration_opening.wav": "f054ac35389877122b0ea95c67d81281",
"assets/assets/vo/uk/narrator/mg18_success_counted_correctly.wav": "76bad4cb4bd3587eee4d4a444f02e990",
"assets/assets/vo/uk/narrator/vo_positive_yaka_krasa.wav": "1810131e541b4ec5093216fcf7868924",
"assets/assets/vo/uk/narrator/mg06_success_cake_masterpiece.wav": "e1d1a3df636b23cc10cffbf823865536",
"assets/assets/vo/uk/narrator/mg21_error_not_here_try_again.wav": "a471b261f541f846d1e10032496c5566",
"assets/assets/vo/uk/narrator/mg15_instruction_count_princesses.wav": "41dc59ea55c6cc29c3a49344d6170b23",
"assets/assets/vo/uk/narrator/mg10_success_all_letters.wav": "443c8f24e671d95e0df005dd85b6b910",
"assets/assets/vo/uk/narrator/vo_positive_chudovo.wav": "dab7c7bd8def927a10c48467e9c79206",
"assets/assets/vo/uk/narrator/mg08_instruction_sort_desserts.wav": "e4244971f66e0b0886ecd115022c3f1b",
"assets/assets/vo/uk/narrator/mg23_error_wrong_size.wav": "6f382238786cfe0a46561c228fd82dfb",
"assets/assets/vo/uk/narrator/mg17_success_all_differences.wav": "86a7e8636b490433998eb04fde170e28",
"assets/assets/vo/uk/narrator/mg19_positive_this_way.wav": "1be7a9dad3f90ce4af2d652943417996",
"assets/assets/vo/uk/narrator/mg21_positive_unicorn_placed.wav": "aaaf26449f2bfc6000bad602c408ccd0",
"assets/assets/vo/uk/narrator/mg21_positive_star_shining.wav": "4dd67723c0738e9ffe13c9ca17b8ac34",
"assets/assets/vo/uk/narrator/mg15_success_counted_all.wav": "47ca35d2bd13be2335182be1956711b9",
"assets/assets/vo/uk/narrator/mg17_error_look_closer.wav": "20a6b8db10867b1e7d839debf0397080",
"assets/assets/vo/uk/narrator/mg12_instruction_decorate_road.wav": "9a9e4c03cc58f03b38a104b52583f9f6",
"assets/assets/vo/uk/narrator/mg04_success_gifts_ready.wav": "767d1d3d99b5e128a126b15621c3c591",
"assets/assets/vo/uk/narrator/mg18_instruction_count_and_choose.wav": "49d65bfbb1e5badb193d0fdabc101d37",
"assets/assets/vo/uk/narrator/mg16_instruction_match_silhouettes.wav": "8461e9f222115522eafe577e3f6a99b1",
"assets/assets/vo/uk/narrator/mg18_success_three_unicorns.wav": "1fc7ed856fbec79f201971e599e4995c",
"assets/assets/vo/uk/narrator/mg13_positive_carriage_arrived.wav": "cabc2fd024d88035418317fe83ee5c5c",
"assets/assets/vo/uk/narrator/mg23_instruction_sort_by_size.wav": "4e1a5d62e48240b53a0b5737fa0f3918",
"assets/assets/vo/uk/narrator/mg23_positive_this_box_here.wav": "6cc7b85c36e4885b7a81e7ca080b9991",
"assets/assets/vo/uk/narrator/mg16_princess_liliya_reaction.wav": "da7489f2d9b1a999d98040bfc434418f",
"assets/assets/vo/uk/narrator/mg18_error_count_carefully.wav": "af9d2e5fb733fe0b7887e6363d321322",
"assets/assets/vo/uk/narrator/mg09_instruction_cupcake_pairs.wav": "06487400c9edc7d753ed8654c72513b6",
"assets/assets/vo/uk/narrator/mg18_success_two_rainbows.wav": "837294f77057786e4808fbbca7466939",
"assets/assets/vo/uk/narrator/vo_positive_garno.wav": "dff2ef5155ec7ba6ce0dbca06ba96633",
"assets/assets/vo/uk/narrator/mg06_instruction_cake_puzzle.wav": "5ad8c899bb65d5871b6e3204684ad384",
"assets/assets/images/background/backgroundGardenPastel.png": "6479a89e3943783fd1d8a960129efae2",
"assets/assets/images/background/backgroundBakery.png": "360a1d1ec95617134c0c8af81cd22f32",
"assets/assets/images/background/backgroundGardenLabyrinth.png": "ee06c871ab3dcdfde5a000d0e5d2c3f9",
"assets/assets/images/background/backgroundCastleFacade.png": "caec5e31284e47a2df140a0b481b30c6",
"assets/assets/images/background/backgroundBallroom.png": "9df6c9bf67c8d111b5112a44c2b7bb1f",
"assets/assets/images/background/backgroundIntroGarden.png": "a44baf1c54f71ac8a96c4d34484f5e3f",
"assets/assets/images/background/backgroundParkMagical.png": "b38ae3d94a7a1b4fb37ca453abb33c1f",
"assets/assets/images/background/backgroundCastleNight.png": "ece757a5258cd16986eba847833dcc0b",
"assets/assets/images/background/backgroundPrincessSelection.png": "9e0da170bd6935146eafd875375eeac9",
"assets/assets/images/background/backgroundDressingRoom.png": "ef9ada1e9dc158a9a421caafb21c0798",
"assets/assets/images/background/backgroundKitchenTable.png": "5d88752f6bf9ff13d67c201700f525cb",
"assets/assets/images/background/backgroundLibrary.png": "dd5c62cd1b747e91ad1b3c6bfafc88b3",
"assets/assets/images/background/backgroundGardenPath.png": "34f7f28840c9be2dcfab537852d68f3e",
"assets/assets/images/background/backgroundHome.png": "609a88a4c4b9693b951eefcf2dc5a82d",
"assets/assets/images/background/backgroundPrincessRoom.png": "80a28e00f3c7033c45321f82a6f4b786",
"assets/assets/images/background/backgroundParentHub.png": "9d2bd2148d2be0adff699b532bf28519",
"assets/assets/images/background/backgroundTableFestive.png": "51908568f529e47a6243b72d21ed4249",
"assets/assets/images/background/backgroundSplash.png": "752f669217f6d1de4e5ced72fa66da9f",
"assets/assets/images/baskets/basketDesserts.png": "12a9c59a95d07911676af88b0806d102",
"assets/assets/images/baskets/basketFruits.png": "1a86a6df0ecb1a33446c8a4d5d63554a",
"assets/assets/images/branding/logoMainTitle.png": "f7477a9ebec2f92fbdef0d4c0babe2f1",
"assets/assets/images/branding/logoSubtitle.png": "b593fa2356b758f817234af28465ab45",
"assets/assets/images/stickers/stickerWand.png": "125c18185732b40ed04f56418bc6c9d5",
"assets/assets/images/stickers/stickerCrown.png": "ef23a6e0a09422eb4b7d8f6c2c8fb3c0",
"assets/assets/images/stickers/stickerDress.png": "5f8c4b8103edac6d64c3d3e5550ab7fa",
"assets/assets/images/stickers/stickerCastle.png": "1ef0135c61e14864edaf0eb08f85fc97",
"assets/assets/images/stickers/stickerUnicorn.png": "8a8f7b3c3846ca55e9466c2e9706189a",
"assets/assets/images/final_celebration/fireworkStar.png": "83f01645ab968ffc71f0b9feb46c504d",
"assets/assets/images/final_celebration/fireworkCrown.png": "36c0db48bf736badbaf21b6cb4f1dd75",
"assets/assets/images/final_celebration/fireworkHeart.png": "6f63706db026eead512cb7377f0f9479",
"assets/assets/images/letters/letterH.png": "3dd5e8fbec8d30ee8467dab8f02204b5",
"assets/assets/images/letters/letterD.png": "5193ff33d8bf34ad820157aa0ad91972",
"assets/assets/images/letters/letterB.png": "e415f139d81a74786c4b6db5716f6e81",
"assets/assets/images/letters/letterV.png": "9e90fbcb1331cefec9d4840a39ab8f25",
"assets/assets/images/letters/letterA.png": "b8be9a17865904910df065e43bc68e9e",
"assets/assets/images/gift_boxes_sorting/giftBoxSmallYellow.png": "19efba96a47070b6ec84a552df42ec62",
"assets/assets/images/gift_boxes_sorting/giftBoxMediumPink.png": "9026a8511dce5708daf7895e9a4373d1",
"assets/assets/images/gift_boxes_sorting/giftBoxMediumBlue.png": "ce55199f3a63ca736de7338d9ea2284f",
"assets/assets/images/gift_boxes_sorting/giftBoxSmallGreen.png": "50101fc92dea7b7a7df550e26f44c54a",
"assets/assets/images/gift_boxes_sorting/giftBoxLargePurple.png": "5b8f8abab20d307fa04f4f8b8fa1ead4",
"assets/assets/images/gift_boxes_sorting/giftBoxLargeTurquoiseRed.png": "b133de0e81e2f38b644aa506d8a24dbb",
"assets/assets/images/gift_boxes_sorting/giftBoxSmallPinkWhite.png": "aa1f7696c8df5e3a414be257b5c21cd7",
"assets/assets/images/gift_boxes_sorting/giftBoxMediumLavenderGold.png": "d5150c027699377a821d82b3b9b0b8da",
"assets/assets/images/gift_boxes_sorting/giftBoxLargeOrange.png": "c65d90a391f1fd8f011670efad2b0ce9",
"assets/assets/images/food_sorting/foodSortingCupcake.png": "0cca56335fb7041ef6bc46d1c7b2bb2a",
"assets/assets/images/food_sorting/foodSortingCookie.png": "55b2e633c12aea98e3dfbab69fdf4c22",
"assets/assets/images/food_sorting/foodSortingPear.png": "9f9777c767da48aef3032bf84f6b9331",
"assets/assets/images/food_sorting/foodSortingBanana.png": "9b15a3d74acba37011657a2aa6e18656",
"assets/assets/images/food_sorting/foodSortingPastry.png": "96605388ab142fbd71f46a32530fa91e",
"assets/assets/images/food_sorting/foodSortingPineapple.png": "de73cfb38bddbc3a5b24ebb084fb2070",
"assets/assets/images/food_sorting/foodSortingGrapes.png": "a776eb6d5a791d57c40f0e26da083e82",
"assets/assets/images/food_sorting/foodSortingOrange.png": "ed77c45017f1529619743a9a17c5f996",
"assets/assets/images/food_sorting/foodSortingMelon.png": "5a79c3d36c9a0603a013a28158bbce0f",
"assets/assets/images/food_sorting/foodSortingMacaron.png": "2c681d09d7e23598fbc44de35bc369fb",
"assets/assets/images/food_sorting/foodSortingLollipop.png": "02e6905cbb9d711f6aa15ee6fa2497c0",
"assets/assets/images/food_sorting/foodSortingApple.png": "f10a62335ce3176736cb34ae295c59d8",
"assets/assets/images/character_main/characterUnicornSleeping.png": "1556e13c373d3a5dfe9539b3b5280116",
"assets/assets/images/character_main/characterUnicornIdle.png": "636eb84a7e285c07a68d2596baf0c919",
"assets/assets/images/character_selection/characterPrinceIdle.png": "41343beebece7a0ab0b9b543e708346f",
"assets/assets/images/character_selection/characterPrincessBaseDressSolomiya.png": "8c8948308f8a76494263786176173c7c",
"assets/assets/images/character_selection/characterSelectionZlataIdle.png": "d46e570998c0cb340b7c573e72c96ffd",
"assets/assets/images/character_selection/characterPrincessBaseDressZlata.png": "16cca6e29ec0d4071105c30ea24212ab",
"assets/assets/images/character_selection/characterSelectionSolomiyaIdle.png": "8e5e921be572e9f90c3441df04ab34cf",
"assets/assets/images/character_selection/characterPrincessLiliyaIdle.png": "d47639f0913fa1cf5a3d4ebc8fe6566c",
"assets/assets/images/character_selection/characterSelectionZlataCelebrate.png": "1d545c93c47396d619df441bc38beb5e",
"assets/assets/images/character_selection/characterSelectionMilanaCelebrate.png": "f33b68f11ed2c63252057549d6f5f6b7",
"assets/assets/images/character_selection/characterSelectionZlataWave03.png": "9cfe44937d107ef3910bff8726c4191c",
"assets/assets/images/character_selection/characterSelectionZlataWave02.png": "2c7061f244e81c6a757df378689dadc0",
"assets/assets/images/character_selection/characterSelectionZlataWave01.png": "e0b55fa46e798b889caf45e3a2b8eb58",
"assets/assets/images/character_selection/characterPrincessDianaIdle.png": "cdb44746aac0fba421ced1da4c00408a",
"assets/assets/images/character_selection/characterSelectionSolomiyaCelebrate.png": "37ebeb3ce46396699f88a7337af4acbf",
"assets/assets/images/character_selection/characterPrincessBaseDressMilana.png": "d4064f06a6f905942579e543f96b1ce0",
"assets/assets/images/character_selection/characterSelectionMilanaIdle.png": "4ec90f4ae470f13a5bd3f77e0173ff00",
"assets/assets/images/shelves/shelfGoldenMedium.png": "16b7b030ffd6eacf15b594ca92bb8682",
"assets/assets/images/shelves/shelfGoldenSmall.png": "cd5fdd8943bf5fff8016ec4c6caa5325",
"assets/assets/images/shelves/shelfGoldenLarge.png": "9466accd0859d7ba3a92182f6933d099",
"assets/assets/images/balloons_coloring/balloon5Outline.png": "a6272fe91f1129e77c31d58d115ea0ff",
"assets/assets/images/balloons_coloring/balloon4Green.png": "5c936c52b4bad15a0ded70a38d75a04d",
"assets/assets/images/balloons_coloring/balloon1Red.png": "ff3088a902816a4574c311d2678f8a54",
"assets/assets/images/balloons_coloring/balloon3Blue.png": "eda2a239dbfe83218832f61db6a2d802",
"assets/assets/images/balloons_coloring/balloon2Outline.png": "5aba6aa1acc0b0e75c4c25b060122aa3",
"assets/assets/images/balloons_coloring/balloon1Outline.png": "b497c8555f600d83a75cc553649632e5",
"assets/assets/images/balloons_coloring/balloon5Pink.png": "2539976edb37eea38f1475128fd7372c",
"assets/assets/images/balloons_coloring/balloon2Yellow.png": "f6a73aa72686d79e6b6832565e84e3b6",
"assets/assets/images/balloons_coloring/balloon4Outline.png": "ba585f1afc38019d2e9cfdaabe42427f",
"assets/assets/images/balloons_coloring/balloon6Purple.png": "862f840a08a3c91d02018e242d14c7c3",
"assets/assets/images/balloons_coloring/balloon3Outline.png": "35a0198067dd0da09e6c33f280d8cdeb",
"assets/assets/images/balloons_coloring/balloon6Outline.png": "25584d96c3eef3246e17bcfe4bac983e",
"assets/assets/images/particle_effect/particleConfetti.png": "310c6c8b3a4e32b6a834edbc24ede3e2",
"assets/assets/images/particle_effect/particlePetalWhite.png": "3e544f824210124ee190e6989fc055ef",
"assets/assets/images/particle_effect/particleFlowerPink.png": "e7d4ec12a0ba6fb43c0b2c4ad621003b",
"assets/assets/images/particle_effect/particleStarGreen.png": "f78eadef2779395d0332af060442d589",
"assets/assets/images/particle_effect/particleSparkleGold.png": "4c12e91ed40f4ed6a83392dd2589e78c",
"assets/assets/images/particle_effect/particleHeartRed.png": "f1ce5b741096d7037ef83f756797ddf2",
"assets/assets/images/shadow_matching/shadowGiftJar.png": "4e5497d5338b6a735ae2fe9c419420a2",
"assets/assets/images/shadow_matching/shadowPrincessFriend.png": "65a23af75166f2a44ad6c9a480868659",
"assets/assets/images/shadow_matching/shadowPrincessZlata.png": "296f3c03d7a1c7c85f9202a816cab0ca",
"assets/assets/images/shadow_matching/shadowStarLarge.png": "94044e9f6741a815bb0ae8611f8d89db",
"assets/assets/images/shadow_matching/shadowUnicorn.png": "8aba98a62f31a897c417b2f70969d2c8",
"assets/assets/images/balloons_letters/balloonLetterYa.png": "af243ae85becf87a8bad9ee88c840341",
"assets/assets/images/balloons_letters/balloonLetterS.png": "b5ff492b012450a0682c3caf27a10254",
"assets/assets/images/balloons_letters/balloonLetterT.png": "424aed18c28ae0829887bc0d92e66e90",
"assets/assets/images/balloons_letters/balloonLetterV.png": "8d258ae239b3fbcb63a02de19657d92d",
"assets/assets/images/balloons_letters/balloonLetterO.png": "9f5df88ac3caaa73c8f871d5008b60aa",
"assets/assets/images/jewelry/jewelryEarrings.png": "f5e0630f0eb228af378c0ecbda3ef859",
"assets/assets/images/jewelry/jewelryBowHair.png": "2ee75204c7222b230b47cfd74cb06cf6",
"assets/assets/images/jewelry/jewelryHeartRuby.png": "7c63ae9268341d3a6c66451e7258d92e",
"assets/assets/images/jewelry/jewelryRosePink.png": "5382ff21fe4c5a759e6cdd7b3e99267f",
"assets/assets/images/jewelry/jewelryNecklace.png": "8a1b40216c89fac7a7b877d1408bdeef",
"assets/assets/images/jewelry/jewelryFlowerSparkle.png": "6c20f1af392c5d43b4900e0b14dfe956",
"assets/assets/images/furniture/furnitureTableRound.png": "6db572be9f847ed54c926d99dc42740e",
"assets/assets/images/furniture/furnitureTableWithCakeStand.png": "67a562aab9a66d57486b45b5a2b0dde9",
"assets/assets/images/carriages_main/carriagePinkFlowers.png": "583a28f6cd1e80c9b419c98c4bd0007f",
"assets/assets/images/carriages_main/carriageBlueStars.png": "c560c1276c6adce3b0676ce559c993b5",
"assets/assets/images/carriages_main/carriageShadowForm.png": "09a18121b3c368deb84a4924f505563c",
"assets/assets/images/carriages_main/carriageAssembled.png": "a3109308cef71cafb657f409a32445e2",
"assets/assets/images/carriages_main/carriageGreenBows.png": "513f039f11157943f983acc63eedc60f",
"assets/assets/images/decorations/decorationBowSparkleLeft.png": "57e1e4180b15c15663c9de8968d5773e",
"assets/assets/images/decorations/decorationFlagsString.png": "95da3a526d7fcb818bf1fcef2ebd35fb",
"assets/assets/images/decorations/decorationLanternRight.png": "e9fbece74ba1cbad09cf7bd174213af1",
"assets/assets/images/decorations/decorationLanternLeft.png": "3c81a8f2ed0aaf320da8fb3115efd75c",
"assets/assets/images/decorations/decorationCastleFlagPurple.png": "a1aa2de095fcaf652709bf30ae5964c7",
"assets/assets/images/decorations/decorationVaseFlowers.png": "d72ae6b2386f6bd86bad78cdd26cd558",
"assets/assets/images/decorations/decorationBowSparkleRight.png": "622f148141125d4a61eb5d64123d870b",
"assets/assets/images/decorations/decorationCastleFlagGold.png": "2dc928a4ee22e38ec78059b1a90c083d",
"assets/assets/images/decorations/decorationWreath.png": "366af71bfc11642cd26a354d44729ba5",
"assets/assets/images/decorations/decorationFlowerPotRight.png": "00f162f6a4c05222ff2da3069c5dca47",
"assets/assets/images/decorations/decorationGarlandFloral.png": "06a9bf4bdfac386c9d71b40a6a875374",
"assets/assets/images/decorations/decorationCastleFlagPink.png": "ed0b4e895185f4ee422de3036ae73a8e",
"assets/assets/images/decorations/decorationCandlestick.png": "51e86be725b238abc21ba89a15ccfb06",
"assets/assets/images/decorations/decorationStreamersGold.png": "afbcab0c328ccd692cf249e39e5d621c",
"assets/assets/images/decorations/decorationBalloonsCluster.png": "4fa98bd8b4164997e08fa05827461b9c",
"assets/assets/images/decorations/decorationFlowerPotLeft.png": "8edc69d3983e06d8a69fdd94bcb324b4",
"assets/assets/images/cake_decorations/cakeDecorationHeartPurple.png": "0d9c5b99ae5351ed0a5926d8c6bfec10",
"assets/assets/images/cake_decorations/cakeDecorationStarGold.png": "63abed93ea4826deb0c33ab96d16b08d",
"assets/assets/images/cake_decorations/cakeDecorationHeartPink.png": "9c409dea11c13c69b5ff75f53d9af444",
"assets/assets/images/cake_decorations/cakeDecorationRosePink.png": "959f842f28af7e0999bc215305a0297d",
"assets/assets/images/cake_decorations/cakeDecorationStrawberry.png": "9a7687e45575d0d10198fd64c3612ce0",
"assets/assets/images/cake_decorations/cakeDecorationHeartRed.png": "7ec7b0560a293c0449a059f464fbfdda",
"assets/assets/images/cupcakes_matching/cupcakeStrawberry.png": "bd316026135e363a3168ef1571887fd4",
"assets/assets/images/cupcakes_matching/cupcakePearl.png": "4f85294284b956a4ce47326e3167274f",
"assets/assets/images/cupcakes_matching/cupcakeChocolate.png": "9d1c5348ac5156340fa181427119fba5",
"assets/assets/images/cupcakes_matching/cupcakeCherry.png": "3f06e39fa7a7560bbd57288b907e07ea",
"assets/assets/images/counting_objects/objectUnicornSmall.png": "3494b15fe79dc1d070a3129611d5b438",
"assets/assets/images/counting_objects/objectCastleSmall.png": "76adaf54db1058be08d6462f95951a78",
"assets/assets/images/counting_objects/objectStarLarge.png": "9c400a6b4ca6f2a3e8471932224e1d2d",
"assets/assets/images/counting_objects/objectRainbow.png": "61a1695331df416de38542eba6421b34",
"assets/assets/images/counting_objects/objectIceCream.png": "d30ef24c42a4511f1ffdf52681df574b",
"assets/assets/images/silhouettes/silhouetteGiftBook.png": "f10d9702a132a13c6f033ca41d39024e",
"assets/assets/images/silhouettes/silhouetteGiftPerfume.png": "270dbc7719e0c511b74c60f357f81ab6",
"assets/assets/images/silhouettes/silhouetteGiftCandyBox.png": "be290ad03a11041a7ee32db49ef3eaa1",
"assets/assets/images/silhouettes/silhouetteGiftJar.png": "5cbabfbcf7318e3bec1be48617efe739",
"assets/assets/images/silhouettes/silhouetteGiftJewelryBox.png": "18c68a01cc4ffb32bbe3c7df0a0ef995",
"assets/assets/images/spot_difference/strawberryNoTop.png": "ea9202df2de1716431c0193705457086",
"assets/assets/images/spot_difference/cloudPlain.png": "f0b5d2db6e13767137d3ce2bb0f8b3ee",
"assets/assets/images/spot_difference/cloudRainbow.png": "00e8b207fb7d0f0bbe5a435ecf6816f1",
"assets/assets/images/spot_difference/donutUnicornPlain.png": "6555f2c370b4f8434d4ce51678479139",
"assets/assets/images/spot_difference/donutUnicornHorn.png": "87c8efc22de25977f67a5e7cc94817fd",
"assets/assets/images/spot_difference/strawberryNormal.png": "fe255b215cc34216bc81d7a21dc26d6f",
"assets/assets/images/dress_pieces/dressSleeveLeftMilana.png": "0c3b6cfcc6a542663c3be35cd2db1669",
"assets/assets/images/dress_pieces/dressSleeveRightZlata.png": "9e89e73554510bb9c300f638f1bd2b67",
"assets/assets/images/dress_pieces/dressBeltZlata.png": "0c3e74fed52a179bce2fd6f8cb7335ab",
"assets/assets/images/dress_pieces/dressSleeveLeftZlata.png": "0108615cd45fd548f7e51dbeb2aea8ac",
"assets/assets/images/dress_pieces/dressAccentCenterMilana.png": "70bf620d0bdc7a8cdccf47cd855d5313",
"assets/assets/images/dress_pieces/dressCorsetTopMilana.png": "8cb79a3bfd6973d941a5727098c947a9",
"assets/assets/images/dress_pieces/dressCorsetTopZlata.png": "58148fa2813b217ea0996785893d0342",
"assets/assets/images/dress_pieces/dressSkirtLowerZlata.png": "5110d03f87292f14af924448264168d4",
"assets/assets/images/dress_pieces/dressSkirtUpperSolomiya.png": "7c1289aa72ebcf6bcc5cb977513e9c09",
"assets/assets/images/dress_pieces/dressSkirtLowerSolomiya.png": "6b5d1878eaa5e7b3a1f270d51b549581",
"assets/assets/images/dress_pieces/dressAccentCenterSolomiya.png": "50de9aea180c6795d3e9f1755d435157",
"assets/assets/images/dress_pieces/dressCorsetLowerMilana.png": "106d19712d32f922f8f065ff66af075a",
"assets/assets/images/dress_pieces/dressSleeveLeftSolomiya.png": "3dbcfed0d7230d03c019267f01882439",
"assets/assets/images/dress_pieces/dressSleeveRightSolomiya.png": "69e805127bb366b74c562f078478c81d",
"assets/assets/images/dress_pieces/dressBeltMilana.png": "a69e5819f42b9a97b1b37d1344bd5b72",
"assets/assets/images/dress_pieces/dressCorsetLowerZlata.png": "dfd98bc78fffc380b32c1b9ec4017e7f",
"assets/assets/images/dress_pieces/dressSkirtUpperMilana.png": "c3800b9fcd82341d923e6e0af20fb9bf",
"assets/assets/images/dress_pieces/dressSkirtUpperZlata.png": "2916a8c9c440b32c5f2aa6a58db4bca8",
"assets/assets/images/dress_pieces/dressBeltSolomiya.png": "f4def3fbd0a25c99829a6972eb982680",
"assets/assets/images/dress_pieces/dressCorsetLowerSolomiya.png": "836deca80d0758af6fb2dec68ce51614",
"assets/assets/images/dress_pieces/dressAccentCenterZlata.png": "1e56ef34877bd9c392eb31b079ebfb98",
"assets/assets/images/dress_pieces/dressSleeveRightMilana.png": "b649f3294f6f9aa413084a3679835074",
"assets/assets/images/dress_pieces/dressSkirtLowerMilana.png": "7cf6e38a8ea0ea9e298d367ccf3a090b",
"assets/assets/images/dress_pieces/dressCorsetTopSolomiya.png": "7a4c41219124b5a169325e6e98804542",
"assets/assets/images/gifts/giftBoxTurquoiseRibbon.png": "490ea82e0429bdb1c325c87b84a65a7a",
"assets/assets/images/gifts/giftBoxYellowHearts.png": "1301dcc9977fdb013b4b8fde1700fbca",
"assets/assets/images/gifts/giftBoxPinkGold.png": "5ddc4b15a9901cf8c7847d436ca50b28",
"assets/assets/images/gifts/giftBoxPurpleStars.png": "a2accf57a525c83b030fcadc6112a84e",
"assets/assets/images/food/foodCandyJar.png": "63ba541781abe98e4529fa0d34bb5a52",
"assets/assets/images/food/foodHotCocoaCup.png": "2d2ad2f0ce131ed7c121c98fed8e2ace",
"assets/assets/images/food/foodMacaronPlate.png": "4a0a155bf1c72f35a6d6483cb1569167",
"assets/assets/images/food/foodFruitPlatter.png": "86669022658e63b88391f9172bd03876",
"assets/assets/images/food/foodCupcakePlate.png": "4a297d147a1273375d1190abd9ec9384",
"assets/assets/images/food/foodCakeTiered.png": "6a878fb47d2ddd87773501e0d2384bb8",
"assets/assets/images/road_puzzle/roadTileRibbon.png": "be34864e44639b5d51b04ed43c85b3fd",
"assets/assets/images/road_puzzle/roadTileHeart.png": "df49b350d14366145b1bce88f0e23c7f",
"assets/assets/images/road_puzzle/roadTileFlower.png": "fb3402b3c30507c07702e6672a59869b",
"assets/assets/images/road_puzzle/roadTileLantern.png": "89533500cb0a6b28e0ed214ac6843526",
"assets/assets/images/road_puzzle/roadTileBow.png": "a83e9c188bfb8699366d39c343deb5df",
"assets/assets/images/road_puzzle/roadTileStar.png": "9b0a048034d5716e0524d644f7a151b7",
"assets/assets/images/carriage_puzzle/carriagePieceRoof.png": "bb5d77e0e734c174a8bd600a37e225dc",
"assets/assets/images/carriage_puzzle/carriagePieceDoor.png": "b028fa956fcd899c6dafc95938065fa4",
"assets/assets/images/carriage_puzzle/carriagePieceWindow.png": "a75024d2188850dedf7e136c3ff496c3",
"assets/assets/images/carriage_puzzle/carriagePieceLantern.png": "1dfff42f6b08484b86b0055accc30d8e",
"assets/assets/images/carriage_puzzle/carriagePieceWheel.png": "89c7c487b7cf39d92c9ea3d9270a2416",
"assets/assets/images/carriage_puzzle/carriagePieceOrnament.png": "b87fd601b47012df5dfcb9c33c4b2c0e",
"assets/assets/images/number_buttons/buttonNumber2Pearl.png": "efdc101198718ee07086b6d8f9f72a70",
"assets/assets/images/number_buttons/buttonNumber3Pearl.png": "fa6d7f1b4e092d7c529d9ddafaaa6c85",
"assets/assets/images/number_buttons/buttonNumber5Pearl.png": "980795ce17bfd245a0d9b34730d85539",
"assets/assets/images/number_buttons/buttonNumber4Pearl.png": "b7347697cce51f7eb8e60e5a451aa898",
"assets/assets/images/number_buttons/buttonNumber5Heart.png": "56023312eb546e76f9cc573701626447",
"assets/assets/images/number_buttons/buttonNumber4Heart.png": "4f2d2beb7975a107bcb8ac3740a20cc8",
"assets/assets/images/number_buttons/buttonNumber1Pearl.png": "828df90c5f7d906bb6e87179aada3c4d",
"assets/assets/images/number_buttons/buttonNumber6Heart.png": "c2dde548dc9416ee169f64c178298964",
"assets/assets/images/memory_cards/cardFaceDress.png": "7539ad68bfe66be5b527a2452eede1cb",
"assets/assets/images/memory_cards/cardFaceCake.png": "50b9b3cf9fc96d984f4408a48d18c8a9",
"assets/assets/images/memory_cards/cardFaceUnicorn.png": "ec6dd0f237d3b43c31d4747450b2cce0",
"assets/assets/images/memory_cards/cardBackGolden.png": "8becde00496995dd6c5f671abe819884",
"assets/assets/images/cake_tiers/cakeTierTopSmall.png": "450655ea113de80689858f10cb14520b",
"assets/assets/images/cake_tiers/cakeTierBottomLarge.png": "796e32f9932e7f1461fd186f405de683",
"assets/assets/images/cake_tiers/cakeTopperCreamSwirl.png": "dee2fbf98f4e44c075db44ccab96fb36",
"assets/assets/images/cake_tiers/cakeTierMiddleSmall.png": "c02b33aba5f0e2da95cb15b6145647ab",
"assets/assets/images/cake_tiers/cakeTierMiddleLarge.png": "1718f7ba9a66aaf326edf86d0c34e772",
"assets/assets/images/ui_element/progressBarDroplet.png": "41cb3816c4b5e59dd6aee0601d1c6ecd",
"assets/assets/images/ui_element/buttonPlayGemstone.png": "7b49a6d7e1f41ccf0dc9fc18641778d0",
"assets/assets/images/ui_element/buttonStickerAlbumBook.png": "72fb3b043e81a7d8d47fc44ebd17847c",
"assets/assets/images/ui_element/buttonNextGemstone.png": "9559b2c188bad4ca6028a99e554fb524",
"assets/assets/images/ui_element/ribbon.png": "c128a3dfb5be542399272d5c582d1834",
"assets/assets/images/ui_element/toggleAudio.png": "7091aa8ebf9506e45d03150d52230692",
"assets/assets/images/ui_element/uiStickerBook.png": "1782ec132d027d22f51668b432528a1c",
"assets/assets/images/ui_element/toggleLanguage.png": "37d6db8fb72383a55fb6b66d9ca7491c",
"assets/assets/images/ui_element/buttonHomeGemstone.png": "6d6e0161c933299fab893af0f07276b2",
"assets/assets/images/ui_element/iconEmail.png": "a43698e4b06d9db20df6d52e07fba481",
"assets/assets/images/ui_element/plateParentalGate.png": "f3db1ce5eb9c27bc62e7560122a5937a",
"assets/assets/images/ui_element/rightPanel.png": "11f1cccdfa73f8fb855813928d8c438c",
"assets/assets/images/ui_element/leftPanel.png": "aac516a50b325c2bb508f61c4b4f1158",
"assets/assets/images/ui_element/buttonUnlockFull.png": "3da61f597cf79c60de314f74ed08821c",
"assets/assets/images/ui_element/medalEducational.png": "2a6fe80759594c216b6f07408022bce1",
"assets/assets/images/ui_element/buttonSettingsGear.png": "0dc2397d6fd618531ffbde8044d9195f",
"assets/assets/images/saucers/saucerWaves.png": "c433794fcc2f0f31f25936cd20e6e3f9",
"assets/assets/images/saucers/saucerStars.png": "291ea97bead98ec6c0e4a822523ca695",
"assets/assets/images/saucers/saucerBows.png": "5da21bd0ecd0d894480e90047d60cfd1",
"assets/assets/images/saucers/saucerHearts.png": "9943e071870c982a05511a2900f9439a",
"assets/assets/images/saucers/saucerRoses.png": "6543dd040020eb1005727abaf0cd2626",
"assets/assets/images/saucers/saucerBranches.png": "898dab05c4b9b907ef9510189323d6f7",
"assets/assets/images/cups/cupBows.png": "ed894bbdbe2e779006266b8eddff7135",
"assets/assets/images/cups/cupStars.png": "9672312922cb0317ba62bb75fda7eaa9",
"assets/assets/images/cups/cupWaves.png": "4929f5f16fe59ed2869c0273ef92327e",
"assets/assets/images/cups/cupBranches.png": "b0042f30c53cd47b8566839a20defb6c",
"assets/assets/images/cups/cupHearts.png": "9786afb5f1ab8f72f21290f378dbaf48",
"assets/assets/images/cups/cupRoses.png": "31a0a2667e082f52ae9c393bcf108b3b",
"assets/assets/images/hidden_gifts/giftPerfumeYellow.png": "0bab46687a6e37a636490909c17f79dd",
"assets/assets/images/hidden_gifts/giftBookPurple.png": "3bdcdc248e216eb710a8468835a0ed83",
"assets/assets/images/hidden_gifts/giftBagPink.png": "35f7d18f8a7b1465e26f019efb89d6d3",
"assets/assets/images/hidden_gifts/giftJarHearts.png": "86406e3c983602a6e6f3ced64903082e",
"assets/assets/images/hidden_gifts/giftCandyBoxRed.png": "36f7f9d7c459bf3c34e11c05d30cb39f",
"assets/assets/images/hidden_gifts/giftJewelryBoxLavender.png": "cc3e04318061c8dd6996f796c4b1334d",
"assets/assets/natasha_style/background/backgroundCastleFacade.png": "ec8a3e7ec15d8f2c2af326d4907d47dc",
"assets/assets/natasha_style/background/backgroundIntroGarden.png": "7ad0406b7960c4b8693f59ee7ef6cb71",
"assets/assets/natasha_style/background/backgroundPrincessSelection.png": "6bf23ece67d8121c792c3895665a592a",
"assets/assets/natasha_style/background/backgroundHome.png": "51a91b97382e85741f846893a054c02a",
"assets/assets/natasha_style/background/backgroundParentHub.png": "1771aa70699c070d905d2e53f5230420",
"assets/assets/natasha_style/background/backgroundSplash.png": "bede198aa18edb2db805c755ca667c26",
"assets/assets/natasha_style/branding/logoMainTitle.png": "fe733b2d64f7a9e4919d98d5cab3766d",
"assets/assets/natasha_style/character_main/characterUnicornSleeping.png": "fdc2a5679058b901d45121460708f2e3",
"assets/assets/natasha_style/character_main/characterUnicornIdle.png": "2c48685f25f46374f95f7f2334e0f720",
"assets/assets/natasha_style/character_selection/characterPrincessBaseDressSolomiya.png": "bc1d04efedd8e4538e3007457fe6a6e4",
"assets/assets/natasha_style/character_selection/characterSelectionZlataIdle.png": "29367544bdece34eb66a2c2850ffd484",
"assets/assets/natasha_style/character_selection/characterPrincessBaseDressZlata.png": "56c4f83f4ec86ace3eff380454487bea",
"assets/assets/natasha_style/character_selection/characterSelectionSolomiyaIdle.png": "e0979b052da044a78b7863117d65aa33",
"assets/assets/natasha_style/character_selection/characterSelectionZlataCelebrate.png": "cbb4049107b005a8cdc6beb32ff5680a",
"assets/assets/natasha_style/character_selection/characterSelectionMilanaCelebrate.png": "c9144df406d21ad755149b147bf8be27",
"assets/assets/natasha_style/character_selection/characterSelectionSolomiyaCelebrate.png": "d8a14aa247b8e50ba561fa79ec093d91",
"assets/assets/natasha_style/character_selection/characterPrincessBaseDressMilana.png": "5a1ac51f0b7e6b0e595e6effa31def3e",
"assets/assets/natasha_style/character_selection/characterSelectionMilanaIdle.png": "e9b67f3d09d99221724a082d2f95c0a5",
"assets/assets/natasha_style/dress_pieces/dressSleeveLeftMilana.png": "09c046780cfae422ba74ab2088a98c30",
"assets/assets/natasha_style/dress_pieces/dressSleeveRightZlata.png": "b79153c187075389c6c6c188fe7a1301",
"assets/assets/natasha_style/dress_pieces/dressBeltZlata.png": "0a2886adab01e3b691ed5c4ad4ade6ee",
"assets/assets/natasha_style/dress_pieces/dressSleeveLeftZlata.png": "8bc610158c55ea4bfbf67ad47a048f42",
"assets/assets/natasha_style/dress_pieces/dressAccentCenterMilana.png": "97ca9e751e0efa464d0630bd6d86e4d7",
"assets/assets/natasha_style/dress_pieces/dressCorsetTopMilana.png": "415a96765eedaedd73038ab7d64d70bb",
"assets/assets/natasha_style/dress_pieces/dressCorsetTopZlata.png": "21e16c45b3035b4060e313466ef0abec",
"assets/assets/natasha_style/dress_pieces/dressSkirtLowerZlata.png": "634d19c7004d4e49e0b3e6adec5fd011",
"assets/assets/natasha_style/dress_pieces/dressSkirtUpperSolomiya.png": "3d7431615fb86a5af1350d1efa0f1009",
"assets/assets/natasha_style/dress_pieces/dressSkirtLowerSolomiya.png": "2a1547ae3b957962184941d5f8038235",
"assets/assets/natasha_style/dress_pieces/dressAccentCenterSolomiya.png": "15139e632b73b62ad142938ce62392b8",
"assets/assets/natasha_style/dress_pieces/dressCorsetLowerMilana.png": "ac886cef3ed4d8305d7d3203680aad0c",
"assets/assets/natasha_style/dress_pieces/dressSleeveLeftSolomiya.png": "ace92e25798b4c333b92f03ee829fdf8",
"assets/assets/natasha_style/dress_pieces/dressSleeveRightSolomiya.png": "56970492c8259d5ad2a5f6805a3c0310",
"assets/assets/natasha_style/dress_pieces/dressBeltMilana.png": "b62ff43c5caf21fc079eccf0fef475e6",
"assets/assets/natasha_style/dress_pieces/dressCorsetLowerZlata.png": "5af71144cbfc8ecbbe8cc60961fe1faf",
"assets/assets/natasha_style/dress_pieces/dressSkirtUpperMilana.png": "3735d85f834af15764ac2967d7365518",
"assets/assets/natasha_style/dress_pieces/dressSkirtUpperZlata.png": "0d5da10365bdcea9f56d9f3ddf754290",
"assets/assets/natasha_style/dress_pieces/dressBeltSolomiya.png": "1d154412f4102026ecc66e399dfbfe12",
"assets/assets/natasha_style/dress_pieces/dressCorsetLowerSolomiya.png": "3fff8be3f916a9a281ee5168d02be93f",
"assets/assets/natasha_style/dress_pieces/dressAccentCenterZlata.png": "c14f7d64089ae201ad4ee08f8fabd4d3",
"assets/assets/natasha_style/dress_pieces/dressSleeveRightMilana.png": "ddb8265addc9ce15a615d1aa82ee318f",
"assets/assets/natasha_style/dress_pieces/dressSkirtLowerMilana.png": "35fe35f4b2c7b9695795af634a992d70",
"assets/assets/natasha_style/dress_pieces/dressCorsetTopSolomiya.png": "7bf2f3fe532044096c23fc3ca39b5c88",
"assets/assets/natasha_style/ui_element/buttonPlayGemstone.png": "7d7da6fc87d5b5a2ee937d948e09c8a9",
"assets/assets/natasha_style/ui_element/buttonStickerAlbumBook.png": "79432ea27e4cae103d1e94027cc6127b",
"assets/assets/natasha_style/ui_element/buttonNextGemstone.png": "f0e6846d1c2af73a55fbbfce544fa3ed",
"assets/assets/natasha_style/ui_element/ribbon.png": "dacbc477c0e9d0ff23d92ab63a38880f",
"assets/assets/natasha_style/ui_element/buttonHomeGemstone.png": "411e97c9f86740dc62a5c106947b98f8",
"assets/assets/natasha_style/ui_element/plateParentalGate.png": "fbe2ca4b0425a224badd8ac7708f8bd1",
"assets/assets/natasha_style/ui_element/rightPanel.png": "da6101e15a4c72ab34663d79fccd0688",
"assets/assets/natasha_style/ui_element/leftPanel.png": "83ed3d48918e56b1cc301385dd9b0085",
"assets/assets/natasha_style/ui_element/medalEducational.png": "b8b795fad500abeda48cc0e8e908cce4",
"assets/assets/natasha_style/ui_element/buttonSettingsGear.png": "07f50ff761471864dc02e488a4e7b2f8",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
