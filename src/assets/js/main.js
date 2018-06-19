// /* -------------------------------------
// 		CUSTOM FUNCTIONS
// -------------------------------------- */
// jQuery(document).on('ready', function() {
// 	"use strict";
// 	/* -------------------------------------
// 			Set Page Height
// 	-------------------------------------- */
// 	function contentFullScreen() {
// 		var _vph = jQuery(window).height();
// 		jQuery('.content').css({'height': _vph + 'px'});
// 	}
// 	window.onresize = function() {
// 		contentFullScreen();
// 	}
// 	var refreshId = setInterval(refresh, 500);
// 	function refresh() {
// 		contentFullScreen();
// 	}
// 	/* -------------------------------------
// 			FIXED LOGO AND NAV
// 	-------------------------------------- */
// 	jQuery(window).scroll(function(){
// 		var scrollTop = 1;
// 		if(jQuery(window).scrollTop() >= scrollTop){
// 			jQuery('.navigationarea').css({
// 				position : 'fixed',
// 				top : '0',
// 				margin : '0'
// 			});
// 			jQuery('.navigationarea').addClass('stick');
// 		}
// 		if(jQuery(window).scrollTop() < scrollTop){
// 			jQuery('.navigationarea').removeClass('stick');
// 			jQuery('.navigationarea').removeAttr('style');
// 		}
// 	});

// 	/*------------ MultiSelect -----------*/
// 	// jQuery(function() {
// 	// 	console.log(jQuery('.multiselect-ui, .select-countries'));
// 	//     jQuery('.multiselect-ui, .select-countries').multiselect({
// 	//         includeSelectAllOption: false
// 	//     });
// 	// });
// 	/*---------------------------------------
// 			Vertical mCustom  Scroll
// 	---------------------------------------*/
// 	// jQuery(".mCustomScrollbartable").mCustomScrollbar({
// 	// 	axis:"y" // vertical and horizontal scrollbar
// 	// });
// 	/*---------------------------------------
// 			Nice Scroll
// 	---------------------------------------*/
// 	// $(function() {
//   //   	$(".side-holder").niceScroll(".nice-wrapper", {
// 	// 		cursorwidth: "12px",
// 	// 		bouncescroll: false,
// 	// 		cursordragspeed: 0.3,
// 	// 		smoothscroll: true,
// 	// 		enablemousewheel: true,
// 	// 		enablekeyboard: true,
// 	// 		railoffset: false,
// 	// 		scrollspeed: 100,
// 	// 		preservenativescrolling: false
//   //   	});
//   //   });
// 	/*------------ Audience Demographic -----------*/
// });