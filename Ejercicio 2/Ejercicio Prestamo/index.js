
/*
3. Cree un programa que lea el monto de un préstamo y el plazo en meses, y muestre al usuario el valor de las cuotas mensuales pagando un interés fijo del 2.7% mensual.
*/
let prestamo = parseInt(prompt ("ingrese el valor del prestamo"));
let tasa = parseFloat(prompt ("ingrese el valor de la tasa"));
let cuotaFinal = (prestamo * tasa)+ prestamo;
console.log("El valor de la cuota es $", cuotaFinal);

/*
Algoritmo valorCuotaFinal
    Entero prestamo
    Decimal tasa 
    Entero cuotaFinal
    imprimir: "ingrese el valor del prestamo"
    Leer  prestamo
    imprimir: "ingrese el valor de la tasa"
    Leer  tasa
    
    Imprimir: "El valor de la cuota es $", cuotaFinal"
FinAlgoritmo
*/

