//--------imports---------

import { ordenarComprasPorFecha } from "./helpers/scripts";


//------------variables---------

const compras = [
    { fecha: new Date(2023, 9, 21), monto: 200 },
    { fecha: new Date(2022, 1, 13), monto: 300 },
    { fecha: new Date(2023, 5, 10), monto: 150 },
   ];

//----------testing------------

console.log(ordenarComprasPorFecha(compras));