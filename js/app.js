$(".side_menu button").hover(
function(){
  $(this).filter(':not(:animated)').animate({
     marginLeft:'0em'
  },'slow');
},
function() {
  $(this).animate({
     marginLeft:'-5em'
  },'slow');
});


$(".imgWrap").hover(function(){
    
        $(this).filter(':not(:animated)').animate({opacity: 0.50},'fast');
        $(this).find(".textWrap").stop().show("fast");
        },
     function(){
        
        $(this).animate({opacity: 100},'fast');
        $(this).find(".textWrap").stop().hide('fast');    
});


