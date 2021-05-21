let numero1 = parseInt(prompt("Introduzca el número 1"));
let numero2 = parseInt(prompt("Introduzca el número 2"));
let numero3 = parseInt(prompt("Introduzca el número 3"));
if (numero1>numero2 && numero1>numero3)
alert("El número 1 es mayor");
 else if(numero2>numero1 && numero2>numero3)
   alert("El número 2 es mayor");
 else if(numero3>numero2 && numero3>numero1)
   alert("El número 3 es mayor");
   if(numero1==numero2 && numero3==numero2 && numero3==numero1)
   alert("Todos los números son iguales"); 
          else if(numero1==numero2)
           alert("El número 1 es igual al número 2");
          else if(numero2==numero3)
           alert("El número 2 es igual al número 3");
         else if(numero3==numero1)
         alert("El número 1 es igual al número 3");