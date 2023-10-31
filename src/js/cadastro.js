//--------Responsividade da Barra de Navegação----------//

function navBar() {
    var x = document.getElementById("menu");
    if (x.className === "menuResp") {
        x.className += " responsive";
    } else {
        x.className = "menuResp";
    }
}

//------- Validação do Nome do Usuário -------//

let usernameCadastro = document.getElementById("username-cadastro");
let 