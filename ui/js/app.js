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

$(function(){
	$(".abas:first").show();//Fazemos com que a primeira class com o nome abas que demos fica visivel
	$("#nav-abas a").click(function(){ //Falamos que quando clicar no id nos mande para div que correspondende
		$(".abas").hide(); //faz somir as div que nao foram clicadas
		var div = $(this).attr('href'); // variavel para pegar o atributo href para saber em qual id o usuario clicou
		$(div).fadeIn(""); // faz a div correspondente clicada ficar visivel
			$("#nav-abas a").removeClass('current'); // remove a class no link clicado para que nao fica marcado
			$(this).addClass('current'); // adiciona a classe no link clicado para que o usuario saiba em qual link ele esta
		return false;
	})
});

Editor();
selectColors();