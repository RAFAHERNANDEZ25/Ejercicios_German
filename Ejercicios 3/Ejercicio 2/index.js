let producto = (prompt("Ingrese el nombre del producto a consultar"));
let arroz = "arroz";
let lentejas = "lentejas";
let vino  = "vino";
let crema = "crema";

if  (arroz === producto || lentejas === producto){
    alert("Este producto no paga Iva");
    } 
else if (vino === producto || crema === producto){
    alert("Este producto paga Iva");     
    }
