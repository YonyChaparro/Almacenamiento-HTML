var btnAlmacenar=document.getElementById("btnAlmacenar");
btnAlmacenar.addEventListener('click', function () {
    console.log("Me presionaron");
    sessionStorage.setItem("nombre", "Yony");
    localStorage.setItem("nombre", "Yony");

});


var btnBorrar=document.getElementById("btnBorrar");
btnAlmacenar.addEventListener('click', function () {
    sessionStorage.clear();
    localStorage.clear();

});

//Recorrer el sessionStorage y el localStorage
//Mostrando las variables como una fila en la tabla del DOM
