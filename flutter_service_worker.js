'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2c35e5bb01deda022655e8d7ef506876",
"version.json": "1530555deccbfe01002c0ff87c7fdc7f",
"index.html": "5738a700fc1b8e92521644d3876999e6",
"/": "5738a700fc1b8e92521644d3876999e6",
"main.dart.js": "35f41ceaf2b6a4057600dc34d728de6c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "80929236de9dba20be2e07d535a56add",
"assets/AssetManifest.json": "5e5c989ae354e5b71c0960dd561fecfd",
"assets/NOTICES": "771af052c5d1854ccd969846858d87a2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "3ec30d995e85461c1943d9e65398dccb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fc1868749ac5845222f440ce1ef5d32a",
"assets/fonts/MaterialIcons-Regular.otf": "fff22d62eab09ee732da3ee04c0b5c15",
"assets/assets/music/MUS_TRANS_SOFT.wav": "85635213f56dddded8090f29d974ba2e",
"assets/assets/music/MUS_AMB_PARENT.wav": "a8c8c3a381e573dd1ba130d8532dc733",
"assets/assets/music/MUS_AMB_FINAL.wav": "c848fc7b322ce654b0b2b428e2bd5c04",
"assets/assets/music/MUS_CELEBR_PREP.wav": "73acdb5a680be78ec4a5159464740b3a",
"assets/assets/music/MUS_LOOP_CASTLE.wav": "106cf570b9a56946e3fe2aa704a6a87b",
"assets/assets/music/MUS_LOOP_CELEBR.wav": "c367c5f519defa0d1b2d4b8f7d43750f",
"assets/assets/music/MUS_SPLASH_STING_2S.wav": "b8707c0205f223e5b529aa025fa85c61",
"assets/assets/music/MUS_INTRO_MAIN.wav": "014cf0e8bebea2c25790514bb9e885a2",
"assets/assets/music/MUS_LOOP_WARM.wav": "a8c8c3a381e573dd1ba130d8532dc733",
"assets/assets/vo/uk/olesia/olesia_intro_greeting.wav": "ffd94152efcd3dca25189a41ec8316c2",
"assets/assets/vo/uk/zlata/zlata_intro_greeting.wav": "0514a406c5da4d87dd53bc87be32ec85",
"assets/assets/vo/uk/milana/milana_intro_greeting.wav": "822758e85a69447cc200f0852024cc81",
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
"assets/assets/vo/uk/narrator/mg02_error_poklady_prykrasu.wav": "5e6e03d26510c384b331cb85a77356a6",
"assets/assets/vo/uk/narrator/mg00_princess_intro_zlata.wav": "bb886990b56131f055a68c0c545a533d",
"assets/assets/vo/uk/narrator/mg08_error_ne_syudy_try_again.wav": "9c80fbdd5390831c1c058088d8e80f1b",
"assets/assets/vo/uk/narrator/mg05_final_molodets.wav": "a376a6cdda1bd30074b8422b33c2e618",
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
"assets/assets/vo/uk/narrator/mg04_instruction_paint_flowers.wav": "829c2e44dd5698caf9ae92c5843d7008",
"assets/assets/vo/uk/narrator/mg01_error_ne_tut.wav": "72309f70c0a60c844261990632a41526",
"assets/assets/vo/uk/narrator/mg09_error_not_this_one.wav": "233bb28faa434802e089aa1870d43940",
"assets/assets/vo/uk/narrator/mg02_instruction_dress_princess.wav": "129d50367b62a45caeb5e0c14a42339a",
"assets/assets/vo/uk/narrator/welcome_back.wav": "9483c2ebaba90c628a7f130c3748223b",
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
"assets/assets/vo/uk/narrator/mg05_hint_continue.wav": "8bf3546177a5aeca9cb61f518f5a20c9",
"assets/assets/vo/uk/narrator/vo_positive_smachno.wav": "4a36fdfdc2e1725d21486eca23771b5c",
"assets/assets/vo/uk/narrator/intro_global_story.wav": "c9048462e12a9c0df85608edab947972",
"assets/assets/vo/uk/narrator/outro_thank_you.wav": "bf61875ad414ad4e39ee127c2fe35044",
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
"assets/assets/vo/uk/narrator/mg04_teach_five_purple.wav": "84386617ed170ecc4b81a81a31ef3f1b",
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
"assets/assets/vo/uk/narrator/mg04_error_select_paint.wav": "9164fb482f6f535b52eddd219d83cfca",
"assets/assets/vo/uk/narrator/mg13_instruction_guide_carriages.wav": "914973c6c2099b8b6534b148d334936f",
"assets/assets/vo/uk/narrator/vo_positive_smachno_vyhlyadaie.wav": "5e03f9ef6c4524fc72eeaf0e76bc81e2",
"assets/assets/vo/uk/narrator/vo_positive_ce_para.wav": "23dfc26b378d382717b308a6752b07b7",
"assets/assets/vo/uk/narrator/vo_positive_sche_trishky.wav": "436bcd8a2aae0b51c342c6df2151f1e6",
"assets/assets/vo/uk/narrator/mg19_instruction_labyrinth.wav": "3786c78ca41060214cbbea7b22e042d1",
"assets/assets/vo/uk/narrator/mg05_intro_oi_tsukerky.wav": "160e2c1d6a3cc02d01e56b143daae9ad",
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
"assets/assets/vo/uk/narrator/mg04_teach_one_blue.wav": "3a69388b93c53231db70006496213db5",
"assets/assets/vo/uk/narrator/mg06_success_cake_masterpiece.wav": "e1d1a3df636b23cc10cffbf823865536",
"assets/assets/vo/uk/narrator/mg21_error_not_here_try_again.wav": "a471b261f541f846d1e10032496c5566",
"assets/assets/vo/uk/narrator/mg04_teach_four_green.wav": "4a4bd07287186839105e2b5876e49b17",
"assets/assets/vo/uk/narrator/mg15_instruction_count_princesses.wav": "41dc59ea55c6cc29c3a49344d6170b23",
"assets/assets/vo/uk/narrator/mg10_success_all_letters.wav": "443c8f24e671d95e0df005dd85b6b910",
"assets/assets/vo/uk/narrator/outro_celebration.wav": "1706da9c08723859617c04758cfe78ee",
"assets/assets/vo/uk/narrator/vo_positive_chudovo.wav": "dab7c7bd8def927a10c48467e9c79206",
"assets/assets/vo/uk/narrator/mg08_instruction_sort_desserts.wav": "e4244971f66e0b0886ecd115022c3f1b",
"assets/assets/vo/uk/narrator/mg23_error_wrong_size.wav": "6f382238786cfe0a46561c228fd82dfb",
"assets/assets/vo/uk/narrator/mg17_success_all_differences.wav": "86a7e8636b490433998eb04fde170e28",
"assets/assets/vo/uk/narrator/mg19_positive_this_way.wav": "1be7a9dad3f90ce4af2d652943417996",
"assets/assets/vo/uk/narrator/mg21_positive_unicorn_placed.wav": "aaaf26449f2bfc6000bad602c408ccd0",
"assets/assets/vo/uk/narrator/mg21_positive_star_shining.wav": "4dd67723c0738e9ffe13c9ca17b8ac34",
"assets/assets/vo/uk/narrator/mg15_success_counted_all.wav": "47ca35d2bd13be2335182be1956711b9",
"assets/assets/vo/uk/narrator/mg05_hint_try_again.wav": "6bca5c230a18cb0f09af374f03e5b664",
"assets/assets/vo/uk/narrator/mg17_error_look_closer.wav": "20a6b8db10867b1e7d839debf0397080",
"assets/assets/vo/uk/narrator/mg12_instruction_decorate_road.wav": "9a9e4c03cc58f03b38a104b52583f9f6",
"assets/assets/vo/uk/narrator/mg04_success_gifts_ready.wav": "767d1d3d99b5e128a126b15621c3c591",
"assets/assets/vo/uk/narrator/mg18_instruction_count_and_choose.wav": "49d65bfbb1e5badb193d0fdabc101d37",
"assets/assets/vo/uk/narrator/mg16_instruction_match_silhouettes.wav": "8461e9f222115522eafe577e3f6a99b1",
"assets/assets/vo/uk/narrator/mg18_success_three_unicorns.wav": "1fc7ed856fbec79f201971e599e4995c",
"assets/assets/vo/uk/narrator/mg13_positive_carriage_arrived.wav": "cabc2fd024d88035418317fe83ee5c5c",
"assets/assets/vo/uk/narrator/mg04_success_all_painted.wav": "e034461ff672459fda0ea2dcd0100bbf",
"assets/assets/vo/uk/narrator/mg05_instruction_znaidy_tsukerky.wav": "1611422c187fb4cec8f074b8ae1631a1",
"assets/assets/vo/uk/narrator/mg23_instruction_sort_by_size.wav": "4e1a5d62e48240b53a0b5737fa0f3918",
"assets/assets/vo/uk/narrator/mg23_positive_this_box_here.wav": "6cc7b85c36e4885b7a81e7ca080b9991",
"assets/assets/vo/uk/narrator/mg16_princess_liliya_reaction.wav": "da7489f2d9b1a999d98040bfc434418f",
"assets/assets/vo/uk/narrator/mg05_error_ne_tse_yagoda.wav": "38b879440dadccda0bfa8ff4a6979c84",
"assets/assets/vo/uk/narrator/mg18_error_count_carefully.wav": "af9d2e5fb733fe0b7887e6363d321322",
"assets/assets/vo/uk/narrator/mg09_instruction_cupcake_pairs.wav": "06487400c9edc7d753ed8654c72513b6",
"assets/assets/vo/uk/narrator/mg18_success_two_rainbows.wav": "837294f77057786e4808fbbca7466939",
"assets/assets/vo/uk/narrator/vo_positive_garno.wav": "dff2ef5155ec7ba6ce0dbca06ba96633",
"assets/assets/vo/uk/narrator/mg06_instruction_cake_puzzle.wav": "5ad8c899bb65d5871b6e3204684ad384",
"assets/assets/vo/uk/solomiya/thank_you.wav": "8661e8c61a64462caa72642d2cebeb4e",
"assets/assets/vo/uk/solomiya/greeting.wav": "4af42c3133ced6e46c830309889adcbb",
"assets/assets/vo/uk/solomiya/wonderful.wav": "d80a8917bade41a45186d812405998dd",
"assets/assets/vo/uk/solomiya/lets_play.wav": "ff22e900c0d25396e81b269c3c525c11",
"assets/assets/vo/en/olesia/olesia_intro_greeting.wav": "2b4dc650051753c6873de78a53a84338",
"assets/assets/vo/en/zlata/zlata_intro_greeting.wav": "55a8b6fd18f80b9a75e55ba34fea6034",
"assets/assets/vo/en/milana/milana_intro_greeting.wav": "e058f2888ec34dcc68fdd290a00bd3ce",
"assets/assets/vo/en/narrator/mg02_error_poklady_prykrasu.wav": "f57035734a04dc5725d3b977e8913054",
"assets/assets/vo/en/narrator/mg05_final_molodets.wav": "1f1ca39fded5037f200f1f8c11a96fd9",
"assets/assets/vo/en/narrator/mg04_teach_two_yellow.wav": "28f341859a5cf624a282ce722ef3cce5",
"assets/assets/vo/en/narrator/mg04_instruction_paint_flowers.wav": "8871d1b852b73630986c835de2c5845f",
"assets/assets/vo/en/narrator/welcome_back.wav": "2e712fc02e55f163765045296102302d",
"assets/assets/vo/en/narrator/mg05_hint_continue.wav": "4fe60aa5fbd541155a02ed5be8069378",
"assets/assets/vo/en/narrator/intro_global_story.wav": "e562bb9d93fc8b0b83e5ff1312a372c1",
"assets/assets/vo/en/narrator/outro_thank_you.wav": "dcbf90c323b3146e275aed85b9c84ee0",
"assets/assets/vo/en/narrator/mg04_teach_five_purple.wav": "503ea002ef1b711f2ad1a66207dac6ff",
"assets/assets/vo/en/narrator/mg04_error_select_paint.wav": "c48c312e3eebe534bc5371fd4ffe1074",
"assets/assets/vo/en/narrator/mg05_intro_oi_tsukerky.wav": "bb86a817365f470fd5cd1fad3842d45d",
"assets/assets/vo/en/narrator/mg04_teach_three_pink.wav": "95991f88871a7b9d42d29b627fabce9b",
"assets/assets/vo/en/narrator/mg04_teach_one_blue.wav": "aea60730a480486c95065b0984674e0a",
"assets/assets/vo/en/narrator/mg04_teach_four_green.wav": "1446eebe70869153d3a54a7605c86dbe",
"assets/assets/vo/en/narrator/outro_celebration.wav": "6187037518d659a7ad6b1381af07c173",
"assets/assets/vo/en/narrator/mg05_hint_try_again.wav": "18ff1b59b2af6282cb5ebbc3a5173ebb",
"assets/assets/vo/en/narrator/mg04_success_all_painted.wav": "8ef47f88d0b8a9ae66d0bf0419286e92",
"assets/assets/vo/en/narrator/mg05_instruction_znaidy_tsukerky.wav": "884fcb69439876b376463adfb35422a2",
"assets/assets/vo/en/narrator/mg05_error_ne_tse_yagoda.wav": "365ac438be4a339e0242cbfdd3c90abf",
"assets/assets/vo/en/solomiya/thank_you.wav": "f0efc2819c764137613a2c402a9cc38a",
"assets/assets/vo/en/solomiya/greeting.wav": "86e8b985d4534c7a38ef26f64f1f1584",
"assets/assets/vo/en/solomiya/wonderful.wav": "e62edc4bb5e24140733b7833e2944524",
"assets/assets/vo/en/solomiya/lets_play.wav": "d40b719cd0629f11a6c86d102613309d",
"assets/assets/vfx_presets.json": "5196a224400fa1cd9305a6caf0312a49",
"assets/assets/sfx/sfx_gp_snap.mp3": "78dccfdb37e2486661a3126b424a40c5",
"assets/assets/sfx/sfx_paint_select.mp3": "d4425f86c562e190134afc450990504a",
"assets/assets/sfx/sfx_magic_screen_wash.mp3": "a69347e60308fd0f40c751b28e54865d",
"assets/assets/sfx/sfx_gp_pickup.mp3": "48afe43863d1cff47e0b2f7b4fa7a812",
"assets/assets/sfx/sfx_gp_drop_fail.mp3": "b75c213955814bff2faecc20bd129ed8",
"assets/assets/sfx/sfx_rw_final.mp3": "a9e8e9f7e4f04a7cbdd785daeccc4948",
"assets/assets/sfx/sfx_ui_sticker_open.mp3": "6cb05431e13dd20e6493dd9b56150cd2",
"assets/assets/sfx/sfx_ui_hover_soft.mp3": "8730b22adda34232ab1b3ba19ec73fce",
"assets/assets/sfx/sfx_magic_glow_pulse_soft.mp3": "93c0e7a87a0786d3b3e3618a5f9cb1a7",
"assets/assets/sfx/sfx_gp_bounce.mp3": "31c06db27dc9f6cd04fb9f3b72725e14",
"assets/assets/sfx/sfx_trans_panel_in_soft.mp3": "f1e6e57428cd6e8799b4f206309c5265",
"assets/assets/sfx/sfx_rw_success.mp3": "134a1ca5e1b15e591e96f04350706597",
"assets/assets/sfx/sfx_ui_deny_soft.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_paint_fill.mp3": "33f0fea4a3c92f62f035e5c433975dc9",
"assets/assets/sfx/sfx_ui_nav_hide.mp3": "f7573505e51e4db50ba516a03844ef55",
"assets/assets/sfx/sfx_settings_button.mp3": "b56e054e77904acfdee629a9c10d4d65",
"assets/assets/sfx/sfx_play-button.mp3": "d5327328dcf9bec90ba5a90d5dc5414d",
"assets/assets/sfx/sfx_home_button.mp3": "e16aa2caab8bf907614e3501793655fe",
"assets/assets/sfx/sfx_magic_gold_dust_puff.mp3": "a67714da1601dce125979327dba27fbe",
"assets/assets/sfx/sfx_obj_pick.mp3": "789c7886e33b1ef1063d0e37db97a2a8",
"assets/assets/sfx/sfx_wand_whoosh_soft.mp3": "eb462c7d666db94cb4bcd93c99b9b49b",
"assets/assets/sfx/sfx_magic_trail_soft.mp3": "c7b0b33fb9de6c8c96a3432fd01c86d7",
"assets/assets/sfx/sfx_unicorn_rainbow_cast.mp3": "f039760c1e26a2b7cb1c6bbef2c63b68",
"assets/assets/sfx/sfx_ui_focus_ring.mp3": "c5c1d04f3d849bd685a623115f9a16bc",
"assets/assets/sfx/sfx_trans_out_fade_soft.mp3": "ddac5a81c38d488a23a00d03f1889cf8",
"assets/assets/sfx/sfx_magic_sparkle.mp3": "76ef97a6965b60704837332e4af900ad",
"assets/assets/sfx/sfx_ambi_float_emph.mp3": "6a06b50b32052e388d6558560bcc27f9",
"assets/assets/sfx/sfx_ui_click_soft.mp3": "0c0f91b0312d73a439c51472936a7a66",
"assets/assets/sfx/sfx_obj_tink.mp3": "75ce59fa3410545013698ef0c7c38284",
"assets/assets/sfx/sfx_ui_nav_show.mp3": "4d93c09510ba39547621eb3dec2dbcd4",
"assets/assets/sfx/sfx_trans_in_sparkle.mp3": "f3ee0e32ed3752bed14c063f11a2866e",
"assets/assets/sfx/sfx_teach_ping_soft.mp3": "2e85913f0eed00981ad8b17f78210bec",
"assets/assets/sfx/sfx_ui_back_soft.mp3": "4f819d18298181247ac3c5078cf174bf",
"assets/assets/sfx/sfx_overlay_open_soft.mp3": "8278982826284a0ec4ca9d8197f66ff3",
"assets/assets/sfx/sfx_deny_pulse_soft.mp3": "307aa3a1cdcbedfb886d4f0683ac230c",
"assets/assets/img/screens_parent_hub_header/parent_header_ribbon.png": "ff001ea547879c3bbbacbae07595cb69",
"assets/assets/img/mg04_puddles/puddleBlue.png": "acb8813bf6bdb3c316c56a49d459940c",
"assets/assets/img/mg04_puddles/puddlePink.png": "08debeb68665a214549589951f5ddea4",
"assets/assets/img/mg04_puddles/puddleYellow.png": "52f02df5416662ec1847f5fbfc391ca1",
"assets/assets/img/mg04_puddles/puddleGreen.png": "2e3810dad290cd4cb507e0ff079c6bc6",
"assets/assets/img/mg04_puddles/puddlePurple.png": "e182d097e829682c7da697c1081f10fd",
"assets/assets/img/mg02_background/backgroundSolomiyaRoom.png": "bbc372c298f995f53de4fa86d8a7207a",
"assets/assets/img/screens_parent_hub_medal/parent_medal_education.png": "c7e1af5a122ac4c7a563e07cce5dc86d",
"assets/assets/img/screens_parent_hub_medal/parent_medal_sway.webp": "d996375bd5f44099feed8c4c7d21af54",
"assets/assets/img/screens_splash_logo/splash_logo_complete.png": "005b5594507c9bdd5f62d8358c6823fc",
"assets/assets/img/screens_outro_decorations/outro_streamers.png": "56702f1e0623b7b3fed0fb28b5caece0",
"assets/assets/img/screens_outro_decorations/outro_balloons_cluster.png": "fdda1249d62331892b32680aeecd204d",
"assets/assets/img/screens_intro/intro_frame2_garden_close.png": "655e7f83dcbd7947a6c26286cd4eb24d",
"assets/assets/img/screens_intro/intro_frame1_establisher.png": "c037b0f0582632f212b9eeb0664ab745",
"assets/assets/img/screens_intro/intro_frame3_garden_path.png": "0e1c2b836692434987574a4426437059",
"assets/assets/img/mg01_vfx_elements/mg01_rainbow_backdrop.png": "262d487f1b2f34cf8e2510a13ead1b29",
"assets/assets/img/particle_effect/dust_soft_disc.png": "c5d8352c521611954bb658cc40c36b84",
"assets/assets/img/particle_effect/glitter_chip_diamond.png": "73d3b41afc976eb898e22110e8180376",
"assets/assets/img/mg05_background/backgroundKitchenDining.png": "7799318a88ac653d7ffb168a3d3ed780",
"assets/assets/img/screens_parent_hub_progress/parent_droplet_gray.png": "17b2eac7e35c5ea6eb7ae9138d35be1a",
"assets/assets/img/screens_parent_hub_progress/parent_droplet_gold.png": "517bbdb7e1c44225af9e1f20e3d188bc",
"assets/assets/img/screens_home/home_bg_composite.png": "627572f5cbe0ab2254c4f279ab2f05ff",
"assets/assets/img/screens_home/home_bg_hills.png": "d823977de9181199721a67b39f269998",
"assets/assets/img/screens_home/home_bg_garden.png": "b0773b5d1b7ef2a8b48ad383f6ca8169",
"assets/assets/img/screens_home/home_bg_path.png": "e86bed9560c7e01a84cfdfa655fac09d",
"assets/assets/img/screens_home/home_bg_castle.png": "7647a51d843bea9b7d6ea286e25718ff",
"assets/assets/img/screens_home/home_bg_sky.png": "ae2a45a8d373025572a8bedf2b1ad1ef",
"assets/assets/img/screens_parent_hub/parent_hub_bg.png": "9e35c7573e1f4341f37a34a5827bdd13",
"assets/assets/img/screens_parent_hub/parent_hub_bg_gradient.png": "9171cc2142eaf7d388db86fe3165046c",
"assets/assets/img/character_zlata/zlata_wave.png": "5ff981d98f60ca0cb8b3c7853afe805f",
"assets/assets/img/character_zlata/zlata_idle.png": "6efae28be5411df4a0ab6b4db92c0a6b",
"assets/assets/img/mg01_decorations/decorationVaseFlowers.png": "1b2098547d80695f07e871edfd163979",
"assets/assets/img/mg01_decorations/decorationGarlandFloral.png": "dad1625f1def2578ff8ab669c692cba6",
"assets/assets/img/mg01_decorations/decorationBalloonsCluster.png": "47ad1dd0809c473b7c49b3008dccc5f4",
"assets/assets/img/screens_splash/splash_bg.png": "dcff5fd1f42591fe6b7ce22caf90c0e8",
"assets/assets/img/mg01_character_solomiya_wand/solomiya_wand_flourish.png": "22a2a448b9126fc46ab1fdf53674d79d",
"assets/assets/img/mg01_character_solomiya_wand/solomiya_wand_celebrate.png": "aee4d3197489dc316c9ec2130797717f",
"assets/assets/img/mg01_character_solomiya_wand/solomiya_wand_flourish_anim.webp": "3c101f098ba8a1303c0843847a32e6ff",
"assets/assets/img/mg01_character_solomiya_wand/solomiya_wand_celebrate_anim.webp": "67acd0fa0fbbfd69242b1d08b7b0eedc",
"assets/assets/img/mg01_character_solomiya_wand/solomiya_wand_idle.png": "9ab1801846a614f74fe164bfd963879f",
"assets/assets/img/mg05_candy/candyBonbonPurple.png": "b04c0656bd18083c26353c91428a2ffc",
"assets/assets/img/mg05_candy/candyBonbonPink.png": "996edb9f737062453d5ca4f718e998af",
"assets/assets/img/mg05_candy/candyBonbonBlue.png": "9164369a01e71390954dcb500e1c721d",
"assets/assets/img/screens_parent_hub_button/parent_buy_button.png": "90cb6a5b6ff40f747e2b663dc3e5ff91",
"assets/assets/img/screens_parent_hub_button/parent_buy_shimmer.webp": "66c9f0d301eda4105e58666378052be2",
"assets/assets/img/character_solomiya/solomiya_gesture_welcome.png": "9d9c484ca1d253256ae6560ac8575447",
"assets/assets/img/character_solomiya/solomiya_celebrate.png": "de4a235c67ec244f370f9feddc572a08",
"assets/assets/img/character_solomiya/solomiya_idle.png": "a40168cdcbbfe5d593e3d39da50b3e55",
"assets/assets/img/character_solomiya/solomiya_wave_loop.webp": "6423c3031f70e2705fe52c376ee979d9",
"assets/assets/img/character_solomiya/solomiya_wave.png": "046aee6d2ddfbce1d13628cb8f6aafe8",
"assets/assets/img/screens_outro/outro_garden_evening.png": "f8174d2eaeb4742a71ad382e9b201ad5",
"assets/assets/img/screens_outro/outro_evening_sky.png": "b6ff2688592cb45494926c61e6b8916b",
"assets/assets/img/screens_outro/outro_castle_distant.png": "d95217d3b57a74a2f03cdc2a79eaca35",
"assets/assets/img/mg02_accessories/accessoryTiara.png": "c05fd11c62bde70c65e706bbb636146f",
"assets/assets/img/mg02_accessories/accessoryChestFlower.png": "c4a464d8eae38fe7ddc53c45add49f91",
"assets/assets/img/mg02_accessories/accessoryShoesPair.png": "58df905e400675b8d1f009d9bae81fd2",
"assets/assets/img/mg02_accessories/accessoryBelt.png": "96df93c78adf66ecfcd5c0dc8db8b128",
"assets/assets/img/ui_decorative/ui_divider_hearts.png": "b4cd1fe77db0ea81c46799ee5010d246",
"assets/assets/img/ui_decorative/ui_divider_stars.png": "92037a5999d809f6edc437703b3cc2c7",
"assets/assets/img/ui_decorative/ui_corner_flourish.png": "ef6a80f75cbeda39bc47e41b7d269bdc",
"assets/assets/img/ui_buttons/ui_button_next_normal.png": "49c5ec0424e96aa704e8c4e0b96d2422",
"assets/assets/img/ui_buttons/ui_button_close.png": "abc2652bc4122c7643b5f0a42b28a2fd",
"assets/assets/img/ui_buttons/ui_button_back_normal.png": "81e0f0c08e4efda3ac84f5a34c3b4d17",
"assets/assets/img/ui_buttons/ui_button_secondary.png": "81ac98c90c74d0191bb42b5a1fc9e3b9",
"assets/assets/img/ui_buttons/ui_button_primary.png": "ef2a4f3ca08227a86eec8e4d5650a1b0",
"assets/assets/img/ui_overlays/ui_overlay_panel_pink.png": "8efa0fe01c50a96277f7bb6d2a3b9999",
"assets/assets/img/ui_overlays/ui_overlay_panel_cream.png": "fe57239341120cfdc6e078b254e9bc24",
"assets/assets/img/mg01_background_elements/flag_left_tower.png": "8d864e5fc7fddf27daac6392ce8d28be",
"assets/assets/img/mg01_background_elements/flag_right_tower.png": "abf0977e6b807fde850b1ef5abe19e52",
"assets/assets/img/mg01_background_elements/cloud_a.png": "49013d1bc2f91708e4c1d78ebac8f215",
"assets/assets/img/mg01_background_elements/cloud_b.png": "0c6bc1532533827cdddc7293b7781977",
"assets/assets/img/mg05_fruit/fruitStrawberry.png": "40336004c9b924178117c8b57b6f81db",
"assets/assets/img/mg05_fruit/fruitBlueberry.png": "25a1ba64e5309dad71a57158ae116bcd",
"assets/assets/img/mg02_character_solomiya/characterPrincessSolomiyaAccessories.png": "84a5412a448ec7b90fdfa09f8bfe6844",
"assets/assets/img/character_milana/milana_cheer.png": "531b973412a19d8f61397db4870ccc51",
"assets/assets/img/character_milana/milana_idle.png": "b9cf7f4763a4d1eb683d9575134895a6",
"assets/assets/img/mg01_character_unicorn/unicorn_mg01_idle.png": "cc177c64f6e42f6642b19def07624a1f",
"assets/assets/img/mg01_character_unicorn/unicorn_hoof_tap_ready.png": "6dda9798978b5a0f102f459dfb35b472",
"assets/assets/img/mg01_background/backgroundCastleFacade.png": "46830e9131b63e027743f68a404685fa",
"assets/assets/img/character_unicorn/unicorn_hoof_raised.png": "6161c36441d388c9f1d36d85a5afc255",
"assets/assets/img/character_unicorn/unicorn_idle.png": "fa4ce855b226a335dfce2d142d41b530",
"assets/assets/img/character_unicorn/unicorn_sitting.png": "833e120a6409dc6cd53816014a5a32c4",
"assets/assets/img/character_unicorn/unicorn_celebrate.png": "ca4691e5cd2c3dfada06600f20207828",
"assets/assets/img/character_unicorn/unicorn_celebrate_loop.webp": "89d36509d63a903dcc4922544ae27979",
"assets/assets/img/screens_home_ui/home_title_arc.png": "98c5e260ff195ed98f7a3fbb8ed940e8",
"assets/assets/img/screens_home_ui/home_play_button_sheen.webp": "d63fdc2c70e738fa8dc06c28796a5d6c",
"assets/assets/img/screens_home_ui/home_btn_parent_gate.png": "848e5f306360d60097a17750b73d85de",
"assets/assets/img/screens_home_ui/home_title_arc_shimmer.mp4": "58de56c76431da6595c83b9954a0acbc",
"assets/assets/img/screens_home_ui/home_title_arc_shimmer.webp": "d808722d04a4d89cbfa1e0e7211d7261",
"assets/assets/img/screens_home_ui/home_play_button_complete.png": "08b86f8dfbca360a79d324550bf63b62",
"assets/assets/img/screens_home_ui/home_btn_sticker_album.png": "9e5e835a02ae601506ff47130944bce0",
"assets/assets/img/character_olesia/olesia_idle.png": "1c7624685a99b97381a48012ebd6c973",
"assets/assets/img/character_olesia/olesia_clap.png": "49fdf3a071c9316b55cec313aebe10ed",
"assets/assets/img/screens_parent_hub_unicorn/parent_unicorn_nod.webp": "1f984849df12c2ce04b7c49682f7e173",
"assets/assets/img/screens_parent_hub_unicorn/parent_unicorn_sleeping.png": "6b044f132e845ed1cc3a55cd4cebc1a2",
"assets/assets/img/screens_parent_hub_unicorn/parent_unicorn_breathing.webp": "020ae663b188c93b8513be6f5413ad7f",
"assets/assets/img/mg04_flowers/leafGreenColored.png": "6ade5daba0d607f1905a1116c85aff4d",
"assets/assets/img/mg04_flowers/flowerBlueColored.png": "8534dfa271784de17abe5addff51c23c",
"assets/assets/img/mg04_flowers/flowerYellowColored.png": "bbce259dd941f959ea794524faba6c89",
"assets/assets/img/mg04_flowers/flowerBlueBase.png": "233ad1260d0029fa953dce323abeaf3f",
"assets/assets/img/mg04_flowers/flowerPurpleBase.png": "b5625b4588fdc7b4e50f4abc917b972c",
"assets/assets/img/mg04_flowers/flowerPinkBase.png": "4a4678024641978d31eb42cb098c3852",
"assets/assets/img/mg04_flowers/flowerPinkColored.png": "cafe5f66e4170aad906aa6239efd81d0",
"assets/assets/img/mg04_flowers/flowerYellowBase.png": "d037fe1eaba9930d8e1f43c7055b2f45",
"assets/assets/img/mg04_flowers/leafGreenBase.png": "be7aa6302b56b520bdf41faba394cc53",
"assets/assets/img/mg04_flowers/flowerPurpleColored.png": "f28707fe5c2b8bc336d5e86bf1d5b9ab",
"assets/assets/img/mg04_background/backgroundVaseTable.png": "bc87dde3621e97b352ac1216df6dd714",
"assets/assets/img/screens_parent_hub_footer/parent_footer_icon_privacy.png": "d840a1a53c4b4e24e3a6694fdb08acf4",
"assets/assets/img/screens_parent_hub_footer/parent_footer_icon_instagram.png": "1c08547682fe1ff6f642bf37354568d6",
"assets/assets/img/screens_parent_hub_footer/parent_footer_icon_support.png": "eac74728cc80a19d0c11af692fa7052a",
"assets/assets/img/mg05_jar/jarCollectionFull.png": "826516f61201d2f223d320b336b3ad4a",
"assets/assets/img/mg05_jar/jarCollectionEmpty.png": "3b7afd2381270dba8c047b6331835b7f",
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
