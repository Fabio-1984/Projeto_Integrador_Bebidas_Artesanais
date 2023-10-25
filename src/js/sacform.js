//VALIDAÇÃO
let heightBox = document.querySelector('.sacCad');
let nomeInput = document.querySelector('#nome');
let nomeLabel = document.querySelector('td[for="nome"]');
let nomeHelper = document.querySelector('#nome-helper');
let nomeRequired = document.querySelector('.nomeRequired');
let submitButton = document.querySelector('#submit');
document.querySelector('#submit').disabled = true;
submitButton.classList.add('butErr');
nomeRequired.classList.add('nomeRequiredVisible');

//VALIDAR VALOR

nomeInput.addEventListener("change", function(evento) {
    console.clear();
    let valor = evento.target.value;
    console.log(valor);

    if(valor.length == 0) {
        nomeInput.classList.remove("correct");
        nomeInput.classList.remove("error");
        nomeHelper.classList.remove("visible");
        heightBox.classList.remove('heightErr');
        submitButton.classList.add('butErr');
        nomeRequired.classList.add('nomeRequiredVisible');
    }
    else if(valor.length < 5) {
        nomeInput.classList.remove("correct");
        nomeInput.classList.add('error');
        nomeHelper.innerText = "Nome Invalido! Digite corretamente seu nome completo.";
        nomeHelper.classList.add('visible');
        heightBox.classList.add('heightErr');
        submitButton.classList.add('butErr');
        nomeRequired.classList.add('nomeRequiredVisible');
    }else{
        nomeInput.classList.remove('error');
        nomeHelper.classList.remove('visible');
        nomeInput.classList.add('correct');
        heightBox.classList.remove('heightErr');
        submitButton.classList.remove('butErr');
        document.querySelector('#submit').disabled = true;
        nomeRequired.classList.remove('nomeRequiredVisible');
    }
})