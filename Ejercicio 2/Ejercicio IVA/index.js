
/*
4. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%.
*/

let precio_producto = parseFloat(prompt("Introduzca el precio del producto"));
let valor_agregado = precio_producto*0.19;
let precio_final = precio_producto+valor_agregado;
console.log("El precio final del producto es: ", precio_final);
 
/*
1. pedir precio de un producto
2. IVA = 0.19
3. valor agregado = precio del producto*0.19
4. precio final = precio del producto+valor agregado
4. Imprimir precio final
*/


