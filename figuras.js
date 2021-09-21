//Este es el código del cuarado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimeto del cuadrado es ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área de mi cuadrado es ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del Triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`Los lados de mi triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`La altura de mi triangulo mide ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triangulo es ${areaTriangulo}cm^2`);
console.groupEnd();

//Código del circulo
console.group("Circulos");

//Radio
const radioCirculo = 4;
//Perímetro
const diametroCirculo = radioCirculo * 2;
console.log(`E`)
//PI
const PIN = Math.PI;
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.groupEnd();