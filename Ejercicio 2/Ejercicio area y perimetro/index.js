
/*
2. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
*/
let radio = parseFloat(prompt("ingrese Radio:"));
const PI = 3.1415;
let area = PI * (radio * radio);
let perimetro = 2 * PI * radio;
console.log("el Area es: ", area, "el Perimetro es: ", perimetro);
 
 
/*
Algoritmo radio_area_perimetro
   real radio
   real PI
   real area
   real perimetro
   imprimir  "ingrese radio"
   Leer radio
   proceso area = PI * (radio * radio)
   proceso perimetro = 2 * PI * radio; 
   Imprimir: "el Area es: ", area, "el Perimetro es: ", perimetro"
FinAlgoritmo
*/
