const salariosMex = mexico.map(          //aplica la funcion a cada elemento de la array y almacena el resultado en una nueva
    function (persona){                 //por ejemplo se aplica la funcion al elemento cero dl array
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function (salaryA, salaryB) {       //Recibe dos parametro para comparar
        return salaryA - salaryB;
    }
);
//Helpers
function esPar(numero) {
    return (numero % 2 === 0);          //Si el residuo del modulo es igual a cero es un numero par y regresa true o false
}                                       //respectivamente
                                        // EL simbolo "%" retorna el residuo de una division de dos numeros

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length
    return promedioLista
    }

//Calculadora de mediana general

function medianaSalarial (lista) {
    let mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        let elemento1 = lista[mitad - 1];
        let elemento2 = lista[mitad];
        return(calcularMediaAritmetica([elemento1, elemento2]));
    } else {
        return(lista[mitad]);
    }
}

const medianaGeneralMex = medianaSalarial(salariosMexSorted);

//Mediana del top 10%
const spliceStart = (salariosMexSorted.length * 90) / 100;       //Se usa para cortar elementos de un array
const spliceCount = salariosMexSorted.length - spliceStart;      //Recibe dos argumentos el primero es de donde empieza el array resultado
const salariosMexTop10 = salariosMexSorted.splice(                //el segundo cuantos elementos va a abarcar
        spliceStart,
        spliceCount,
);

const medianaTop10Mex = medianaSalarial(salariosMexTop10);

console.log ({
    medianaGeneralMex,
    medianaTop10Mex,
});