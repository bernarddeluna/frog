//Colors input
var selectColors = function() {

	$(".editor input").keypress( function() {
		contentColors(this);
	});

	$(".editor input").blur( function() {
		contentColors(this);
	});

	var contentColors = function(arg) {
		var self = $(arg).parent().find(".prefix");
		var color = $(arg).val();
		
		if ( color.length >= 5 ) {
			$(self).attr("style", "background: #" + color.replace("#", "") + "!important" );
		};
	}

}

//Generate coding css
var pegaValor = function() {
	var elemento = $(".val-cores");
	var str = '';

	for( i = 0; i < elemento.length; i++ ){
    var e = elemento[i];
    var source = "	" + e.name + ": " + e.value + ';\n';
    str += source;
  }

  $("#code").text( "." + $(".current a").text().replace(" ", "-").toLowerCase() + " {\n" + str + "}" );

  $(".CodeMirror:first").show();
  $(".CodeMirror").hide();
}

$("#gerar-coding").click(function(){
	pegaValor();
	Editor();
})

//Create elemments
$(".btn-new").click(function() {
	var nameElemment = window.prompt("", "ex: Header");

	$(".elements-list").append('<li class="elements-item"><a class="elements-lnk" href="#' + nameElemment.toLowerCase().replace(" ", "-") +'" title="' + nameElemment +'">' + nameElemment +'</a></li>')

	return false;

})


//Abas Elements
// $(function(){
// 	$(".editor:first").show();
// 	$(".elements-nav a").click(function(){ 
// 		$(".editor").hide(); 
// 		var div = $(this).attr('href'); 
// 		$(div).fadeIn(""); 
// 			$(".elements-nav a").parent().removeClass('current'); 
// 			$(this).parent().addClass('current'); 
// 		return false;
// 	})
// });

//Syntax highlighter
var Editor = function() {
	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {});
}

//GeraEditor(form);
Editor();
selectColors();