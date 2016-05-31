$(".side_menu button").hover(function(){
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
    
        $(this).css("opacity", 0.50);
        $(this).find(".textWrap").css("display","block");
        },
     function(){
        
        $(this).css("opacity", 100);
        $(this).find(".textWrap").css("display","none");    
});


$("#drop_down").click(function(){
    if($(this).attr("src")=="img/location-arrow-icon-icon-ios7-arrow-down-128.png"){
        $(this).attr("src","img/drop_down_left.png");
        $(".drop_menu").animate({right:"0em"},"fast");
//        $(".content").animate({marginRight:"10em"},"fast");
    }else{
        $(this).attr("src","img/location-arrow-icon-icon-ios7-arrow-down-128.png");
        $(".drop_menu").animate({right:"-10em"},"fast");
//      $(".content").animate({marginRight:"0em"},"fast");
    }
});    
    
$(".content").click(function(){
    if($("#drop_down").attr("src")=="img/drop_down_left.png"){
        $("#drop_down").attr("src","img/location-arrow-icon-icon-ios7-arrow-down-128.png");
        $(".drop_menu").animate({right:"-10em"},"fast");
    }
});    

$(function(){
    $('input').focus();
});