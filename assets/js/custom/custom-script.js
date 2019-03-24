
    
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
