
//arreglos
interface Alumno{
    nombre:string;
    edad:number;
    curso:string;
    email?:string //propiedad opcional
    
    nota: number |string;//puedes ser nopmbre o string
}

const alumno:Alumno={
    edad: 21,
    nombre: "Mariana",
    curso:"TypeScript",
    email: "mar@gmail.com",
    nota: 8.5
}
console.log(`La alumna ${alumno.nombre}
    tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

    //definir un arreglo 
    let mascotas:string[]=['Perro', 'Gato', 'Hamster'];
    mascotas[1]='Pajaro';
    mascotas.push('tortuga');
    console.log(mascotas);
    
    let notas:(number|string)[]=[7,8,9, 'Aprobado'];
    notas.push(10);
    notas.push('sobresaliente');
    console.log(notas);
