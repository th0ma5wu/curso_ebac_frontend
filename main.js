$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefa = $('input').val();
        const novaTarefa = $(`<li>${nomeDaTarefa}</li>`);

        $(novaTarefa).appendTo('ol');
        $('input').val('');
    });

    $('ol').on('click', 'li', function(e) {
        e.preventDefault();
        $(this).addClass('riscarTarefa'); 
    });

    /*Por que este não risca os itens adicionados?

    $('li').click(function(e) {
        e.preventDefault();
        $(this).addClass('riscarTarefa');

    });*/
});