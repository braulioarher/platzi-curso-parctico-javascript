var el = document.getElementById("select-tipoInt");
el.addEventListener("change", hideShowElement, false);

function hideShowElement (){
    selectedOptionValue = document.getElementById("select-tipoInt").value;
    if (selectedOptionValue === "simple") {
        document.getElementById("label-IncAnual").style.display = 'none';
    } else {
        document.getElementById("label-IncAnual").style.display = 'block';
    }
}

let invInicial;
let tasaAnual;
let tiempo;
let incAnual;

let interesSimple;
let interesCompuesto;
let totalInve = 0;

function calcularInteresSimple(invIni, tasaAnu, annios) {
    interesSimple = invIni * tasaAnu * annios;
    resultInterest = document.getElementById("interest-result");
    resultInterest.innerText = "La ganancia es de: $" + interesSimple;
}

function calcularInteresCompuesto(invIni, tasaAnu, annios, incre) {
    totalInve = (invIni * 1) + (incre * annios);
    interesCompuesto = (((invIni * Math.pow((1 + tasaAnu), annios))) + (incre * (((Math.pow((1 + tasaAnu), annios)) - 1) / tasaAnu))) - totalInve;
    acumulado = totalInve + interesCompuesto;
    resultInterest = document.getElementById("interest-result");
    resultInterest.innerText = "El monto final es de $" + acumulado.toFixed(2) + " la inversion fue $" + totalInve + " ganando en intereses $ " + interesCompuesto.toFixed(2);
}

function calcularInteres(){
    selectedOptionValue = document.getElementById("select-tipoInt").value;
    if (selectedOptionValue === "simple") {
        invInicial = document.getElementById("input-InvIncial").value;
        tasaAnual = (document.getElementById("input-tasaAnual").value) / 100;
        tiempo = document.getElementById("input-annios").value;
        calcularInteresSimple(invInicial, tasaAnual, tiempo)
    } else {
        invInicial = document.getElementById("input-InvIncial").value;
        tasaAnual = (document.getElementById("input-tasaAnual").value) / 100;
        tiempo = document.getElementById("input-annios").value;  
        incAnual = document.getElementById("input-IncAnual").value;  
        calcularInteresCompuesto(invInicial, tasaAnual, tiempo, incAnual);
    }
}