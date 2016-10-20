// JavaScript Document
var isViewing = false;

//This function is callend when a skier's box is pressed
//the function will expand the box and enlarge the picture.
function expandBox(boxId) {

    //Selects the image for the selected skiier
  	var boxImg = $(boxId).next();

    //selects the parent element of the box
  	var parentId = $(boxId).parent();

    //selects the full image that is currently hidden
	var boxImgFull = $(boxId).siblings(".dwn-full-img");

    //hides the profile image
    $(boxImg).hide();

	$(boxImg).css('border-radius', '10px');
	var boxTitle = $(parentId).find('.dwn-main-title');

	//Shows the title for the box and adds these css properties
	$(boxTitle).css('z-index', '20002');
	$(boxTitle).css('top', '70px');
	$(boxTitle).css('left', '62px');
	$(boxTitle).css('font-size', '100px');
	$(boxTitle).css('width', '1156px');
	$(boxTitle).css('text-align', 'center');
	
	
	var boxBody = $(parentId).find('.dwn-main-body');
	$(boxBody).show();	
	
	var boxSub = $(parentId).find('.dwn-main-subtitle');
	$(boxSub).show();

    //makes box go fullscreen
	$(boxId).css('height', '1100px');
	$(boxId).css('width', '1156px');
	$(boxId).css('height', '800px');
	$(boxId).css('top', '62px');
	$(boxId).css('left', '62px');
	$(boxId).css('z-index', '20000');
	$('#shade_box').show();
	$('#close_btn').show();
    $(boxImgFull).show(500);

    //Clicking the close button will cause the large
    //box to go hidden along with it's content
    $('#close_btn').click(function() {
	    $(boxId).removeAttr('style');
	    $(boxImg).removeAttr('style');
        $(boxTitle).removeAttr('style');
        $(boxBody).hide();
        $('#close_btn').hide();
        $('#shade_box').hide();
        $('.dwn-main-subtitle').hide();
        $('.dwn-full-img').hide();
    });
  
}

$(document).ready(function() {

    //Intially hides these elements
    $('.dwn-full-img').hide();
    $('#shade_box').hide();
    $('#close_btn').hide();
    $('.dwn-main-body').hide();
    $('.dwn-main-subtitle').hide();
    $('#menu').hide();

    //fires the opening slide show
    moveRight();

    //These listen for a click and expands the related element
    $('#dwn_item_1').click(function() {
        expandBox('#item_box_1');
    });
  
    $('#dwn_item_2').click(function() {
	  expandBox('#item_box_2');
    });
  
    $('#dwn_item_3').click(function() {
	  expandBox('#item_box_3');
    });
  
    $('#dwn_item_4').click(function() {
	  expandBox('#item_box_4');
    });
  
    $('#dwn_item_5').click(function() {
	  expandBox('#item_box_5');
    });
  
    $('#dwn_item_6').click(function() {
	  expandBox('#item_box_6');
    });

    //Click listener for main begin button
    $('#save-btn').click(function() {
        $('#saver').hide();
	    $('#menu').show();
		checkInactivity();
    });
  
  
  
    $('#checkbox').change(function(){

        setInterval(function () {
            moveRight();
        }, 3000);
    });

    //gets slider properties
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

    //sets the slider properties for element
	$('#slider').css({ width: slideWidth, height: slideHeight });
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    //Adds the  next slide to the
    $('#slider ul li:last-child').prependTo('#slider ul');

    //Moves the slide left
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
		setTimeout(moveLeft, 5000);
    }

    //moves the slide right
    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
		setTimeout(moveRight, 5000);
    }

	
});


/*
COOKIES
 */

//
// // create an instance of the Date object
// var now = new Date();
// // fix the bug in Navigator 2.0, Macintosh
//
// /*
//  cookie expires in one year (actually, 365 days)
//  365 days in a year
//  24 hours in a day
//  60 minutes in an hour
//  60 seconds in a minute
//  1000 milliseconds in a second
//  */
//
// function runCounter(countName)
// {
//     now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
//     var visits = getCookie(countName);
//
//     // if the cookie wasn't found, this is your first visit
//     if (!visits) {
//         visits = 1; // the value for the new cookie
//         console.log('first time making cookie');
//     } else {
//         // increment the counter
//         visits = parseInt(visits) + 1;
//         console.log("Made cookies " + visits + " times");
//     }
//     // set the new cookie
//     setCookie(countName, visits, now);
// }
//
// function getCookie(name) {
//     var dc = document.cookie;
//     var prefix = name + "=";
//     var begin = dc.indexOf("; " + prefix);
//     if (begin == -1) {
//         begin = dc.indexOf(prefix);
//         if (begin != 0) return null;
//     } else
//         begin += 2;
//     var end = document.cookie.indexOf(";", begin);
//     if (end == -1)
//         end = dc.length;
//     return unescape(dc.substring(begin + prefix.length, end));
// }
//
// function setCookie(name, value, expires, path, domain, secure) {
//     var curCookie = name + "=" + escape(value) +
//         ((expires) ? "; expires=" + expires.toGMTString() : "") +
//         ((path) ? "; path=" + path : "") +
//         ((domain) ? "; domain=" + domain : "") +
//         ((secure) ? "; secure" : "");
//     document.cookie = curCookie;
//     console.log(curCookie);
//     console.log(document.cookie);
// }

// -->
