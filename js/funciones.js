class    Bebida{
    constructor (bebida) {
        this.id = bebida.id;
        this.nombre = bebida.nombre;
        this.tipo = bebida.tipo;
        this.medida = bebida.medida;
        this.precio = bebida.precio;
        this.vendido = false;
        this.detalle = function(){console.log(this.nombre + " " + this.medida + "ml $" + this.precio)}
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;}
    } 

    const bebidas = [
        { id: 0,
          nombre: "Coca-Cola Original",
          tipo: "Gaseosas",
          medida: 2.25,
          precio: 350,
        },
        { id: 1,
            nombre: "Sprite Original",
            tipo: "Gaseosas",
            medida: 2.25,
            precio: 350,
          },
          { id: 2,
            nombre: "Coca-Cola Zero",
            tipo: "Gaseosas",
            medida: 2.25,
            precio: 350,
          },
          {
            id: 3,
            nombre: "Andes Miel",
            tipo: "Cervezas",
            medida: 473,
            precio: 200,
        },
        {
            id: 4,
            nombre: "Andes Negra",
            tipo: "Cervezas",
            medida: 473,
            precio: 200,
        },
{
        id: 5, 
        nombre: "Andes Roja",
        tipo: "Cervezas",
        medida: 473,
        precio: 200,
},
{
        id: 6,
        nombre: "Andes Rubia",
        tipo: "Cervezas",
        medida: 473,
        precio: 200, 
},
{
    id: 7,
    nombre: "Andes IPA",
    tipo: "Cervezas",
    medida: 473,
    precio: 200, 
},
{ 
    id: 8,
    nombre: "Andes IPA",
    tipo: "Brahma",
    medida: 473,
    precio: 170, 
},
    ];
    let carrito = [];
    let finalizarCompra;
    
    
    function saludarCliente(){
        alert (" Bienvenido " + nombreIngresado + " a Alcoholemia Delivery")
        }
    
    
    function carritoDeBebidas (){
        let = cadenaProductos ="";
    for (const bebida of bebidas){
        cadenaProductos += `${bebida.id}: ${bebida.nombre} ${bebida.medida} $${bebida.precio}\n`;}
    let idProducto = prompt(`Elegi el número del producto a comprar o escribe FINALIZAR COMPRA para terminar\n${cadenaProductos}\n`);
    while (idProducto !== "FINALIZAR COMPRA") {
        let bebidaElegida = carrito.find((e) => e.id == idProducto);
    
    if (bebidaElegida !== idProducto){
       
    
        let bebida = new Bebida(bebidas[idProducto]);
    carrito.push(bebida);
      
    alert (`Se agrego al carrito la siguiente bebida: ${bebidas[idProducto].nombre}`)
    console.table(carrito);
    }
    
    idProducto = prompt(`
    Desea seguir comprando? 
    Elegi el número del producto a comprar o escribe FINALIZAR COMPRA para terminar
    ${cadenaProductos}`);
    }
    }
    function sumarCompra(){
        let precioTotal = 0;
        for (const producto of carrito) {
            precioTotal += producto.precio;
        }
        return precioTotal;
    }
    
    let mayor = confirm("Eres mayor de Edad?")
    if (mayor == true){
        alert("Beber con responsabilidad.")
    };
    
      let nombreIngresado = prompt ("Ingresa tu nombre");
    
      saludarCliente();
    
    carritoDeBebidas ();
    console.table(carrito);
    
    finalizarCompra = sumarCompra();
    
    
    alert(`El precio total de tu compra es de $${finalizarCompra}
    Gracias! `);
    