$(document).ready(function(){

    $("[name=nome]").keyup(function () { 
    	var $this = $( this ); //armazeno o ponteiro em uma variavel
		    var valor = $this.val().replace(/[^a-z0-9 ]+/gi,'');
		    while (valor.indexOf('  ') != -1) valor = valor.replace('  ', ' ');
		    $this.val( valor );
    });
    
    $('#telefone').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask("00.000-000");
    
    
    $('form').validate({
        rules:{
            nome:{
                required:true

            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            cep:{
                required:true,
            },
            cpf:{
                required:true,
                reverse: true
            },
        },
        
        messages:{
            nome:"Por favor, insira o seu nome completo",
            email:"Verifique se digitou seu e-mail corretamente",
            telefone:"Este campo é obrigatório",
            cep:"Este campo é obrigatório",
            cpf:"Este campo é obrigatório",
        },
        submitHandler:function(form){
            console.log(form)
        },
        invalidHandler:function(eventos, validador){
            let camposIncorretos= validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)
            }
            else{
                form.subit()
            }
        }
    })

    
})