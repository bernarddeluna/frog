//Colors input
var selectColors = function() {

	$(".editor input").keypress( function() {
		contentColors(this);
	});

	$(".editor input").blur( function() {
		contentColors(this);
	});

	var contentColors = function(arg) {
		var _self = $(arg).parent().find(".prefix");
		var _color = $(arg).val();
		
		if ( _color.length >= 5 ) {
			$(_self).attr("style", "background: #" + _color.replace("#", "") + "!important" );
		};
	}

}

//Generate coding css
var pegaValor = function() {
	var elemento = $(".val-cores");
	
	$("#code").empty();

	for( i = 0; i < elemento.length; i++ ){
    var e = elemento[i];
    var source = [ e.name + ": " + e.value + '\n' ];

    $("#code").append( source );
  }

  $(".CodeMirror:first").show();
  $(".CodeMirror").hide();
}


var Editor = function() {
	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {});
}

$("#gerar-coding").click(function(){
	pegaValor();
	Editor();
})

Editor();
selectColors();