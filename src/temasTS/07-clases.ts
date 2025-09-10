
class Persona{
    nombre:string;
    edad:number;
    //costructor sirve para inicializar las intancias d ela clase
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;

    }
    imprimir(){
        console.log(`nombre: ${this.nombre}, Edad:${this.edad}`);
    }
    }
    const persona1= new Persona('',0);
    persona1.nombre='Mar';
    persona1.edad=21;
    persona1.imprimir();
    


