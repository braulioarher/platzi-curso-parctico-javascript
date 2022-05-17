const lista1 = [
    100,
    200,
    300,
    35000,
    36000,
    37000,
    1,
    300,
    10,
    2,

]

const orderedlist = lista1.sort(function (a,b){     //El metodo sort ordena los elementos de un array este metodo necesita
    return a - b;                               //de una funcion la cual compara elemento por elemento para asignar una posicion
});                     // si elemento a es mayor a elemnto b entonces le asigna una posicion mayor a elemnto b 
//y de esta forma para cada elemento del array hasta agortarlos

function calculaeMediana (lista){

let mediana;

const mitadlista1 = parseInt(lista1.length / 2);

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length
    return promedioLista
    }

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else{
        return false;
    }
}

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadlista1];
    const elemento2 = lista1[mitadlista1 - 1];

    let promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,]);

    mediana = promedioElemento1y2;
}
else {
    mediana = lista1[mitadlista1]
}

return mediana

}