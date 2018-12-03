(function (){
    var session = JSON.parse(localStorage.getItem("sesion"));
    var linkLogin = document.getElementById("sesion");

    if ( session != null ) {
        linkLogin.innerHTML = session.correo;
        linkLogin.href = "#";
    }
})();