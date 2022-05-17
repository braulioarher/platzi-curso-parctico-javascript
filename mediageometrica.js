//ELEGI CALCULAR LA MEDIA GEOMETRICA


//SE ELIGIO ESTE TIPO DE PROMEDIO YA QUE ME PUEDE AYUDAR A EVALUAR LAS UTILIDADES DE MIS INVERSIONES


//PASO # 1 DEFINIR EL CONJUNTO DE DATOS

const lista1 = [
    {
        annio: 2018,
        rentabilidad: 20,
    },
    {
        annio: 2019,
        rentabilidad: 15,
    },
    {
        annio: 2020,
        rentabilidad: 33,
    },
    {
        annio: 2021,
        rentabilidad: 25,
    },
];

//PASO # 2 EXTRAER DE NUESTRA LISTA LA RENTABILIDAD DE TODOS LOS ANNIOS

const profitPercentageArray = lista1.map(
    function (elemento){
        return 1 + (elemento.rentabilidad / 100)
    }
);

//PASO # 3 APLICAR LA FORMULA 

const mediageometrica = Math.pow (profitPercentageArray.reduce(
    function (elementoA, elementoB){
        return elementoA * elementoB;
    }
), (1 / profitPercentageArray.length));  // Se usa el metodo pow para calcular la raiz o el numero elevado a tal potencia


//CONCLUSION

/*En este ejercicio que fue muy sencillo se puso en practica el metodo map para obtener un array que contenga lo que buscamos
de otro array de objetos

Tambien se uso el metodo reduce donde le aplicamos la funcion de multiplicar todos los elementos de nuestro array de porcentajes

Y por ultimo se uso el metodo pow para calcular la raiz del resultado de la multiplicacion de los porcentajes 
*/