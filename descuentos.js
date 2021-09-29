// const cupon = [{
//         nombre: "lo_merezo",
//         discount: 25
//     },
//     {
//         nombre: "uno_dos",
//         discount: 10
//     },
//     {
//         nombre: "Atencion_u",
//         discount: 15
//     }
// ];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCupon = document.getElementById("InputCupon");
    const discountValue = inputCupon.value;
    
    let discount;

    if(discountValue == "lo_merezo"){
        discount = 15;   
    }else if(discountValue == "uno_dos"){
        discount = 10;
    }else if(discountValue == "Atencion_u"){
        discount = 15;
    }else{
        discount = 0;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es de: Q" + precioConDescuento;
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });