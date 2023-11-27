/* Una interfaz en TypeScript es un tipo de dato personalizado que se utiliza para
 describir la estructura de un objeto

  Los corchetes deben contener la forma de un objeto, las propiedades y los tipos.

  En las interface tambien se pueden heredar los tipos mediante el uso de extends
*/

// Crear una interfaz vacía:
interface EmptyObject {}

// Crear interfaz Person:
interface Person {
  name: string;
  age: number;
  hairColor: string;
  weight: number;
  height: number;
}

// Crear interfaz Car:
interface Car {
  model: string;
  manufacturer: string;
  numberOfWheels: number;
  type: string;
}

// Crear interfaz User:
interface User {
  name: string;
  pass: string;
  email: string;
}

//las propiedades de interface tambien pueden ser otras interface. Ejemplo:
interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: Producto[] // La propiedad productos será un array con los tipos de datos de la interface Producto
}

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos:[
        {
            id: 1,
            nombre:'Producto 1',
            precio: 100,
            quantity: 1
        }
    ]
}

// Uso de extends :

interface Zapato extends Producto { // La interface Zapato tiene todas las propiedades de Producto y adicionalmente la talla
    talla:number
}














