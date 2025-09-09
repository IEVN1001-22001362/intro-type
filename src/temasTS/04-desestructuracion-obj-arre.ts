interface Repruductor{
    volumen:number,
    segundo: number,
    cancion: string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    anio: number;
}
const reproductor:Repruductor={
    volumen: 30,
    segundo: 90,
    cancion: 'Hola',
    detalles:{
        autor: 'Harry styles',
        anio:2015,
    }
};
console.log('El volumen actual es: ', reproductor.volumen);
console.log('El segundo actual es: ', reproductor.segundo);
console.log('La canción actual es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);
//destructuracion de objetos
const{volumen, segundo, cancion, detalles}= reproductor;
const{autor:nuevoauto}=detalles;
console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor es: ', nuevoauto);

//destructuracion arreglos
const dbz:string[]=['mar','astrid','irene'];
const[p1,p2,p3]=dbz;
console.log('personaje 1 ', p1);
console.log('personaje 2 ', p2);
console.log('personaje 3 ', p3);

//las comas estan estimulando los espacios de esto const dbz:string[]=['mar','astrid','irene'];
const [,,p4]=dbz;
console.log('personaje 4: ', p4);

