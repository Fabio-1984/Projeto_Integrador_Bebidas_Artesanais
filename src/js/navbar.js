function navBar() {
    var x = document.getElementById("menu");
    if (x.className === "menuResp") {
      x.className += " responsive";
    } else {
      x.className = "menuResp";
    }
  }


  var btnDestilados = document.getElementById("destilados");

  btnDestilados.addEventListener('click', function () {
    var bDestilada = document.getElementById("mudarBebidas")
    var bDestilada1 = document.getElementById("mudarBebidas1")

    bDestilada.classList.toggle("visivel")
    bDestilada1.classList.toggle("hide")
  })


  var btnFermentados = document.getElementById("fermentados");

  btnFermentados.addEventListener('click', function () {
    var bFermentada = document.getElementById("mudarBebidas")
    var bFermentada1 = document.getElementById("mudarBebidas1")

    bFermentada.classList.toggle("hide")
    bFermentada1.classList.toggle("visivel")
  })