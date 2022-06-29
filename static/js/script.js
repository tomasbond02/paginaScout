//Tomas Bond - Ivo Garcia Kirst 

var products = [
    {
        id:1,
        name:"Camisa Scout",
        description:"Camisa reforzada t16/36/38",
        price:3500,
        image: "../../templates/img/shop/camisas.jpg",
        categoria: 'Vestimenta'
    },
    {
        id:2,
        name:"Pañuelo Scout",
        description:"Pañuelo scout del grupo scout Rene Favaloro",
        price:300,
        image: "../../templates/img/shop/camisas.jpg",
        categoria: 'Vestimenta'
    },
    {
        id:3,
        name:"Insignia Rover",
        description:"insignia rover de descubrimiento",
        price:40,
        image: "templates/img/shop/camisas.jpg",
        categoria: 'insignias'
    },
    {
      id:4,
      name:"Insignia Caminante",
      description:"Insignia caminante de superacion",
      price:420,
      image: "templates/img/shop/camisas.jpg",
      categoria: 'insignias'
    },
    {
      id:5,
      name:"cuchillo",
      description:"esto es un cuchillo de caza",
      price:340,
      image: "templates/img/shop/camisas.jpg",
      categoria: 'materiales'
    },
    {
      id:6,
      name:"Sombrero scout",
      description:"sombrero recreativo scout",
      price:150,
      image: "templates/img/shop/camisas.jpg",
      categoria: 'vestimentas'
    }
    
  ]
  var carrito = []
  
  function agregarACarrito(index){
     
    let productExist = false;
    carrito.forEach(element => {
         
        if(element.product.id == (index + 1)){
            element.count = element.count + 1
            productExist = true; 
        }
    })
    if(!productExist){
        carrito.push({
            product:Object.assign(products[index]),
            count:1
        })
    }
    alert("Agregado al carrito")
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarProductosCarrito();
  }
  
  function quitarDelCarrito(index){
    carrito.splice(index,1);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarProductosCarrito();
  }

  function modificarProductos(index, cantidad){
    if((carrito[index].count + cantidad)>0){
      carrito[index].count += cantidad
      localStorage.setItem('carrito', JSON.stringify(carrito))
      renderizarProductosCarrito();
    }
    else{
      quitarDelCarrito(index)
    }
  }

  function vaciarCarrito(){
    carrito = []
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarProductosCarrito();
  }
  
  
  function renderizarProductos(){
    let nodoPrincipal = document.getElementById("products")
    if(nodoPrincipal==null){
      return
    }
  
    products.forEach(product => {
        let nodoProducto = document.createElement("div")
        
  
        let divInterno = document.createElement('div')
        divInterno.className = ' m-2 border border-primary interno'

        let divDescrip = document.createElement('div')
        divDescrip.className = 'descrip'

        const title = document.createElement("h3")
        title.innerText = product.name

        const imagen = document.createElement("img")
        imagen.src = product.image

        const description = document.createElement("p")
        description.innerText = product.description

        const categoria = document.createElement('p')
        categoria.innerText = product.categoria
  
        const price = document.createElement("p")
        price.innerText = `$ ${product.price.toString()}`
  
        let button = document.createElement("button")
        button.onclick = function(){ agregarACarrito(product.id - 1)}
        button.innerText = "Agregar al Carrito"
        button.className = "btn btn-primary m-1"
  
        
        
        
        divInterno.appendChild(imagen)
        
        divDescrip.appendChild(title)
        divDescrip.appendChild(description)
        divDescrip.appendChild(categoria)
        divDescrip.appendChild(price)
        divDescrip.appendChild(button)


        divInterno.appendChild(divDescrip)
        nodoProducto.appendChild(divInterno)
        nodoPrincipal.appendChild(nodoProducto)
    });
  }
  
  function renderizarProductosCarrito(){
    let priceTotal = 0
    let priceCart = document.getElementById("priceCart")
  
    let carritoRecuperado = JSON.parse( localStorage.getItem('carrito') );
    if(carritoRecuperado){
      carrito = carritoRecuperado;
    }
  
    contarProductos()
  
    let nodoPrincipal = document.getElementById("carrito")
    if(nodoPrincipal==null){
      return
    }
  
    nodoPrincipal.innerHTML = ""
    for (let i in carrito) {
        let element = carrito[i]
        priceTotal = priceTotal + (element.product.price * element.count)
  
        let nodoProducto = document.createElement("div")
        nodoProducto.className = "d-flex justify-content-between align-items-center border"
  
        const title = document.createElement("h5")
        title.innerText = element.product.name
  
        const price = document.createElement("p")
        price.innerText =  `Precio: $${element.product.price.toString()}`
  
        const buttonQuitar = document.createElement("button")
        buttonQuitar.onclick = function(){ quitarDelCarrito(i)  }
        buttonQuitar.innerText = "Quitar"
        buttonQuitar.className = "btn btn-danger"

        const cantidad = document.createElement("span")
        cantidad.innerText = element.count.toString()

        const buttonMas = document.createElement("button")
        buttonMas.onclick = function(){ modificarProductos(i,1)}
        buttonMas.innerText = '+'

        const buttonMenos = document.createElement("button")
        buttonMenos.onclick = function(){ modificarProductos(i,-1)}
        buttonMenos.innerText = '-'

        let nodoCantidad = document.createElement("div")
  
        nodoProducto.appendChild(title)
        nodoProducto.appendChild(price)

        nodoCantidad.appendChild(buttonMenos)
        nodoCantidad.appendChild(cantidad)
        nodoCantidad.appendChild(buttonMas)
        
        nodoProducto.appendChild(nodoCantidad)
        nodoProducto.appendChild(buttonQuitar)
      
        nodoPrincipal.appendChild(nodoProducto)
    };
  
    priceCart.innerText = `Total del carrito $ ${priceTotal.toString()}`
  }
  
  function contarProductos() {
    let count = 0
    carrito.forEach(element => {
      count = count + element.count
    });
    let notificationDivCount = document.getElementById("notificationDivCount")
    if(notificationDivCount!=null & count!=0){
      notificationDivCount.innerHTML =  `<img src="templates/img/iconos/3144456.png" alt="carrito" style="width: 50px;"><span class="badge">${count}</span>`
    } 
  }
  
  setTimeout(() => {
    renderizarProductos()
    renderizarProductosCarrito()
    contarProductos()
  }, 200);