
class    Bebida{
    constructor (id, nombre, tipo, medida, precio) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.detalle = function(){console.log(this.nombre + " " + this.medida + "ml $" + this.precio)}
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;}
    } 
    
    const producto1 = new Bebida (0,"Coca-Cola Original","Gaseosas", 2.25, 350);
    const producto2 = new Bebida (1,"Sprite Original","Gaseosas",2.25, 350);
    const producto3 = new Bebida (2,"Coca-Cola Zero","Gaseosas",2.25, 350);
    const producto4 = new Bebida (3,"Andes Miel","Cervezas",473,200);
    const producto5 = new Bebida (4,"Andes Negra","Cervezas",473,200);
    const producto6 = new Bebida (5,"Andes Roja","Cervezas",473,200);
    const producto7 = new Bebida (6,"Andes Rubia","Cervezas",473,200);
    const producto8 = new Bebida (7,"Andes IPA","Cervezas",473,200);
    const producto9 = new Bebida (8,"Brahma","Cervezas",473,170);
    const producto10 = new Bebida (9,"Fernet Branca","Aperitivos",750,950);
    const producto11 = new Bebida (10, "Fernet Branca","Aperitivos",1000, 1200);
    const producto12 = new Bebida (11, "Mumm","Espumantes", 750,680);
    const producto13 = new Bebida (12,"Novecento","Espumantes", 750,350);
    const producto14 = new Bebida (13,"Campari","Aperitivos",750,920);
    const producto15 = new Bebida (14,"Gancia","Aperitivos",980,600);
    
    /*producto1.detalle();
    producto1.sumaIva();
    producto1.detalle();
    producto2.sumaIva();
    producto3.sumaIva(); 
*/
    const bebidas = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14];
    console.table(bebidas);
    const gaseosas = [producto1,producto2,producto3];    
    console.table (gaseosas.length);
    const cervezas = [producto4,producto5,producto6,producto7,producto8,producto9];
    console.table (cervezas.length);
    const espumantes = [producto12,producto13];
    console.table( espumantes.length);
    const aperitivos = [producto10,producto11,producto14];
    console.table( aperitivos.length);

let carrito = [];
let finalizarCompra;


function saludarCliente(){
    alert (" Bienvenido " + nombreIngresado + " a Alcoholemia Delivery")
    }


function carritoDeBebidas (){
    let = cadenaProductos ="";
for (const producto of bebidas){
    cadenaProductos += `${producto.id}: ${producto.nombre} ${producto.medida} $${producto.precio}\n`;}
let idProducto = prompt(`Elegi el número del producto a comprar o escribe FINALIZAR COMPRA para terminar\n${cadenaProductos}\n`);
while (idProducto !== "FINALIZAR COMPRA") {
    let bebidaElegida = carrito.find((e) => e.id == idProducto);

if (bebidaElegida !== idProducto){
   

    let bebida = new Bebida(bebidas[idProducto]);
carrito.push(bebida);
  
alert (`Se agrego al carrito la siguiente bebida: ${bebidas[idProducto]}`)
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


/*

let categorias = parseInt(prompt("Elige una categoria \n" + " 1. Gaseosas \n" + " 2. Cervezas \n" + " 3. Espumantes \n" + " 4. Aperitivos \n"));
    
switch (categorias){
    case 1:
        alert (producto1.detalle() +"\n",producto2.detalle() +"\n",producto3.detalle());
        break;
    case 2:
        alert (producto4.detalle() + "\n", producto5.detalle()+ "\n",producto6.detalle()+ "\n",producto7.detalle() + "\n",producto8.detalle() +"\n",producto9.detalle() +"\n");
        break;
    case 3:
      alert (producto12.detalle()+ "\n", producto13.det
      alle()+ "\n");
        break;
    case 4:
    alert (producto10.detalle()+ "\n",producto11.detalle()+ "\n",producto14.detalle()+ "\n");
        break;
    default:
        alert ("Ingresa una opción valida");
};



*/

   