function navBar() {
    var x = document.getElementById("menu");
    if (x.className === "menuResp") {
      x.className += " responsive";
    } else {
      x.className = "menuResp";
    }
  }


