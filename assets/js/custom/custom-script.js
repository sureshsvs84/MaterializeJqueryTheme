
    
$(function() {
   "use strict";
$(document).ready(function(){
    var newHeight = $(".main-full").height();
    $(".cardSearchPortal").css('min-height', (newHeight-120));
    
    $("#floating-btn-search").click(function(){
      $( ".cardSearchPortal" ).find('.searchPortal').removeClass('mt-5');
      $( ".cardSearchPortal" ).find('.searchPortal').addClass('mt-1');
      $( ".cardSearchPortal" ).find('.frequentlySearch').removeClass('show').addClass('hide');        
      $( ".cardSearchPortal" ).find('.searchResult').removeClass('hide').addClass('show');
      $( "table.dataTable" ).css("width","100%");
 });
    
    
    
   
});
 $(window).resize(function() {
			 $(".cardSearchPortal").css('min-height', (newHeight-120));
		});   
 
});

$(".db_button").click(function(e){
    $(".db_dropdown").show();
     e.stopPropagation();
    
});

$(".db_dropdown").click(function(e){
 var target = $('.dropdownval').val();
      $('#dropdownMenu1').val(target);
    e.stopPropagation();
});

$(document).click(function(){
    $(".db_dropdown").hide();
});