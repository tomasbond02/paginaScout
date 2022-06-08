const baseDeDatos = [
    {
        id: 1,
        nombre: '',
        description: '',
        precio: 0,
        imagen: '',
        categoria: ''
    }

];



let carrito = [];
let botonCarrito = document.getElementById("boton");
let mostrando = document.getElementById("contenedorP");
let mostrarTexto = document.getElementById("texto");
let mensaje ="";
function prueba(){
    
    if (mostrando.style.backgroundColor == "red"){
        mostrarTexto.style.fontSize = "150px";
    }
    else if (mostrando.style.backgroundColor == "blue") {
        mensaje.innerHTML="<p>hola puta</p>";
    }
    
}

botonCarrito.addEventListener("click",prueba);

function añadirCarrito(index){
    carrito.push(Object.assign(baseDeDatos[index]));
}