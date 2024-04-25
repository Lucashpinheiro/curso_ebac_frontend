$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideToggle();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#fazer-tarefa').val();
        $(`<li>${tarefa}</li>`).appendTo('ul');
        $('#fazer-tarefa').val('');

        $('li').on('click', function(){
            const clicar = $(this).addClass('decoration');
        });
    });
});