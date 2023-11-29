function toggleElements() {
    var element1 = document.getElementById('destilados');
    var element2 = document.getElementById('fermentados');

    if (element1.style.display === "none") {
        element1.style.display = "block";
        element2.style.display = "none";
        
    }else{
        element1.style.display = "none";
        element2.style.display = "block";

    }
    
}