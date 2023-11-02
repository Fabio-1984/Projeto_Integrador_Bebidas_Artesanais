//--------Responsividade da Barra de Navegação----------//

function navBar() {
    var x = document.getElementById("menu");
    if (x.className === "menuResp") {
        x.className += " responsive";
    } else {
        x.className = "menuResp";
    }
}

//------- Exibição Ícone Campo Obrigatório -------//

function mostrarPopUp(input, svg) {

    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => { 
        svg.style.display='inline';
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener('blur', () => {
        svg.style.display='none';
    })
}

//------------Função Validação de CPF ---------------//

function validaCPF(cpf) {
    let Soma = 0
    let Resto = 0

    let strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
        return false
    
    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
        ].indexOf(strCPF) !== -1)
    return false

    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)) )
    return false

    Soma = 0

    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11)) 
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false
    return true
    
}

//------Função Armazenamento de dados para Envio------//

function GetData(){
    let nomeDoUsuario = usernameCadastro.value;
    let emailDoUsuario = emailCadastro.value;
    let cpfDoUsuario = cpfCadastro.value;
    let enderecoDoUsuario = enderecoCadastro.value;
    let cidadeDoUsuario = cidadeCadastro.value;
    let estadoDoUsuario = estadoCadastro.value;
    let cepDoUsuario = cepCadastro.value;
    let senhaDoUsuario = confirmarSenhaCadastro.value;
}



//------------------ Validação "NOME" -------------//

let usernameCadastro = document.getElementById("username-cadastro");
let usernameHelper = document.getElementById("username-helper");
let usernameSvg = document.getElementById("svg-username-cadastro");

usernameCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if (valor.length <3){
        usernameCadastro.classList.remove('correct');
        usernameCadastro.classList.add('error');
        usernameHelper.innerText = 'Seu nome deve ter 3 ou mais caracteres'
        usernameHelper.classList.add('visible')
    } 
    else {
    //Estilos dinamicos caso o valor seja válido
        usernameCadastro.classList.remove('error');
        usernameHelper.classList.remove('visible');
        usernameCadastro.classList.add('correct');  
    }
})

mostrarPopUp(usernameCadastro, usernameSvg);

//------------------ Validação "EMAIL" -------------//

let emailCadastro = document.getElementById("email-cadastro");
let emailHelper = document.getElementById("email-helper");
let emailSvg = document.getElementById("svg-email-cadastro");

emailCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if(valor.includes('@') && valor.includes('.')) {
        //Estilos dinamicos caso o valor seja válido
        emailCadastro.classList.remove('error');
        emailHelper.classList.remove('visible');
        emailCadastro.classList.add('correct');
    } 
    else {
    //Estilos dinamicos caso o valor não seja válido
        emailCadastro.classList.remove('correct');
        emailCadastro.classList.add('error');
        emailHelper.innerText = 'Digite um e-mail válido.'
        emailHelper.classList.add('visible')
    }
})

mostrarPopUp(emailCadastro, emailSvg);

//------------------ Validação "CPF" -------------//

let cpfCadastro = document.getElementById("cpf-cadastro");
let cpfHelper = document.getElementById("cpf-helper");
let cpfSvg = document.getElementById("svg-cpf-cadastro");

cpfCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value

    if(isNaN(cpfCadastro.value)) {
        //Estilos dinamicos caso o valor não seja válido
        cpfCadastro.classList.remove('correct');
        cpfCadastro.classList.add('error');
        cpfHelper.innerText = 'Digite apenas números.';
        cpfHelper.classList.add('visible');
    }
    else if (valor.length < 11) {
        cpfCadastro.classList.remove('correct');
        cpfCadastro.classList.add('error');
        cpfHelper.innerText = 'CPF Incompleto.';
        cpfHelper.classList.add('visible');
    }
    else if (!validaCPF(cpfCadastro.value)){
        cpfCadastro.classList.remove('correct');
        cpfCadastro.classList.add('error');
        cpfHelper.innerText = 'Digite um CPF válido.';
        cpfHelper.classList.add('visible')
    }
    else {
    //Estilos dinamicos caso o valor seja válido
        cpfCadastro.classList.remove('error');
        cpfHelper.classList.remove('visible');
        cpfCadastro.classList.add('correct');
    }
})

mostrarPopUp(cpfCadastro, cpfSvg);

//------------------ Validação "ENDEREÇO" -------------//

let enderecoCadastro = document.getElementById("endereco-cadastro");
let enderecoHelper = document.getElementById("endereco-helper");
let enderecoSvg = document.getElementById("svg-endereco-cadastro");

enderecoCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if(valor.length < 10) {
        //Estilos dinamicos caso o valor não seja válido
        enderecoCadastro.classList.remove('correct');
        enderecoCadastro.classList.add('error');
        enderecoHelper.innerText = 'Digite o endereço completo.'
        enderecoHelper.classList.add('visible')
    }
    
    else {
    //Estilos dinamicos caso o valor seja válido
        enderecoCadastro.classList.remove('error');
        enderecoHelper.classList.remove('visible');
        enderecoCadastro.classList.add('correct');  
    }
})

