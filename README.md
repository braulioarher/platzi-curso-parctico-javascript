# CURSO PRACTICO DE JAVASCRIPT

## Taller 1> figuras geometricas

- Primer paso: definir las formulas .
- Segundo paso: implementar las formulas en java
- Tercer paso: crear funciones
- Cuarto paso: integrar javascript con HTML

## Taller #2> Porcentajes y descuentos

- Primer paso: definir las formulas.
- Segundo paso: implementar las formulas en javascript
- Tercer paso: crear funciones
- Cuarto paso: integrar e interactuar javascript con HTML

## Taller #3> promedio, mediana y moda

- Primer paso: definir las formulas.
- Segundo paso: implementar las formulas en javascript
- Tercer paso: crear funciones
- Cuarto paso: integrar e interactuar javascript con HTML.

## Taller 4> Analisis salarial

- Generar una lista de personas por grupo

## Notas curso practico de Javascript

## TALLER PORCENTAJES

-Para inprimir diferentes variables dentro de la cosola se usa la funcion console.log() de la siguiente  manera:
             console.log({
                                variable1,
                                variable2,
                                variable3,
                                });
Esto imprimira todas las variables en requisito en forma de objeto

Para escribir dentro de html con Javascript se necesita de usar la funcion o atributo llamado .innerText
haciendo referencia al ID declarado en nuestro HTML

## TALLE  PROMEDIO, MEDIANA, MODA

**Media aritmetica  "Promedio**
val1 + val2 + val3 / nval
/Mediana el valor que esta en el medio despues de ordenar valores de menor a mayor
**cuando se tiene una lista con numeros par se saca el promedio de los dos valores en medio**

/Moda el valor o elemento que mas se repiten en una serie de datos

## METODO REDUCE

METODO REDUCE ITERA LOS ELEMENTOS DE UN ARRAY APLICANDOLE UNA FUNCION

### Ejemplo

array.reduce(
    function (incialValue, currentValue){
        return incialValue + currentValue;
    }
);

-suma el primer elemento con el segundo, el segundo con el tercero y asi sucesivamente
-se puede usar para multiplicar, dividir etc
-el metodo reduce necesita de contener una funcion
-la funcion debe contener el parametro de valor inicial y el valor del elemento actual

Este aplicara la funcion a todos los elementos de la array hasta agotar los elementos

## METODO MAP

lista.map(                 //el metodo map aplica la funcion a cada elemento del array
    function (elemento) {   //se ejecuta una funcion anonima donde el argumento es el elemento actual del array
        if (listaCount[elemento]) {  // si existe valor en el objeto que es igual elemento actual del array
            listaCount[elemento] += 1; //entonces suma uno al valor del objeto
        } else {
        listaCount[elemento] = 1;  //si no crea un nuevo objeto con este elemento y valor igual a 1
        }
    }
);

## METODO ENTRIES

//SE CREA UN ARRAY PARA SABER CUAL ES EL ELEMENTO QUE MAS SE REPITE

const listaArray = Object.entries(listaCount).sort(   // el metodo entries toma el [key, value] del objeto para convertirlo en
    function (elementoA, elementoB) {       //un array esto aplica para cada elemento del objeto
       return elementoA[1] - elementoB[1];      //con el metodo sort ordenamos el nuevo array de menor a mayor segun el valor del objeto
    });

## PROYECTO FINAL

Para este pryecto final se pretende crear una calculadora de inversion.

La calculadora va permitir declarar el capital incial de la inversion, las aportaciones anuales que se haran, el tiempo que dura
la inversion y la tasa de rendimiento de dicha inversion.

Para calcular el interes simple solo se necesitan 3 variables:
    -Inversion inicial
    -Tasa de rendimiento
    -tiempo a invertir.
La formula es la siguiente (inversion incial x tasa de rendimiento anual x numero de annios)
