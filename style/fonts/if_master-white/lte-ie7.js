/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'master-white\'">' + entity + '</span>' + html;
	}
	var icons = {
			'master-whitezoom_out' : '&#xe000;',
			'master-whitezoom_in' : '&#xe001;',
			'master-whitezoom' : '&#xe002;',
			'master-whiteyoutube' : '&#xe003;',
			'master-whitewindowphone' : '&#xe004;',
			'master-whitewifi' : '&#xe005;',
			'master-whitevolume3' : '&#xe006;',
			'master-whitevolume2' : '&#xe007;',
			'master-whitevolume1' : '&#xe008;',
			'master-whitevolume0' : '&#xe009;',
			'master-whitevolume_stereo' : '&#xe00a;',
			'master-whitevolume_mute' : '&#xe00b;',
			'master-whitevisualstadio' : '&#xe00c;',
			'master-whiteuservoice' : '&#xe00d;',
			'master-whiteuser_remove' : '&#xe00e;',
			'master-whiteuser_minus' : '&#xe00f;',
			'master-whiteuser_group_remove' : '&#xe010;',
			'master-whiteuser_group_minus' : '&#xe011;',
			'master-whiteuser_group_add' : '&#xe012;',
			'master-whiteuser_group' : '&#xe013;',
			'master-whiteuser_admin' : '&#xe014;',
			'master-whiteuser_add' : '&#xe015;',
			'master-whiteuser' : '&#xe016;',
			'master-whiteupload_2' : '&#xe017;',
			'master-whiteupload_1' : '&#xe018;',
			'master-whiteupload_0' : '&#xe019;',
			'master-whiteunlock1' : '&#xe01a;',
			'master-whiteunlock0' : '&#xe01b;',
			'master-whiteundo2' : '&#xe01c;',
			'master-whiteundo1' : '&#xe01d;',
			'master-whiteundo0' : '&#xe01e;',
			'master-whitetype' : '&#xe01f;',
			'master-whitetwitter1' : '&#xe020;',
			'master-whitetwitter0' : '&#xe021;',
			'master-whitetube' : '&#xe022;',
			'master-whitetruck' : '&#xe023;',
			'master-whitetrophy' : '&#xe024;',
			'master-whitetrash_0' : '&#xe025;',
			'master-whitetime_timer' : '&#xe026;',
			'master-whitetime_sandglass' : '&#xe027;',
			'master-whitetime_clock' : '&#xe028;',
			'master-whitetiles_nine' : '&#xe029;',
			'master-whiteticket' : '&#xe02a;',
			'master-whitethumbup_remove' : '&#xe02b;',
			'master-whitethumbup_minus' : '&#xe02c;',
			'master-whitethumbup_add' : '&#xe02d;',
			'master-whitesymbol_question' : '&#xe02e;',
			'master-whitesymbol_alert' : '&#xe02f;',
			'master-whitesun' : '&#xe030;',
			'master-whitesuitcase' : '&#xe031;',
			'master-whitestock_up' : '&#xe032;',
			'master-whitestock_down' : '&#xe033;',
			'master-whitestock' : '&#xe034;',
			'master-whitestar_remove' : '&#xe035;',
			'master-whitestar_minus' : '&#xe036;',
			'master-whitestar_fill' : '&#xe037;',
			'master-whitestar_add' : '&#xe038;',
			'master-whitestairs1' : '&#xe039;',
			'master-whitestairs0' : '&#xe03a;',
			'master-whitestairs_up1' : '&#xe03b;',
			'master-whitestairs_up0' : '&#xe03c;',
			'master-whitestairs_down1' : '&#xe03d;',
			'master-whitestairs_down0' : '&#xe03e;',
			'master-whitespeakerphone' : '&#xe03f;',
			'master-whitesnow' : '&#xe040;',
			'master-whitesmiley_what' : '&#xe041;',
			'master-whitesmiley_tounge' : '&#xe042;',
			'master-whitesmiley_sky' : '&#xe043;',
			'master-whitesmiley_sad' : '&#xe044;',
			'master-whitesmiley_happy' : '&#xe045;',
			'master-whitesmiley_angry' : '&#xe046;',
			'master-whitesleep' : '&#xe047;',
			'master-whiteshuffle' : '&#xe048;',
			'master-whitesetting_2' : '&#xe049;',
			'master-whitesetting_1' : '&#xe04a;',
			'master-whitesetting_0' : '&#xe04b;',
			'master-whitescale' : '&#xe04c;',
			'master-whitesave' : '&#xe04d;',
			'master-whiterss' : '&#xe04e;',
			'master-whitering' : '&#xe04f;',
			'master-whiteribbon' : '&#xe050;',
			'master-whitereturn' : '&#xe051;',
			'master-whiterepeat1' : '&#xe052;',
			'master-whiterepeat0' : '&#xe053;',
			'master-whitereload' : '&#xe054;',
			'master-whiteredo2' : '&#xe055;',
			'master-whiteredo1' : '&#xe056;',
			'master-whiteredo0' : '&#xe057;',
			'master-whiteradio' : '&#xe058;',
			'master-whitequote_right' : '&#xe059;',
			'master-whitequote_left' : '&#xe05a;',
			'master-whitepuzzle' : '&#xe05b;',
			'master-whitepulse' : '&#xe05c;',
			'master-whiteprinter' : '&#xe05d;',
			'master-whitepower' : '&#xe05e;',
			'master-whitepin1' : '&#xe05f;',
			'master-whitepin0' : '&#xe060;',
			'master-whitepill' : '&#xe061;',
			'master-whitephone_up1' : '&#xe062;',
			'master-whitephone_up0' : '&#xe063;',
			'master-whitephone_down1' : '&#xe064;',
			'master-whitephone_down0' : '&#xe065;',
			'master-whitepeople' : '&#xe066;',
			'master-whitepaperclip' : '&#xe067;',
			'master-whitepaper' : '&#xe068;',
			'master-whitepage_word' : '&#xe069;',
			'master-whitepage_txt' : '&#xe06a;',
			'master-whitepage_text' : '&#xe06b;',
			'master-whitepage_search' : '&#xe06c;',
			'master-whitepage_question' : '&#xe06d;',
			'master-whitepage_png' : '&#xe06e;',
			'master-whitepage_pdf' : '&#xe06f;',
			'master-whitepage_next' : '&#xe070;',
			'master-whitepage_new' : '&#xe071;',
			'master-whitepage_multi' : '&#xe072;',
			'master-whitepage_minus' : '&#xe073;',
			'master-whitepage_jpg' : '&#xe074;',
			'master-whitepage_image' : '&#xe075;',
			'master-whitepage_hidden' : '&#xe076;',
			'master-whitepage_gif' : '&#xe077;',
			'master-whitepage_favor' : '&#xe078;',
			'master-whitepage_excel' : '&#xe079;',
			'master-whitepage_edit' : '&#xe07a;',
			'master-whitepage_delete' : '&#xe07b;',
			'master-whitepage_code' : '&#xe07c;',
			'master-whitepage_check' : '&#xe07d;',
			'master-whitepage_add' : '&#xe07e;',
			'master-whitepage_acrobat' : '&#xe07f;',
			'master-whitepage' : '&#xe080;',
			'master-whiteos_windowsphone' : '&#xe081;',
			'master-whiteos_windowsmobile' : '&#xe082;',
			'master-whiteos_windows8' : '&#xe083;',
			'master-whiteos_windows' : '&#xe084;',
			'master-whiteos_ios' : '&#xe085;',
			'master-whiteos_android' : '&#xe086;',
			'master-whiteos_86x' : '&#xe087;',
			'master-whiteos_64x' : '&#xe088;',
			'master-whiteopr_plus' : '&#xe089;',
			'master-whiteopr_minus' : '&#xe08a;',
			'master-whiteopr_cross' : '&#xe08b;',
			'master-whiteopr_check' : '&#xe08c;',
			'master-whiteopacity' : '&#xe08d;',
			'master-whitenotification_multi_above' : '&#xe08e;',
			'master-whitenotification_multi' : '&#xe08f;',
			'master-whitenotification_above' : '&#xe090;',
			'master-whitenotification' : '&#xe091;',
			'master-whitenotebook' : '&#xe092;',
			'master-whitenight1' : '&#xe093;',
			'master-whitenight0' : '&#xe094;',
			'master-whitenewspaper' : '&#xe095;',
			'master-whitenew' : '&#xe096;',
			'master-whitenetwork_disconnect' : '&#xe097;',
			'master-whitenetwork_connect' : '&#xe098;',
			'master-whitemusic' : '&#xe099;',
			'master-whitemovie' : '&#xe09a;',
			'master-whitemonitor' : '&#xe09b;',
			'master-whitemoney' : '&#xe09c;',
			'master-whitemicrophone' : '&#xe09d;',
			'master-whitemessage_stroke1' : '&#xe09e;',
			'master-whitemessage_stroke0' : '&#xe09f;',
			'master-whitemessage_fill' : '&#xe0a0;',
			'master-whitemessage' : '&#xe0a1;',
			'master-whitemedia_control_stop' : '&#xe0a2;',
			'master-whitemedia_control_rewind' : '&#xe0a3;',
			'master-whitemedia_control_play' : '&#xe0a4;',
			'master-whitemedia_control_pause' : '&#xe0a5;',
			'master-whitemedia_control_fastforward' : '&#xe0a6;',
			'master-whitemarkup' : '&#xe0a7;',
			'master-whitemarketplace' : '&#xe0a8;',
			'master-whitemap_treasure' : '&#xe0a9;',
			'master-whitemap_gps' : '&#xe0aa;',
			'master-whitemap' : '&#xe0ab;',
			'master-whitemale' : '&#xe0ac;',
			'master-whitelogout' : '&#xe0ad;',
			'master-whitelogin' : '&#xe0ae;',
			'master-whitelock' : '&#xe0af;',
			'master-whitelocation_round' : '&#xe0b0;',
			'master-whitelocation_minus' : '&#xe0b1;',
			'master-whitelocation_delete' : '&#xe0b2;',
			'master-whitelocation_circle' : '&#xe0b3;',
			'master-whitelocation_check' : '&#xe0b4;',
			'master-whitelocation_add' : '&#xe0b5;',
			'master-whitelocation' : '&#xe0b6;',
			'master-whitelist1' : '&#xe0b7;',
			'master-whitelist0' : '&#xe0b8;',
			'master-whitelink' : '&#xe0b9;',
			'master-whitelifesaver' : '&#xe0ba;',
			'master-whiteleaf' : '&#xe0bb;',
			'master-whiteleaderboard' : '&#xe0bc;',
			'master-whitelayers' : '&#xe0bd;',
			'master-whitekeyboard_down' : '&#xe0be;',
			'master-whitekeyboard' : '&#xe0bf;',
			'master-whitekey1' : '&#xe0c0;',
			'master-whitekey0' : '&#xe0c1;',
			'master-whitejournal' : '&#xe0c2;',
			'master-whitejava1' : '&#xe0c3;',
			'master-whitejava0' : '&#xe0c4;',
			'master-whiteiphone' : '&#xe0c5;',
			'master-whiteinformation_circle' : '&#xe0c6;',
			'master-whiteinformation' : '&#xe0c7;',
			'master-whiteinfinity' : '&#xe0c8;',
			'master-whiteinbox' : '&#xe0c9;',
			'master-whiteimages' : '&#xe0ca;',
			'master-whiteimage_hr' : '&#xe0cb;',
			'master-whiteimage' : '&#xe0cc;',
			'master-whiteicecream' : '&#xe0cd;',
			'master-whitehome' : '&#xe0ce;',
			'master-whiteheart_stroke' : '&#xe0cf;',
			'master-whiteheart_half' : '&#xe0d0;',
			'master-whiteheart_full' : '&#xe0d1;',
			'master-whiteheart_break' : '&#xe0d2;',
			'master-whitehandicap' : '&#xe0d3;',
			'master-whitegraph_pie' : '&#xe0d4;',
			'master-whitegraph_line_up' : '&#xe0d5;',
			'master-whitegraph_line_down' : '&#xe0d6;',
			'master-whitegraph_line' : '&#xe0d7;',
			'master-whitegraph_bar' : '&#xe0d8;',
			'master-whitegoogle' : '&#xe0d9;',
			'master-whiteglobe1' : '&#xe0da;',
			'master-whiteglobe0' : '&#xe0db;',
			'master-whitegithub' : '&#xe0dc;',
			'master-whitegift' : '&#xe0dd;',
			'master-whitegauge4' : '&#xe0de;',
			'master-whitegauge3' : '&#xe0df;',
			'master-whitegauge2' : '&#xe0e0;',
			'master-whitegauge1' : '&#xe0e1;',
			'master-whitegauge0' : '&#xe0e2;',
			'master-whitegamepad' : '&#xe0e3;',
			'master-whitefullscreen' : '&#xe0e4;',
			'master-whiteflash' : '&#xe0e5;',
			'master-whiteflag1' : '&#xe0e6;',
			'master-whiteflag0' : '&#xe0e7;',
			'master-whitefingerprint' : '&#xe0e8;',
			'master-whitefilter' : '&#xe0e9;',
			'master-whitefield_text' : '&#xe0ea;',
			'master-whitefield_password' : '&#xe0eb;',
			'master-whitefemale' : '&#xe0ec;',
			'master-whitefacebook' : '&#xe0ed;',
			'master-whitedraw_pencil' : '&#xe0ee;',
			'master-whitedraw_pen' : '&#xe0ef;',
			'master-whitedraw_edit' : '&#xe0f0;',
			'master-whitedownload_2' : '&#xe0f1;',
			'master-whitedownload_1' : '&#xe0f2;',
			'master-whitedownload_0' : '&#xe0f3;',
			'master-whitedisk' : '&#xe0f4;',
			'master-whitedisconnect' : '&#xe0f5;',
			'master-whitedirection_up' : '&#xe0f6;',
			'master-whitedirection_right' : '&#xe0f7;',
			'master-whitedirection_left' : '&#xe0f8;',
			'master-whitedirection_down' : '&#xe0f9;',
			'master-whitedial' : '&#xe0fa;',
			'master-whitediagram' : '&#xe0fb;',
			'master-whitedepartment' : '&#xe0fc;',
			'master-whitecursor_stroke' : '&#xe0fd;',
			'master-whitecursor_hand' : '&#xe0fe;',
			'master-whitecursor_fill' : '&#xe0ff;',
			'master-whitecup_half' : '&#xe100;',
			'master-whitecup_full' : '&#xe101;',
			'master-whitecup_empty' : '&#xe102;',
			'master-whitecsharp' : '&#xe103;',
			'master-whitecrown' : '&#xe104;',
			'master-whitecontrol_guide' : '&#xe105;',
			'master-whiteconsole' : '&#xe106;',
			'master-whiteconnection_departure' : '&#xe107;',
			'master-whiteconnection' : '&#xe108;',
			'master-whiteconnect' : '&#xe109;',
			'master-whitecone' : '&#xe10a;',
			'master-whitecloud_download' : '&#xe10b;',
			'master-whitecloud' : '&#xe10c;',
			'master-whiteclipboard_past' : '&#xe10d;',
			'master-whiteclipboard_edit' : '&#xe10e;',
			'master-whiteclipboard' : '&#xe10f;',
			'master-whiteclear_right' : '&#xe110;',
			'master-whiteclear_left' : '&#xe111;',
			'master-whitecircle_stroke' : '&#xe112;',
			'master-whitechevron_up' : '&#xe113;',
			'master-whitechevron_right' : '&#xe114;',
			'master-whitechevron_left' : '&#xe115;',
			'master-whitechevron_down' : '&#xe116;',
			'master-whitechess_rook' : '&#xe117;',
			'master-whitechess_queen' : '&#xe118;',
			'master-whitechess_king' : '&#xe119;',
			'master-whitechess_horse' : '&#xe11a;',
			'master-whitechess_bishop' : '&#xe11b;',
			'master-whitecheckbox' : '&#xe11c;',
			'master-whitecart' : '&#xe11d;',
			'master-whitecandy' : '&#xe11e;',
			'master-whitecancel' : '&#xe11f;',
			'master-whitecamera' : '&#xe120;',
			'master-whitecalendar_today' : '&#xe121;',
			'master-whitecalendar_todate' : '&#xe122;',
			'master-whitecalendar_fromdate' : '&#xe123;',
			'master-whitecalculator' : '&#xe124;',
			'master-whitebulb1' : '&#xe125;',
			'master-whitebulb0' : '&#xe126;',
			'master-whitebug' : '&#xe127;',
			'master-whitebrowser_chrome' : '&#xe128;',
			'master-whitebox_paper' : '&#xe129;',
			'master-whitebox_1' : '&#xe12a;',
			'master-whitebox_0' : '&#xe12b;',
			'master-whitebook_3' : '&#xe12c;',
			'master-whitebook_2' : '&#xe12d;',
			'master-whitebook_1' : '&#xe12e;',
			'master-whitebook_0' : '&#xe12f;',
			'master-whitebed' : '&#xe130;',
			'master-whitebattery_3' : '&#xe131;',
			'master-whitebattery_2' : '&#xe132;',
			'master-whitebattery_1' : '&#xe133;',
			'master-whitebattery_0' : '&#xe134;',
			'master-whitebarcode' : '&#xe135;',
			'master-whitebank_card' : '&#xe136;',
			'master-whitebaby' : '&#xe137;',
			'master-whiteaxis_three' : '&#xe138;',
			'master-whiteat' : '&#xe139;',
			'master-whitearrow_upright' : '&#xe13a;',
			'master-whitearrow_upleft' : '&#xe13b;',
			'master-whitearrow_updown' : '&#xe13c;',
			'master-whitearrow_up' : '&#xe13d;',
			'master-whitearrow_t_up' : '&#xe13e;',
			'master-whitearrow_t_right' : '&#xe13f;',
			'master-whitearrow_t_left' : '&#xe140;',
			'master-whitearrow_t_down' : '&#xe141;',
			'master-whitearrow_rightup' : '&#xe142;',
			'master-whitearrow_rightleft' : '&#xe143;',
			'master-whitearrow_rightdown' : '&#xe144;',
			'master-whitearrow_right' : '&#xe145;',
			'master-whitearrow_leftup' : '&#xe146;',
			'master-whitearrow_leftright' : '&#xe147;',
			'master-whitearrow_leftdown' : '&#xe148;',
			'master-whitearrow_left' : '&#xe149;',
			'master-whitearrow_expand' : '&#xe14a;',
			'master-whitearrow_downup' : '&#xe14b;',
			'master-whitearrow_downright' : '&#xe14c;',
			'master-whitearrow_downleft' : '&#xe14d;',
			'master-whitearrow_down' : '&#xe14e;',
			'master-whitearrow_collapsed' : '&#xe14f;',
			'master-whitearchive' : '&#xe150;',
			'master-whiteanchor' : '&#xe151;',
			'master-whitealign_right' : '&#xe152;',
			'master-whitealign_left' : '&#xe153;',
			'master-whitealign_justify' : '&#xe154;',
			'master-whitealign_center' : '&#xe155;',
			'master-whitealert2' : '&#xe156;',
			'master-whitealert1' : '&#xe157;',
			'master-whitealert0' : '&#xe158;',
			'master-whiteaim' : '&#xe159;',
			'master-whiteadobe_acrobat' : '&#xe15a;',
			'master-whiteacorn' : '&#xe15b;'
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
		c = c.match(/master-white[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};