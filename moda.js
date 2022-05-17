const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    2,
    2,
    4,
    1,
];

function calcularModa (lista) {

//creamos un objeto para saber cuantas veces se repite cada elemento del array

const listaCount = {};

lista.map(                 //el metodo map aplica la funcion a cada elemento del array
    function (elemento) {   //se ejecuta una funcion anonima donde el agumento es el elemento actual del array
        if (listaCount[elemento]) {  // si existe valor en el objeto que es igual elemento actual del array 
            listaCount[elemento] += 1; //entonces suma uno al valor del objeto
        } else {
        listaCount[elemento] = 1;  //si no crea un nuevo objeto con este elemento y valor igual a 1
        }
    }
);

//SE CREA UN ARRAY PARA SABER CUAL ES EL ELEMNTO QUE MAS SE REPITE

const listaArray = Object.entries(listaCount).sort(   // el metodo entries toma el [key, value] del objeto para convertirlo en
    function (elementoA, elementoB) {       //un array esto aplica para cada elemento del objeto
       return elementoA[1] - elementoB[1];      //con el metodo sort ordenamos el nuevo array de menor a mayor segun el valor del objeto
    }
);

let moda = listaArray[listaArray.length - 1];

    return listaCount;
}