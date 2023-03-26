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

function construírFilas() {
    for (let i = 0; i < window.sessionStorage.length; i++) {
    let cuerpoTabla=document.getElementById("cuerpoDeLaTabla");
    let fila=document.createElement("tr");
    let celda=document.createElement("td");
    //Crear nodo de texto
    let texto=document.createTextNode("Aló");
    celda.appendChild(texto);

    fila.appendChild(celda);
    cuerpoTabla.appendChild(fila);
        
    }
}

construírFilas()