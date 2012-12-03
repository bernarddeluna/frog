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
	var str = "";

	for( i = 0; i < elemento.length; i++ ){
        var e = elemento[i];
        var source = "	" + e.name + ": " + e.value + ';\n';
        str += source;
      }

    var rpl = str.replace("background-color: ", "background-color: #");
    var sourceStr = rpl.replace("color: ", "color: #");

    console.log( sourceStr );

    $("#css-demo").empty();

    $("#code").text( "." + $(".current a").text().replace(" ", "-").toLowerCase() + " {\n" + sourceStr + "}" );
    $("#css-demo").append( "<style type='text/css'> .view-demo {\n" + sourceStr + " } \n </style> " );

    $(".CodeMirror:first").show();
    $(".CodeMirror").hide();
}


//Button Gerar Coding
var buttonCodding = function() {
      pegaValor();
      Editor();
}

var count = 0;
//Create elemments
$(".btn-new").click(function() {
	var nameElemment = window.prompt("", "ex Header");

      var Templated = '<h2>Editor: <span> ' + nameElemment + '</span></h2><div class="columns"><label for="">Color</label><input type="text" value="c60f13" placeholder="Hex: cc8899" name="color" maxlength="6" class="val-cores"/><span class="prefix" style="background: #c60f13">#</span></div><div class="columns"><label for="">background</label><input type="text" value="cc9977" placeholder="Hex:cc8899" name="background-color" maxlength="6" class="val-cores"/><span class="prefix" style="background: #cc9977">#</span></div><div class="columns"><label for="">font-size</label><input type="number" value="12px" placeholder="12" name="font-size" class="val-cores"/><span class="sufix">px</span></div><div class="columns"><label for="">line-height</label><input type="number" value="2px" placeholder="2" name="line-height" class="val-cores"/><span class="sufix">px</span></div><div class="columns"><label for="">border-radius</label><input type="number" value="5px" placeholder="5" name="border-radius" class="val-cores"/><span class="sufix">px</span></div><div class="columns"><label for="">text-decoration</label><select placeholder="underline" name="text-decoration" class="val-cores"><option value="none">None</option><option value="underline">Underline</option></select></div><div class="columns"><label for="">font-style</label><select placeholder="italic" name="font-style" class="val-cores"><option value="normal">Normal</option><option value="italic">Italic</option></select></div><div class="row"><button onclick="buttonCodding()" class="btn btn-save" id="gerar-coding-'  + count + '">Salvar</button></div>';

	$(".elements-list").append('<li class="elements-item current"><a class="elements-lnk" href="#' + nameElemment.toLowerCase().replace(" ", "-") +'" title="' + nameElemment +'">' + nameElemment +'</a></li>')

      $("#content-editor").append( '<section class="editor" id="' + nameElemment.toLowerCase().replace(" ", "-") + '">' + Templated + '</section>' );

      selectColors();
      //buttonCodding();
      abasEditor();

      count++;

	return false;

})


//Abas Elements
var abasEditor = function() {
  $(".editor:first").show();
  $(".elements-nav a").click(function(){
    $(".editor").hide();
    console.log('hide');
    var div = $(this).attr('href');
    $(div).show();
      $(".elements-nav a").parent().removeClass('current');
      $(this).parent().addClass('current');
    return false;
  })
}

//Syntax highlighter
var Editor = function() {
	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {});
}

//GeraEditor(form);
Editor();
selectColors();