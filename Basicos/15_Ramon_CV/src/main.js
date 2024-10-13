import { studentsOver85 } from "./helpers/script";

const estudiantes = [
    { nombre: "Carlos", calificacion: 80 },
    { nombre: "Ana", calificacion: 90 },
    { nombre: "Luis", calificacion: 88 },
    { nombre: "María", calificacion: 70 },
    ];


 //-------------Test Funcionando bienes --------------------------------

console.log(studentsOver85(estudiantes));

//-------------Test fallando  --------------------------------


const estudiantes2 = [
    { nombre: "Carlos", calificacion: 80 },
    { nombre: 8, calificacion: 90 },
    { nombre: "Luis", calificacion: 88 },
    { nombre: "María", calificacion: 70 },
    ];


console.log(studentsOver85(estudiantes2));


//---------Test fallando 2-------------------------------------


console.log(studentsOver85(34));


 