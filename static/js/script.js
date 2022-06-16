products = [
    {
        id:1,
        name:"Gorra",
        description:"esto es una gorra",
        price:20,
        image: ""
    },
    {
        id:2,
        name:"Banana",
        description:"esto es una banana",
        price:30,
        image: ""
    },
    {
        id:3,
        name:"Teclado",
        description:"esto es un teclado",
        price:40,
        image: ""
    },
    {
      id:4,
      name:"gato",
      description:"esto es un teclado",
      price:420,
      image: ""
    },
    {
      id:5,
      name:"perro",
      description:"esto es un teclado",
      price:340,
      image: ""
    },
    {
      id:6,
      name:"camisa",
      description:"esto es un teclado",
      price:150,
      image: "../../templates/img/productos/camisa.jpeg"
    }
    
  ]
  carrito = []
  
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
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarProductosCarrito();
  }
  
  function quitarDelCarrito(index){
    carrito.splice(index,1);
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
        nodoProducto.className = " m-2 border border-primary text-center"
  
        const title = document.createElement("h5")
        title.innerText = product.name

        const imagen = document.createElement("img")
        imagen.innerText = product.image

        const description = document.createElement("p")
        description.innerText = product.description
  
        const price = document.createElement("p")
        price.innerText = `$ ${product.price.toString()}`
  
        let button = document.createElement("button")
        button.onclick = function(){ agregarACarrito(product.id - 1)  }
        button.innerText = "Agregar al Carrito"
        button.className = "btn btn-primary m-1"
  
        nodoProducto.appendChild(title)
        nodoProducto.appendChild(imagen)
        nodoProducto.appendChild(description)
        nodoProducto.appendChild(price)
        nodoProducto.appendChild(button)
  
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
        nodoProducto.className = " m-2 border border-primary text-center"
  
  
        const title = document.createElement("h5")
        title.innerText = element.product.name

        const imagen = document.createElement("img")
        imagen.innerHTML = element.product.image
  
        const priceAndCount = document.createElement("p")
        priceAndCount.innerText =  `Cantidad: ${element.count.toString()} | Precio: $${element.product.price.toString()} `
        priceAndCount.className = "m-1"
  
        const button = document.createElement("button")
        button.onclick = function(){ quitarDelCarrito(i)  }
        button.innerText = "Quitar"
        button.className = "btn btn-danger m-1"
  
  
        nodoProducto.appendChild(title)
        nodoProducto.appendChild(priceAndCount)
        nodoProducto.appendChild(button)
  
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
      notificationDivCount.innerHTML = notificationDivCount.innerHTML + `<span class="badge">${count}</span>`
    }
  }
  
  setTimeout(() => {
    renderizarProductos()
    renderizarProductosCarrito()
    contarProductos()
  }, 200);