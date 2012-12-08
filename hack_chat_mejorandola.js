$('#col2').remove();
//$('.cont_hilo2').remove();
$('#col1').css({
    "width" : "100%",
    "display" : "inline-block"
})
$('#video').css({
    "width" : "72.5%",
    "display" : "inline-block"
})
$('#opciones').css({
    "width" : "25.5%",
    "display" : "inline-block",
    "height" : "100%",
    "vertical-align" : "top"
})
$("#opciones").mouseover(function(){
	$(this).width("60%");
}).mouseout(function(){
	$(this).width("25.5%");
})
