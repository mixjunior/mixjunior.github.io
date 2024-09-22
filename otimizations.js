$(document).ready(function() {

	var cont=0;

	function incluirElementos(cont){

		if(cont == 0){

			//insere as fontes
			$('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-..." crossorigin="anonymous">');
			$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" type="text/css" media="all">');


			cont = 1;

		}


		return cont;

	}

	//eventos desktop
	$(document).on("mousemove", function(event) {

		cont=incluirElementos(cont);
    	
    });

    $(document).on("mouseleave", function() {

    	cont=incluirElementos(cont);
    	
      
    });

    $(document).on("scroll", function() {

    	cont=incluirElementos(cont);
    	
    });	

    //Eventos mobile
    $(document).on("touchstart", function(event) {

    	cont=incluirElementos(cont);
    	
    });

    $(document).on("touchmove", function() {

    	cont=incluirElementos(cont);
    	
      
    });

    $(document).on("touchend", function() {

    	cont=incluirElementos(cont);
    	
    });


});