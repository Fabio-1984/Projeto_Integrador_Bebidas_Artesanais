//VALIDAÇÃO

let heightBox = document.querySelector('.sacCad');
let nomeInput = document.querySelector('#nome');
let nomeLabel = document.querySelector('td[for="nome"]');
let nomeHelper = document.querySelector('#nome-helper');
let nomeRequired = document.querySelector('.nomeRequired');

let emailInput = document.querySelector('#email');
let emailLabel = document.querySelector('td[for="email"]');
let emailHelper = document.querySelector('#email-helper');
let emailRequired = document.querySelector('.emailRequired');

let mensagemInput = document.querySelector('#mensagem');
let mensagemLabel = document.querySelector('td[for="mensagem"]');
let mensagemHelper = document.querySelector('#mensagem-helper');
let mensagemRequired = document.querySelector('.mensagemRequired');


nomeRequired.classList.add('nomeRequiredVisible');
emailRequired.classList.add('emailRequiredVisible');
mensagemRequired.classList.add('mensagemRequiredVisible');


let submitButton = document.querySelector('#butSubmit');
let butErr = document.querySelector('.butErr');

function disableSubmit() {
    document.getElementById("butSubmit").disabled = true;
    submitButton.classList.add('butErr');
}

function enableSubmit() {
    document.getElementById("butSubmit").disabled = false;
    submitButton.classList.remove('butErr');
}

let nomeLiberar = false;
let emailLiberar = false;
let mensagemLiberar = false;
liberarForm();

//VALIDAR VALOR NOME

nomeInput.addEventListener("change", function(eventoNome) {
    let valor = eventoNome.target.value;
    nomeLiberar = false;
    liberarForm();

    if(valor.length == 0) {
        nomeInput.classList.remove("correct");
        nomeInput.classList.remove("error");
        nomeHelper.classList.remove("visible");
        heightBox.classList.remove('heightErr');
        nomeRequired.classList.add('nomeRequiredVisible');
        nomeLiberar = false;
    }
    else if(valor.length < 5) {
        nomeInput.classList.remove("correct");
        nomeInput.classList.add('error');
        nomeHelper.innerText = "Digite corretamente seu nome.";
        nomeHelper.classList.add('visible');
        heightBox.classList.add('heightErr');
        nomeRequired.classList.add('nomeRequiredVisible');
        nomeLiberar = false;
    }else{
        nomeInput.classList.remove('error');
        nomeHelper.classList.remove('visible');
        nomeInput.classList.add('correct');
        heightBox.classList.remove('heightErr');
        nomeRequired.classList.remove('nomeRequiredVisible');
        nomeLiberar = true;
    }
    liberarForm();
})

//VALIDAR VALOR EMAIL

emailInput.addEventListener("change", function(eventoEmail) {
    let valorEmail = eventoEmail.target.value;
    emailLiberar = false;
    liberarForm();

    if(valorEmail.length == 0){
        emailInput.classList.remove("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        heightBox.classList.remove("heightErr");
        emailRequired.classList.add('emailRequiredVisible');
        emailLiberar = false;
    }
    else if(!valorEmail.includes('@') && !valorEmail.includes('.com')){
        emailRequired.classList.add('emailRequiredVisible');
        emailHelper.innerText = "Digite corretamente seu E-Mail.";
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        heightBox.classList.add("heightErr");
        emailLiberar = false;
    }
    else if(valorEmail.includes('@') && valorEmail.includes('.com')) {
        emailInput.classList.add("correct");
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        heightBox.classList.remove("heightErr");
        emailRequired.classList.remove('emailRequiredVisible');
        emailLiberar = true;
    }
    liberarForm();
})

//VALIDAR VALOR MENSAGEM

mensagemInput.addEventListener("change", function(eventoMensagem) {
    let valorMensagem = eventoMensagem.target.value;
    mensagemLiberar = false;
    liberarForm();

    if(valorMensagem.length == 0) {
        mensagemInput.classList.remove("correct");
        mensagemInput.classList.remove("error");
        mensagemHelper.classList.remove("visible");
        heightBox.classList.remove("heightErr");
        mensagemRequired.classList.add('mensagemRequiredVisible');
        mensagemLiberar = false;
    }
    else if(valorMensagem.length <= 25) {
        mensagemRequired.classList.add('mensagemRequiredVisible');
        mensagemHelper.innerText = "É necessário conter no minimo de 25 caracteres.";
        mensagemInput.classList.remove("correct");
        mensagemInput.classList.add("error");
        mensagemHelper.classList.add("visible");
        heightBox.classList.add("heightErr");
        mensagemLiberar = false;
    }
    else{
        mensagemInput.classList.add("correct");
        mensagemInput.classList.remove("error");
        mensagemHelper.classList.remove("visible");
        heightBox.classList.remove("heightErr");
        mensagemRequired.classList.remove('mensagemRequiredVisible');
        mensagemLiberar = true;
    }
    liberarForm();
})

function liberarForm(){
    if(nomeLiberar == false) {
        disableSubmit();
    }else if (emailLiberar == false) {
        disableSubmit();
    }else if (mensagemLiberar == false) { 
        disableSubmit();
    }else{
        enableSubmit();
    }
}

/*
function liberarForm(){
    if((!nomeLiberar == true && !emailLiberar == true) || (emailLiberar == true && !mensagemLiberar == true)) {
        disableSubmit();
    }else if ((nomeLiberar == true && emailLiberar == true) || (emailLiberar == true && mensagemLiberar == true)) {
        enableSubmit();
    }
}
*/