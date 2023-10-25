// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");
let idadeInput = document.getElementById("idade");
let idadeHelper = document.getElementById("idade-helper");

// Validar valor do input

usernameInput.addEventListener("change", function(evento) {
    
    let valor = "username: " + evento.target.value;
    console.log(valor);

    if(valor.length < 3) {
        //ESTILO DINAMICO CASO O VALOR NÃO SEJA VALIDO!
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = 'Username inválido.'
        usernameHelper.classList.add("visible");

    }else{
        //ESTILO DINAMICO CASO O VALOR SEJA VALIDO!
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    };
})

//função popup

function mostrarPopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function() {
        label.classList.add("required-popup");
})

// Ocultar popup de campo obrigatório
    input.addEventListener("blur", function() {
        label.classList.remove("required-popup");
})

}

mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);

//email

emailInput.addEventListener("change", function(evento) {

    let valorEmail = "email: " + evento.target.value;
    console.log(valorEmail);

    if(valorEmail.includes ('@') && valorEmail.includes('.com')) {
        //estilo caso seja valido
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailHelper.classList.add("correct");

    }else{
        //estilo não caso seja valido
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = 'E-mail inválido!';
        emailHelper.classList.add("visible");

    };
})