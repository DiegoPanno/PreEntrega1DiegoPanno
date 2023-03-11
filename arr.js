
alert('Ingresaste a Tienda libre de gluten 🛒, aceptá si es correcto') //INICIO DIALOGO CON CLIENTE
alert('Compras superiores a $2500, el envío a domicilio es sin cargo 🛵') //ALERTA INDICANDO BENEFICIOS

//CLASE PRODUCTO
class Producto {
    constructor(id, nombre, precio) {

        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

//CREACION DE PRODUCTOS

const alfajor = new Producto(1, 'alfajor', 700)
const snack = new Producto(2, 'snack', 500)

//ARRAY PARA GAURDAR PRODUCTOS
const productos = [alfajor, snack]

console.log(productos);

let productoEscogido = prompt('Elige el producto que deseas comprar:  Alfajor $ 700 , Snack $ 500')

// VARIABLE PARA CONDICION DE CICLO
let seguirComprando = true
const carritoDeCompra = []


// METODO PARA AGREGAR PRODUCTOS AL CARRITO O DEJAR DE COMPRAR 
while (seguirComprando === true) {

    const producto = productos.find(producto => producto.nombre === productoEscogido.toLocaleLowerCase().trim())
    
    if (producto) {
        carritoDeCompra.push(producto)
    } else {
        productoEscogido = prompt('No has ingresado un producto válido. Elige el producto que deseas comprar:  Alfajor $ 700 , Snack $ 500')
        continue
    }

    const decision = prompt('¿Desea seguir comprando? si o no ' )
    if (decision === 'si') {
        prompt('Elige el producto que deseas comprar:  Alfajor $ 700 , Snack $ 500')
    }else{
        seguirComprando = false
    }

}

console.log(carritoDeCompra);
 let totalCompra = 0

 //TOTAL DE PRODUCTOS MÁS PRECIO DE CADA PRODUCTO 
 
 for (const producto of carritoDeCompra) {
    totalCompra = totalCompra + producto.precio    
 }



//FUNCIÓN QUE EVALUA EL TOTAL PARA DEFINIR SI EL ENVIO ES SIN CARGO O CON CARGO

const envio = () => {
    if (totalCompra >= 2500) {
        alert(`EL envío a domicilio es sin cargo! 🛵 el total es: $${totalCompra}`)
    } else {
        totalCompra += 1000
        alert(`El costo del envío es de $1000, total: $ ${totalCompra}`)
    }


}

envio(); //LAMADO A LA FUNCIÓN ENVÍO

//METODO DE PAGO TARJETA (INTERES) O EFECTIVO (DESCUENTO)
const metodoDePago = () => {
    let metodo = prompt('Ingrese la forma de pago, con tarjeta 10% de recargo o en efectivo 5% de descuento')
    if (metodo === 'tarjeta') {
        totalCompra *= 1.1
         alert('El costo tiene un interés del 10%, el total es: $' + Math.floor (totalCompra))
    } else if (metodo === 'efectivo') {
        totalCompra /= 1.05
         alert('El costo tiene un descuento del 5%, el total es: $' + Math.floor (totalCompra))
    }


}

metodoDePago();//LLAMADO A FUNCIÓN METODO DE PAGO



alert('😃 ¡Muchas gracias por su compra!')












