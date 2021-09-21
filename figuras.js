//Este es el código del cuarado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();
//console.log(`El perimeto del cuadrado es ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log(`El área de mi cuadrado es ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del Triángulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(`Los lados de mi triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
// console.log(`La altura de mi triangulo mide ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log(`El área del triangulo es ${areaTriangulo}cm^2`);
console.groupEnd();

//Código del circulo
console.group("Circulos");

// //Radio
// const radioCirculo = 4;
// console.log(`El radio del círculo es ${radioCirculo}cm`);
//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log(`El díámetro del circulo es ${diametroCirculo}cm`);
//PI
const PI = Math.PI;
console.log(`El PI es ${PI}`);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log(`El perímetro del circulo es ${perimetroCirculo}cm`);
//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log(`El área del circulo es ${areaCirculo}cm^2`);
console.groupEnd();

//Interaccion con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}