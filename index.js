

alert('Ingresaste a Tienda libre de gluten 🛒, aceptá si es correcto') //INICIO DIALOGO CON CLIENTE
alert('Compras superiores a $2500, el envío a domicilio es sin cargo 🛵') //ALERTA INDICANDO BENEFICIOS
alert('Al finalizar su compra marque 0')//INDICACIONES PARA FINALIZAR COMPRA
let productos = parseInt(prompt('Seleccione el número que corresponde al producto.  1-Galletitas $300 2-Leche $200 3-Premezclas $500 4-Semillas $150 o precione 0 para finalizar'));
let seleccioneCantidad;
let total = 0;

const cantidad = (cant, precio) => cant * precio;

// BUCLE, EJECUTA SELECIÓN DE PRODUCTO Y CANTIDAD

while (productos !== 0) {
    switch (productos) {
        case 1:
            seleccioneCantidad = parseInt(prompt('Has seleccionado galletitas 🍪, indique la cantidad'))
            total += cantidad(seleccioneCantidad, 300)
            break;
        case 2:
            seleccioneCantidad = parseInt(prompt('Has seleccionado leche 🥛, indique la cantidad'))
            total += cantidad(seleccioneCantidad, 200)
            break;
        case 3:
            seleccioneCantidad = parseInt(prompt('Has seleccionado premezclas 🍙 , indique la cantidad'))
            total += cantidad(seleccioneCantidad, 500)
            break;
        case 4:
            seleccioneCantidad = parseInt(prompt('Has seleccionado semillas 🫘 , indique la cantidad'))
            total += cantidad(seleccioneCantidad, 150)
            break;
        default:
            break;
    }
    productos = parseInt(prompt('Seleccione el número que corresponde al producto.  1-Galletitas $300 2-Leche $200 3-Premezclas $500 4-Semillas $150 o precione 0 para finalizar'));
}

alert('El total de tu compra es: $' + total);

//FUNCIÓN QUE EVALUA EL TOTAL EL TOTAL PARA DEFINIR SI EL ENVIO ES SIN CARGO O CON CARGO

const envio = () => {
    if (total >= 2500) {
        alert('EL envío a domicilio es sin cargo! 🛵')
    } else {
        total += 1000
        alert('El costo del envío es de $1000, total: $' + total)
    }


}

envio(); //LAMADO A LA FUNCIÓN ENVÍO


//FUNCIÓN QUE EVALUA EL METODO DE PAGO Y DESCUENTA O COBRA INTERES SEGÚN METODO DE PAGO

const metodoDePago = () => {
    let metodo = prompt('Ingrese la forma de pago, con tarjeta 10% de recargo o en efectivo 5% de descuento')
    if (metodo === 'tarjeta') {
        total *= 1.1
         alert('El costo tiene un interés del 10%, el total es: $' + Math.floor (total))
    } else if (metodo === 'efectivo') {
        total /= 1.05
         alert('El costo tiene un descuento del 5%, el total es: $' + Math.floor (total))
    }


}

metodoDePago();//LLAMADO A FUNCIÓN METODO DE PAGO

alert('😃 ¡Muchas gracias por su compra!')