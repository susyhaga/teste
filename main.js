//Crie um formulário HTML que possua dois campos numéricos, campo A e campo B e um botão para submeter o formulário.
//Crie uma validação no JavaScript, onde o formulário será válido caso o número B seja maior que o número A.
//Exiba uma mensagem positiva quando o formulário for válido e uma mensagem negativa quando for inválido.
//Suba no Github no repositório do curso em uma branch chamada exercicio_html_js. Copie o link do repositório na plataforma da EBAC.//

/////////////////escopo global///////////////////////////////

const campoForm = document.getElementById('camposAB');
formEvalido =false;


function verifica(a,b){
    const campos = a < b;
    return campos;
}

campoForm.addEventListener('submit', function(e){
    e.preventDefault();
    verifica();

    const numA = document.getElementById('campo-a');
    const numB = document.getElementById('campo-b');
    const mensagemSucesso= ` Parabens! O numero <b>${numB.value}</b> eh maior do que o numero <b>${numA.value}</b>. Seu formulario foi efetuado com sucesso!`;


    formEvalido = verifica(numA.value,numB.value);

    if(formEvalido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        document.querySelector('.sucess-message').innerHTML= mensagemSucesso;
        containerMensagemSucesso.style.display= 'block';
    
        numA.value = '';
        numB.value = '';
        document.querySelector('.error-message').style.display = 'none';
    }else{ 
        document.querySelector('.error-message').style.display = 'block';

        numA.value = '';
        numB.value = '';
    }
})
