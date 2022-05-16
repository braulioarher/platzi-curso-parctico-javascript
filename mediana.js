const lista1 = [
    100,
    200,
    300,
    35000,
    45,
]

const mitadlista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadlista1];
    const elemento2 = lista1[mitadlista1 + 1];

}
else {
    mediana = lista1[mitadlista1]
}