/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'minimalist-white\'">' + entity + '</span>' + html;
	}
	var icons = {
			'minimalist-white-zoom_out' : '&#xe000;',
			'minimalist-white-zoom_in' : '&#xe001;',
			'minimalist-white-workstation' : '&#xe002;',
			'minimalist-white-wipes' : '&#xe003;',
			'minimalist-white-wifi' : '&#xe004;',
			'minimalist-white-watch' : '&#xe005;',
			'minimalist-white-wallet' : '&#xe006;',
			'minimalist-white-volume_up' : '&#xe007;',
			'minimalist-white-volume_mute' : '&#xe008;',
			'minimalist-white-volume_down' : '&#xe009;',
			'minimalist-white-visible' : '&#xe00a;',
			'minimalist-white-view_details' : '&#xe00b;',
			'minimalist-white-user2' : '&#xe00c;',
			'minimalist-white-user1' : '&#xe00d;',
			'minimalist-white-user_talk' : '&#xe00e;',
			'minimalist-white-user_group3' : '&#xe00f;',
			'minimalist-white-user_group2' : '&#xe010;',
			'minimalist-white-user_group1' : '&#xe011;',
			'minimalist-white-user_group' : '&#xe012;',
			'minimalist-white-user_check' : '&#xe013;',
			'minimalist-white-user_add' : '&#xe014;',
			'minimalist-white-user' : '&#xe015;',
			'minimalist-white-upload' : '&#xe016;',
			'minimalist-white-update_installing' : '&#xe017;',
			'minimalist-white-update' : '&#xe018;',
			'minimalist-white-up' : '&#xe019;',
			'minimalist-white-unpin_circle' : '&#xe01a;',
			'minimalist-white-unpin' : '&#xe01b;',
			'minimalist-white-unlock' : '&#xe01c;',
			'minimalist-white-umbrella' : '&#xe01d;',
			'minimalist-white-trophy' : '&#xe01e;',
			'minimalist-white-trash_full' : '&#xe01f;',
			'minimalist-white-trash' : '&#xe020;',
			'minimalist-white-toolbox' : '&#xe021;',
			'minimalist-white-today' : '&#xe022;',
			'minimalist-white-timer' : '&#xe023;',
			'minimalist-white-ticket_delete' : '&#xe024;',
			'minimalist-white-ticket' : '&#xe025;',
			'minimalist-white-text' : '&#xe026;',
			'minimalist-white-tag' : '&#xe027;',
			'minimalist-white-support' : '&#xe028;',
			'minimalist-white-student' : '&#xe029;',
			'minimalist-white-stopwatch' : '&#xe02a;',
			'minimalist-white-statistics' : '&#xe02b;',
			'minimalist-white-star_stroke' : '&#xe02c;',
			'minimalist-white-star_half' : '&#xe02d;',
			'minimalist-white-star' : '&#xe02e;',
			'minimalist-white-stack' : '&#xe02f;',
			'minimalist-white-speech_bubble_stroke' : '&#xe030;',
			'minimalist-white-speech_bubble' : '&#xe031;',
			'minimalist-white-speaker' : '&#xe032;',
			'minimalist-white-solution' : '&#xe033;',
			'minimalist-white-sleepin_mat' : '&#xe034;',
			'minimalist-white-signal_horn' : '&#xe035;',
			'minimalist-white-shuffle' : '&#xe036;',
			'minimalist-white-setting' : '&#xe037;',
			'minimalist-white-services' : '&#xe038;',
			'minimalist-white-send_file' : '&#xe039;',
			'minimalist-white-sell' : '&#xe03a;',
			'minimalist-white-search' : '&#xe03b;',
			'minimalist-white-screenshot' : '&#xe03c;',
			'minimalist-white-saveas' : '&#xe03d;',
			'minimalist-white-save' : '&#xe03e;',
			'minimalist-white-sandglass' : '&#xe03f;',
			'minimalist-white-sale' : '&#xe040;',
			'minimalist-white-running' : '&#xe041;',
			'minimalist-white-rotate' : '&#xe042;',
			'minimalist-white-right_round' : '&#xe043;',
			'minimalist-white-right' : '&#xe044;',
			'minimalist-white-reviewer' : '&#xe045;',
			'minimalist-white-resize' : '&#xe046;',
			'minimalist-white-repeat' : '&#xe047;',
			'minimalist-white-reload' : '&#xe048;',
			'minimalist-white-refresh1' : '&#xe049;',
			'minimalist-white-refresh' : '&#xe04a;',
			'minimalist-white-recycling' : '&#xe04b;',
			'minimalist-white-radio' : '&#xe04c;',
			'minimalist-white-rack' : '&#xe04d;',
			'minimalist-white-question' : '&#xe04e;',
			'minimalist-white-qr_code' : '&#xe04f;',
			'minimalist-white-puzzle' : '&#xe050;',
			'minimalist-white-purse' : '&#xe051;',
			'minimalist-white-purchase_order' : '&#xe052;',
			'minimalist-white-public_circle' : '&#xe053;',
			'minimalist-white-public' : '&#xe054;',
			'minimalist-white-product' : '&#xe055;',
			'minimalist-white-private_circle' : '&#xe056;',
			'minimalist-white-private' : '&#xe057;',
			'minimalist-white-printer' : '&#xe058;',
			'minimalist-white-plus' : '&#xe059;',
			'minimalist-white-plugins' : '&#xe05a;',
			'minimalist-white-pin_circle' : '&#xe05b;',
			'minimalist-white-pin' : '&#xe05c;',
			'minimalist-white-pill' : '&#xe05d;',
			'minimalist-white-phone_up' : '&#xe05e;',
			'minimalist-white-phone_down' : '&#xe05f;',
			'minimalist-white-phone' : '&#xe060;',
			'minimalist-white-pause' : '&#xe061;',
			'minimalist-white-paper_plan' : '&#xe062;',
			'minimalist-white-paper' : '&#xe063;',
			'minimalist-white-package' : '&#xe064;',
			'minimalist-white-overview4' : '&#xe065;',
			'minimalist-white-overview3' : '&#xe066;',
			'minimalist-white-overview2' : '&#xe067;',
			'minimalist-white-overview1' : '&#xe068;',
			'minimalist-white-online_support' : '&#xe069;',
			'minimalist-white-one_free' : '&#xe06a;',
			'minimalist-white-notebook' : '&#xe06b;',
			'minimalist-white-note1' : '&#xe06c;',
			'minimalist-white-note' : '&#xe06d;',
			'minimalist-white-newspaper' : '&#xe06e;',
			'minimalist-white-new' : '&#xe06f;',
			'minimalist-white-negative' : '&#xe070;',
			'minimalist-white-mouse' : '&#xe071;',
			'minimalist-white-more' : '&#xe072;',
			'minimalist-white-monitor' : '&#xe073;',
			'minimalist-white-moneybox' : '&#xe074;',
			'minimalist-white-money_bag' : '&#xe075;',
			'minimalist-white-moderator' : '&#xe076;',
			'minimalist-white-microphone' : '&#xe077;',
			'minimalist-white-message_unread_stroke' : '&#xe078;',
			'minimalist-white-message_unread' : '&#xe079;',
			'minimalist-white-message_reply' : '&#xe07a;',
			'minimalist-white-message_readed' : '&#xe07b;',
			'minimalist-white-message_forward' : '&#xe07c;',
			'minimalist-white-megafone2' : '&#xe07d;',
			'minimalist-white-megafone1' : '&#xe07e;',
			'minimalist-white-matches' : '&#xe07f;',
			'minimalist-white-manager' : '&#xe080;',
			'minimalist-white-male' : '&#xe081;',
			'minimalist-white-magazine' : '&#xe082;',
			'minimalist-white-logout' : '&#xe083;',
			'minimalist-white-login' : '&#xe084;',
			'minimalist-white-lock' : '&#xe085;',
			'minimalist-white-listen' : '&#xe086;',
			'minimalist-white-list1' : '&#xe087;',
			'minimalist-white-list' : '&#xe088;',
			'minimalist-white-link_broken' : '&#xe089;',
			'minimalist-white-link' : '&#xe08a;',
			'minimalist-white-like_stroke' : '&#xe08b;',
			'minimalist-white-like_half' : '&#xe08c;',
			'minimalist-white-like' : '&#xe08d;',
			'minimalist-white-left_round' : '&#xe08e;',
			'minimalist-white-left' : '&#xe08f;',
			'minimalist-white-ladder' : '&#xe090;',
			'minimalist-white-keyboard' : '&#xe091;',
			'minimalist-white-key1' : '&#xe092;',
			'minimalist-white-key' : '&#xe093;',
			'minimalist-white-joystick' : '&#xe094;',
			'minimalist-white-joker' : '&#xe095;',
			'minimalist-white-invisible' : '&#xe096;',
			'minimalist-white-information' : '&#xe097;',
			'minimalist-white-idea' : '&#xe098;',
			'minimalist-white-home' : '&#xe099;',
			'minimalist-white-help' : '&#xe09a;',
			'minimalist-white-headset' : '&#xe09b;',
			'minimalist-white-handshake' : '&#xe09c;',
			'minimalist-white-greentech' : '&#xe09d;',
			'minimalist-white-globe' : '&#xe09e;',
			'minimalist-white-gift' : '&#xe09f;',
			'minimalist-white-gas' : '&#xe0a0;',
			'minimalist-white-finish_flag' : '&#xe0a1;',
			'minimalist-white-filter_stroke' : '&#xe0a2;',
			'minimalist-white-filter' : '&#xe0a3;',
			'minimalist-white-female' : '&#xe0a4;',
			'minimalist-white-external_link' : '&#xe0a5;',
			'minimalist-white-expand' : '&#xe0a6;',
			'minimalist-white-error' : '&#xe0a7;',
			'minimalist-white-engineering' : '&#xe0a8;',
			'minimalist-white-emoticon_wink' : '&#xe0a9;',
			'minimalist-white-emoticon_sad' : '&#xe0aa;',
			'minimalist-white-emoticon_question' : '&#xe0ab;',
			'minimalist-white-emoticon_lol' : '&#xe0ac;',
			'minimalist-white-emoticon_happy' : '&#xe0ad;',
			'minimalist-white-edit' : '&#xe0ae;',
			'minimalist-white-earse' : '&#xe0af;',
			'minimalist-white-download' : '&#xe0b0;',
			'minimalist-white-down' : '&#xe0b1;',
			'minimalist-white-document' : '&#xe0b2;',
			'minimalist-white-dice' : '&#xe0b3;',
			'minimalist-white-delivery_free' : '&#xe0b4;',
			'minimalist-white-delivery' : '&#xe0b5;',
			'minimalist-white-delete_link' : '&#xe0b6;',
			'minimalist-white-date_to' : '&#xe0b7;',
			'minimalist-white-date_from' : '&#xe0b8;',
			'minimalist-white-dashboard' : '&#xe0b9;',
			'minimalist-white-cut' : '&#xe0ba;',
			'minimalist-white-cross' : '&#xe0bb;',
			'minimalist-white-copy_link' : '&#xe0bc;',
			'minimalist-white-copy' : '&#xe0bd;',
			'minimalist-white-contact' : '&#xe0be;',
			'minimalist-white-comments' : '&#xe0bf;',
			'minimalist-white-collapse' : '&#xe0c0;',
			'minimalist-white-collaborator' : '&#xe0c1;',
			'minimalist-white-coins' : '&#xe0c2;',
			'minimalist-white-clover' : '&#xe0c3;',
			'minimalist-white-cloud' : '&#xe0c4;',
			'minimalist-white-clock' : '&#xe0c5;',
			'minimalist-white-clipboard' : '&#xe0c6;',
			'minimalist-white-check_book' : '&#xe0c7;',
			'minimalist-white-check' : '&#xe0c8;',
			'minimalist-white-chart_p_dynamic' : '&#xe0c9;',
			'minimalist-white-chart_n_dynamic' : '&#xe0ca;',
			'minimalist-white-chart_line' : '&#xe0cb;',
			'minimalist-white-chart_combo' : '&#xe0cc;',
			'minimalist-white-cash_receiving' : '&#xe0cd;',
			'minimalist-white-cart_return' : '&#xe0ce;',
			'minimalist-white-cart_filled' : '&#xe0cf;',
			'minimalist-white-cart_checkout' : '&#xe0d0;',
			'minimalist-white-cart_buy' : '&#xe0d1;',
			'minimalist-white-cart' : '&#xe0d2;',
			'minimalist-white-card_using' : '&#xe0d3;',
			'minimalist-white-card_inserting' : '&#xe0d4;',
			'minimalist-white-cabinet' : '&#xe0d5;',
			'minimalist-white-business_contact' : '&#xe0d6;',
			'minimalist-white-bug' : '&#xe0d7;',
			'minimalist-white-briefcase' : '&#xe0d8;',
			'minimalist-white-brain' : '&#xe0d9;',
			'minimalist-white-box_full' : '&#xe0da;',
			'minimalist-white-box_empty' : '&#xe0db;',
			'minimalist-white-box_close' : '&#xe0dc;',
			'minimalist-white-box' : '&#xe0dd;',
			'minimalist-white-books' : '&#xe0de;',
			'minimalist-white-bookmark' : '&#xe0df;',
			'minimalist-white-book_stack' : '&#xe0e0;',
			'minimalist-white-book' : '&#xe0e1;',
			'minimalist-white-biohazard' : '&#xe0e2;',
			'minimalist-white-bill' : '&#xe0e3;',
			'minimalist-white-bell' : '&#xe0e4;',
			'minimalist-white-battery_100' : '&#xe0e5;',
			'minimalist-white-battery_90' : '&#xe0e6;',
			'minimalist-white-battery_75' : '&#xe0e7;',
			'minimalist-white-battery_50' : '&#xe0e8;',
			'minimalist-white-battery_25' : '&#xe0e9;',
			'minimalist-white-battery_10' : '&#xe0ea;',
			'minimalist-white-battery_0' : '&#xe0eb;',
			'minimalist-white-basket' : '&#xe0ec;',
			'minimalist-white-barcode' : '&#xe0ed;',
			'minimalist-white-banknotes' : '&#xe0ee;',
			'minimalist-white-bank_cards' : '&#xe0ef;',
			'minimalist-white-bandage' : '&#xe0f0;',
			'minimalist-white-bag' : '&#xe0f1;',
			'minimalist-white-attach' : '&#xe0f2;',
			'minimalist-white-assistant' : '&#xe0f3;',
			'minimalist-white-archive' : '&#xe0f4;',
			'minimalist-white-approval' : '&#xe0f5;',
			'minimalist-white-alert' : '&#xe0f6;',
			'minimalist-white-alarm_clock' : '&#xe0f7;',
			'minimalist-white-administrator' : '&#xe0f8;',
			'minimalist-white-add_list' : '&#xe0f9;',
			'minimalist-white-add_link' : '&#xe0fa;',
			'minimalist-white-add_folder' : '&#xe0fb;',
			'minimalist-white-add_file' : '&#xe0fc;',
			'minimalist-white-activity_feed' : '&#xe0fd;',
			'minimalist-white-about' : '&#xe0fe;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/minimalist-white-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};