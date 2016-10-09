// JavaScript Document
var isViewing = false;
function expandBox(boxId) {
	
  	var boxImg = $(boxId).next();
  	var parentId = $(boxId).parent();
	var boxImgFull = $(boxId).siblings(".dwn-full-img");
    console.log(boxImgFull);
	
	console.log(parentId);
	
  	// $(boxImg).css('height', '500px');
  	// $(boxImg).css('width', '500px');
    $(boxImg).hide();

  	// $(boxImg).css('z-index', '20001');
	// $(boxImg).css('top', '202px');
	// $(boxImg).css('left', '102px');
	$(boxImg).css('border-radius', '10px');
	
	var boxTitle = $(parentId).find('.dwn-main-title');
	console.log(boxTitle);
	
	
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
	
	$(boxId).css('height', '1100px');
	$(boxId).css('width', '1156px');
	$(boxId).css('height', '800px');
	$(boxId).css('top', '62px');
	$(boxId).css('left', '62px');
	$(boxId).css('z-index', '20000');
	$('#shade_box').show();
	$('#close_btn').show();
    $(boxImgFull).show(500);


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
    $('.dwn-full-img').hide();
  $('#shade_box').hide();
  $('#close_btn').hide();
  $('.dwn-main-body').hide();
  $('.dwn-main-subtitle').hide();
  $('#menu').hide();
  moveRight();
  
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
  
    $('#save-btn').click(function() {
	  $('#saver').hide();
	  $('#menu').show();
		isViewing = true;
  });
  
  
  
   $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
		setTimeout(moveLeft, 5000);
    }

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
