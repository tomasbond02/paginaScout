const baseDeDatos = [
    {
        id: 1,
        nombre: 'camisa',
        descripcion: 'esto es una camisa',
        precio: 0,
        imagen: '',
        categoria: 'puto'
    },
    {
        id: 2,
        nombre: 'camisa',
        descripcion: 'esto es una camisa',
        precio: 150,
        imagen: '',
        categoria: 'perro'
    },
    {
        id: 3,
        nombre: 'camisa',
        descripcion: 'esto es una camisa',
        precio: 200,
        imagen: '',
        categoria: 'puto'
    },
    {
        id: 4,
        nombre: 'camisa',
        descripcion: 'esto es una camisa',
        precio: 4000,
        imagen: '',
        categoria: 'perro'
    }

];



let carrito = [];
let listadoDeProductos = document.getElementById("listadoDeProductos")

function agregarProductos(id){
    alert(id)
}

for(let i of baseDeDatos){
    let contenedorProducto = document.createElement("div")
    contenedorProducto.style.borderStyle = 'dashed'
    contenedorProducto.style.margin = '2px'
    contenedorProducto.style.width = '300px'
    contenedorProducto.style.display = 'flex'
    contenedorProducto.style.flexDirection = 'column'
    contenedorProducto.style.justifyContent = 'center'

    let id = document.createElement("p")
    id.innerText = i.id
    id.className = 'ml-2'

    let nombre = document.createElement('p')
    nombre.innerText = i.nombre
    nombre.className = 'ml-2'

    let descripcion = document.createElement('p')
    descripcion.innerText = i.descripcion
    descripcion.className = 'ml-2'

    let categoria = document.createElement('p')
    descripcion.innerText = i.categoria
    descripcion.className = 'ml-2'

    let precio = document.createElement('p')
    descripcion.innerText = i.precio
    descripcion.className = 'ml-2'

    let button = document.createElement("button")
    button.innerHTML = 'agregar'
    button.onclick = function(){
        agregarProductos(i.id)
    }

    contenedorProducto.appendChild(id)
    contenedorProducto.appendChild(nombre)
    contenedorProducto.appendChild(descripcion)
    contenedorProducto.appendChild(precio)
    contenedorProducto.appendChild(categoria)
    contenedorProducto.appendChild(button)

    listadoDeProductos.appendChild(contenedorProducto)
}