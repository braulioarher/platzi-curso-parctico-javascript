//Codigo de cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
//Codigo del Triagunlo
//console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log("Los lados del triangulo miden: "
//+ ladoTriangulo1
//+ "cm, "
//+ ladoTriangulo2
//+ "cm y "
//+ baseTriangulo 
//+ "cm.");
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es:" + alturaTriangulo);
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}//
//console.log("El area del triangulo es:" + areaTriangulo + "cm^2");
//console.groupEnd();
//Codigo del Circulo
//console.group("Circulos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es:" + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//console.log("El diametro del circulo es:" + diametroCirculo + "cm");
//PI
const PI = Math.PI;
//console.log("PI es:" + PI);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del circulo es:" + perimetroCirculo + "cm");
//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El area del circulo es:" + areaCirculo + "cm^2");
//console.groupEnd();


//Aqui interactuamos con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");//obtiene elemento de html
    const value = input.value;//obtiene valor del input

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro es: " + perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");//obtiene elemento de html
    const value = input.value;//obtiene valor del input

    const area = areaCuadrado(value);
    alert("El area es: " + area)
}

function alturaTriangulo (ladoa, ladob, base){
    if (ladoa != ladob){
        console.error("Los lados a y b no son iguales");
    }
    else {
        const trianguloPequenoLadob = ladob;
        const trianguloPequenoLadoc = base / 2;
        const trianguloPequenoLadobCuadrado = trianguloPequenoLadob * trianguloPequenoLadob;
        const trianguloPequenoLadocCuadrado = trianguloPequenoLadoc * trianguloPequenoLadoc;
        const trianguloPequenoLadoa = Math.sqrt (trianguloPequenoLadobCuadrado - trianguloPequenoLadocCuadrado);
        const altura = trianguloPequenoLadoa;
        return altura;
    } 
}

function calcularAlturaTriangulo(){

    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");

    const ladoa = input1.value;
    const ladob = input2.value;
    const base = input3.value;
    if (ladoa != ladob){
        console.error("Los lados a y b no son iguales");
    }
    else {
    const altura = alturaTriangulo(ladoa, ladob, base);
    alert("La altura es: " + altura);
    }
}
/// Para calcular la altura de un triangulo isoceles primero se descompone el triangulo en dos triangulos rectangulos  
//en el triangulo rectangulo tendremos un lado que corresponde a la altura del triangulo isoceles
//dicho lado se calcula usando el teorema de pitagoras donde a^2 = b^2 + c^2