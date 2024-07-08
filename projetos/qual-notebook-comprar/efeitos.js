var $doc = $('html, body');
$('#categorias-miniatura a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$(document).ready(function(){

	

	$(".direito").click(function() {

		var valoratual=$(this).attr('value');
		var valornovo=1;

		if(valoratual == '3'){

			valornovo=1;

		}else{

			valornovo=parseInt(valoratual)+1;


		}

		$(this).attr('value',valornovo);
		$("#comentariosm .comentario").hide();
		$("#"+valornovo).show();

	});

	$(".esquerdo").click(function() {

		var valoratual=$(this).attr('value');
		var valornovo=3;

		if(valoratual == '1'){

			valornovo=3;

		}else{

			valornovo=parseInt(valoratual)-1;


		}

		$(this).attr('value',valornovo);
		$("#comentariosm .comentario").hide();
		$("#"+valornovo).show();

	});

	


	//carregar elementos
	var verificar_elemento=0;


$('body').bind('touchmove', function(e) { 
    console.log($(this).scrollTop()); // Replace this with your code.


		//if(verificar_elemento == 0){

			//carregar css
			//$('head').append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:regular,bold&subset=Latin">');

			/*$('head').append('<link rel="stylesheet" type="text/css" href="style.css?d=1" media="screen and (min-width: 1020px)">');
			$('head').append('<link rel="stylesheet" type="text/css" href="stylem.css?d=1" media="screen and (max-width: 699px)">');
			$('head').append('<link rel="stylesheet" type="text/css" href="stylet.css?d=1" media="screen and (min-width: 700px) and (max-width: 1019px)">');
			$('head').append('<link rel="stylesheet" type="text/css" href="styleb.css?d=1" media="screen and (min-width: 2211px)">');*/

			//carregar imagem
			/*$(".imagem").each(function( index ) {

  				var src=$(this).attr("data-src");
  				var width=$(this).attr("width");
  				var height=$(this).attr("height");

  				$(this).html('<img src="'+src+'" width="'+width+'" height="'+height+'">');

			});

		verificar_elemento=1;
	

}*/
});





	$(document).on( "mousemove", function() {

	
		//if(verificar_elemento == 0){

			//carregar css
			//$('head').append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:regular,bold&subset=Latin">');

			/*$('head').append('<link rel="stylesheet" type="text/css" href="style.css" media="screen and (min-width: 1020px)">');
			$('head').append('<link rel="stylesheet" type="text/css" href="stylem.css" media="screen and (max-width: 699px)">');
			$('head').append('<link rel="stylesheet" type="text/css" href="stylet.css" media="screen and (min-width: 700px) and (max-width: 1019px)">');
			$('head').append('<link rel="stylesheet" type="text/css" href="styleb.css" media="screen and (min-width: 2211px)">');*/

			//carregar imagem
			/*$(".imagem").each(function( index ) {

  				var src=$(this).attr("data-src");
  				var width=$(this).attr("width");
  				var height=$(this).attr("height");

  				$(this).html('<img src="'+src+'" width="'+width+'" height="'+height+'">');

			});

		verificar_elemento=1;
	}*/

	});



	var screenSize = window.innerWidth;


    if(screenSize > 1020){



    	$('body').load("desktop.html");
    	


    }else{

		$('body').load("mobile.html");

    }

$( window ).on( "resize", function() {

	

  var screenSize = $(this).width();


    if(screenSize > 900){



    	$('body').load("desktop.html");
    	


    }else{

		$('body').load("mobile.html");

    }

/*     $(".imagem").each(function( index ) {



  				var src=$(this).attr("data-src");
  				var width=$(this).attr("width");
  				var height=$(this).attr("height");
  				var url=$(this).attr("data-url");

  				console.log('zawarudoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!');

  				if(url != null){

  						$(this).html('<a href="'+$(this).attr("data-url")+'"><img src="'+src+'" width="'+width+'" height="'+height+'"></a>');

  				}else{

  						$(this).html('<img src="'+src+'" width="'+width+'" height="'+height+'">');

  				}

  				

			});*/

} );

	

$(window).on('load', function() {


	console.log("carregou7");

	setTimeout(carregarElementos(), 15000);




});

function carregarElementos(){



	  $(".imagem").each(function( index ) {



  				var src=$(this).attr("data-src");
  				var width=$(this).attr("width");
  				var height=$(this).attr("height");
  				var url=$(this).attr("data-url");

  				console.log('kono dio da!');

  				if(url != null){

  						$(this).html('<a href="'+$(this).attr("data-url")+'"><img src="'+src+'" width="'+width+'" height="'+height+'"></a>');

  				}else{

  						$(this).html('<img src="'+src+'" width="'+width+'" height="'+height+'">');

  				}

  				

			});
$('head').append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins:regular,bold&subset=Latin">');



 



    console.log("carregou17");

}

	



});
