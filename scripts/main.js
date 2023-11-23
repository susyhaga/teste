//js
// //document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn-cep-finder').addEventListener('click', function(){

//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET',endpoint);
//         xhttp.send();

//     })
// })

//jquery

$(document).ready(function(){

    //mask
    $('#cep').mask('00000-000');
    
    $('#btn-cep-finder').click(function(){
        const cep = $('#cep').val();
        const button = $(this);
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

        //oculta e mostra icon
        $(button).find('i').addClass('d-none')
        $(button).find('span').removeClass('d-none')
        
        // $.ajax(endpoint).done(function(resposta){
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`

        //     $('#address').val(endereco);

        //       //oculta e mostra icon
        //     setTimeout(function(){
        //         $(button).find('i').removeClass('d-none')
        //         $(button).find('span').addClass('d-none')
        //     })
        // })

        //FETCH API

        fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })

        .then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
            $('#address').val(endereco);
        })

        .catch(function(erro){
            alert('Ocorreu um erro. Por favor, tente novamente.');
        })
        .finally(function(){
            
            setTimeout(function(){
                $(button).find('i').removeClass('d-none')
                $(button).find('span').addClass('d-none')
            },1000)
        })
    })

//Criando ERRO
    $('#form-asked').submit(function(event){
        event.preventDefault();
        if($('#name').val().length == 0){
            throw new Error("Digite o nome");
        }
    })
})