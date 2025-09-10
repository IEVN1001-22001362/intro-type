
class Persona3{
    //protected: 
    /*
    public apmaterno:string;
    private apaterno:string*/ //cuando no pones private automaticamente es publico 
    protected  nombre1:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre1:string,edad:number,direccion:string){
        this.nombre1=nombre1;
        this.edad=edad;
        this.direccion=direccion;
    }
    mostrarpersona(){
        console.log(`Nombre: ${this.nombre1},
            Edad: ${this.edad},
            Direccion: ${this.direccion}`);
    }

}
//extend para que herede
class Empleado3 extends Persona3{
    private sueldo:number;
    constructor(nombre1:string,edad:number,direccion:string,sueldo:number){
        //super es para mandar los datos al panel
        super(nombre1,edad,direccion);
        this.sueldo=sueldo;
    }
    mostrarEmpleado(){
        this.mostrarpersona();
        console.log(`Sueldo ${this.sueldo}`);
    }

}
const empleado3= new Empleado3('Ana',28, 'calle olivo 123', 2000);
empleado3.mostrarEmpleado();
//empleado3.mostrarPersona(); no se puede acceder a un método protegido 