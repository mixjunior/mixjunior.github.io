/* script.js */

$(document).ready(function() {
    var $boat = $('#boat');

    $('.island').click(function() {

        $('.info').hide();

        $("#prime-island").css("opacity","0.6");
        $(".island").css("opacity","0.6");
        $(this).css("opacity","1");


        var islandOffset = $(this).offset();
        var mapOffset = $('#map').offset();
        var top = islandOffset.top - mapOffset.top + $(this).height() / 2 - $boat.height() / 2;
        var left = islandOffset.left - mapOffset.left + $(this).width() / 2 - $boat.width() / 2;

        $boat.css({
            top: top+40 + 'px',
            left: left+20 + 'px'
        });

        // Esconder todas as informações
        $('.info').hide();
        $('#info-panel').hide();

        var cor=$(this).attr("data-cor");

        $("#info-panel").css("background",cor);

        // Exibir a informação correta após a animação
        var infoId = '#' + $(this).attr('id').replace('island', 'info');

        setTimeout(function() {
            $('.info').hide();
            $('#info-panel').fadeIn();
            $(infoId).fadeIn();
        }, 2000); // Tempo de transição do barco
    });

    

    $('.fechar-panel').click(function(e) {
        
            $('#info-panel').hide();
            $('#info-panel').fadeOut();

            $('.info').hide();

    });

    // Ocultar o painel de informações ao clicar fora dele
    $('#map').click(function(e) {
        if (!$(e.target).closest('.island').length && !$(e.target).closest('#info-panel').length) {

            $('#info-panel').hide();
            $('#info-panel').fadeOut();

            $('.info').hide();

        }
    });

    
});