mostrarPopUp(enderecoCadastro, enderecoSvg);

//------------------ Validação "CIDADE" -------------//

let cidadeCadastro = document.getElementById("cidade-cadastro");
let cidadeHelper = document.getElementById("cidade-helper");
let cidadeSvg = document.getElementById("svg-cidade-cadastro");

cidadeCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if(valor.length < 3) {
        //Estilos dinamicos caso o valor não seja válido
        cidadeCadastro.classList.remove('correct');
        cidadeCadastro.classList.add('error');
        cidadeHelper.innerText = 'O nome da Cidade deve ter mais de 3 letras.'
        cidadeHelper.classList.add('visible')
    } 
    else {
    //Estilos dinamicos caso o valor seja válido
        cidadeCadastro.classList.remove('error');
        cidadeHelper.classList.remove('visible');
        cidadeCadastro.classList.add('correct');  
    }
})

mostrarPopUp(cidadeCadastro, cidadeSvg);

//------------------ Validação "ESTADO" -------------//

let estadoCadastro = document.getElementById("estado-cadastro");
let estadoHelper = document.getElementById("estado-helper");
let estadoSvg = document.getElementById("svg-estado-cadastro");

estadoCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if(valor.length < 3) {
        //Estilos dinamicos caso o valor não seja válido
        estadoCadastro.classList.remove('correct');
        estadoCadastro.classList.add('error');
        estadoHelper.innerText = 'O nome do Estado deve ter mais de 3 letras.'
        estadoHelper.classList.add('visible')
    } 
    else {
    //Estilos dinamicos caso o valor seja válido
        estadoCadastro.classList.remove('error');
        estadoHelper.classList.remove('visible');
        estadoCadastro.classList.add('correct');  
    }
})

mostrarPopUp(estadoCadastro, estadoSvg);

//------------------ Validação "CEP" -------------//

let cepCadastro = document.getElementById("cep-cadastro");
let cepHelper = document.getElementById("cep-helper");
let cepSvg = document.getElementById("svg-cep-cadastro");

mostrarPopUp(cepCadastro, cepSvg);

cepCadastro.addEventListener("change", function(evento) {

    let valor = evento.target.value

    if(isNaN(cepCadastro.value)) {
        //Estilos dinamicos caso o valor não seja válido
        cepCadastro.classList.remove('correct');
        cepCadastro.classList.add('error');
        cepHelper.innerText = 'Digite somente números.';
        cepHelper.classList.add('visible');
        
    } else if(valor.length < 8) {
        cepCadastro.classList.remove('correct');
        cepCadastro.classList.add('error');
        cepHelper.innerText = 'CEP Incompleto.';
        cepHelper.classList.add('visible');
    } else {
    //Estilos dinamicos caso o valor seja válido
        cepCadastro.classList.remove('error');
        cepHelper.classList.remove('visible');
        cepCadastro.classList.add('correct');  
    }  
})

//------------------ Validação "SENHA" -------------//

let senhaCadastro = document.getElementById("senha-cadastro");
let senhaHelper = document.getElementById("senha-helper");
let senhaSvg = document.getElementById("svg-senha-cadastro");
let senhaUsuario = senhaCadastro.value;

senhaCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if (valor.length < 8){
        senhaCadastro.classList.remove('correct');
        senhaCadastro.classList.add('error');
        senhaHelper.innerText = 'A Senha precisa ter mais de 8 caracteres.';
        senhaHelper.classList.add('visible');
    } 
    else {
    //Estilos dinamicos caso o valor seja válido
        senhaCadastro.classList.remove('error');
        senhaHelper.classList.remove('visible');
        senhaCadastro.classList.add('correct');  
    }
})

mostrarPopUp(senhaCadastro, senhaSvg);

//------------------ Validação "CONFIRMAR SENHA" -------------//

let confirmarSenhaCadastro = document.getElementById("confirmar-senha-cadastro");
let confirmarSenhaHelper = document.getElementById("confirmar-senha-helper");
let confirmarSenhaSvg = document.getElementById("svg-confirmar-senha-cadastro");

confirmarSenhaCadastro.addEventListener("change", function(evento){

    let valor = evento.target.value 

    if (senhaCadastro.value !== confirmarSenhaCadastro.value){
        confirmarSenhaCadastro.classList.remove('correct');
        confirmarSenhaCadastro.classList.add('error');
        confirmarSenhaHelper.innerText = 'A senha precisa ser idêntica.';
        confirmarSenhaHelper.classList.add('visible');
    } 
    else {
    //Estilos dinamicos caso o valor seja válido
        confirmarSenhaCadastro.classList.remove('error');
        confirmarSenhaHelper.classList.remove('visible');
        confirmarSenhaCadastro.classList.add('correct');  
    }
})

mostrarPopUp(confirmarSenhaCadastro, confirmarSenhaSvg);

//-------------------Botão "Submit"-----------------//