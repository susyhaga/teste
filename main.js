$(document).ready(function(){
7

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#limpar').click(function(){
        $('li').remove('nova-tarefa');

    })

    $('#botao-remover').click(function(){ 
        $('ul li').remove('li');
    })

    $('form').on('submit', function(e){
        e.preventDefault(e);
        const inputNovaTarefa= $('#nova-tarefa').val();
        const novoItem=$('<li></li>');
        $(`

        <div class="line-through">
            <p> ${inputNovaTarefa}</p>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })

    $('ul').on("click","li", function(){ 
        $(this).css({'text-decoration': 'line-through','color':'red'});
    })


})

