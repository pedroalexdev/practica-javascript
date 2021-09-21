//Este es el código del cuarado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

//Código del Triángulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//Código del circulo
console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2;
}


//PI
// const PI = Math.PI;
const PI = 3.1416;
console.log(`El PI es ${PI}`);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Interaccion con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    document.getElementById("perimetro").innerHTML = (`El perímetro del cuadrado es de ${perimetro}cm`);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    document.getElementById("perimetro").innerHTML = (`El área del cuadrado es de ${area}cm^2`);

}

function calcularPerimetroTriangulo() {
    const sidea = document.getElementById("lado1Triangulo");
    const sideb = document.getElementById("lado2Triangulo");
    const base = document.getElementById("baseTriangulo");
    const valuea = parseInt(sidea.value);
    const valueb = parseInt(sideb.value);
    const valuec = parseInt(base.value);

    const perimetroT = perimetroTriangulo(valuea, valueb, valuec);
    document.getElementById("perimetro_triangulo").innerHTML = (`El perímetro del triangulo es de ${perimetroT}cm`);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("baseTriangulo");
    const valuec = parseInt(base.value);
    const altura = document.getElementById("alturaTriangulo");
    const value_altura = parseInt(altura.value);

    const areaT = areaTriangulo(valuec, value_altura);
    document.getElementById("perimetro_triangulo").innerHTML = (`El área del triangulo es de ${areaT}cm^2`);
    
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("InputCirculo");
    const value_c = radio.value;
    
    const circunferencia = perimetroCirculo(value_c);
    document.getElementById("perimetro_circulo").innerHTML = (`El perímetro del circulo es de ${circunferencia}cm`);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("InputCirculo");
    const value_c = radio.value;

    const areaCircunferencia = areaCirculo(value_c);
    document.getElementById("perimetro_circulo").innerHTML = (`El área del circulo es de ${areaCircunferencia}cm^2`);
}