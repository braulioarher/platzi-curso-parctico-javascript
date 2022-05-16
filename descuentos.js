//const precioOriginal = 120;
//const descuento = 18;
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const coupons = [
        {
            name: "bra",
            discout: 15
        },
        {
            name: "arc",
            discout: 30
        },
        {
            name: "her",
            discout: 60
        },
        {
            name: "master",
            discout: 100
        },
    ];
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const isCuponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCuponValueValid);
    
    if(!userCoupon){
        alert("El cupon " + couponValue + " no es valido")
    }
    else {
        const inputPrice = document.getElementById("InputPrice");
        const priceValue = inputPrice.value; 
    
        const descuento = userCoupon.discout;        
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultPrice = document.getElementById("resultPrice");
        resultPrice.innerText = "El precio con descuento son: $ " + precioConDescuento;
    }
}


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
})*/