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

	for( i = 0; i < elemento.length; i++ ){
    var e = elemento[i];
    console.log( e.name + ": " + e.value );
    $("#code").append( e.name + ": " + e.value + '\n\n' )
  }
}

$("#gerar-coding").click(function(){
	pegaValor();
})

selectColors();