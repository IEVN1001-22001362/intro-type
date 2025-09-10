import { type Producto, calcularIVADos} from "./05-desestructuracion-funciones";
const carrito:Producto[]=[
    { 
    nombre:"Iphone 14",
    precio:1500
},
  { 
    nombre:"Computadora 14",
    precio:11500
},  { 
    nombre:"Mouse",
    precio:300
}

   
];
const [total,iva]=calcularIVADos(carrito);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${iva}`);