"let empleados = 5; 
 let esFeriado = false; 
 let gananciaDelDia = 100000; 
 let porcentajeParaSueldos;   
 
 if (esFeriado) {     
     porcentajeParaSueldos = gananciaDelDia * 80 / 100; 
 } else {  porcentajeParaSueldos =  gananciaDelDia * 65 /100; 
        }
let gananciaDelComercio = gananciaDelDia - porcentajeParaSueldos; 
let sueldoNetoRepartidor = porcentajeParaSueldos / empleados; 
let gananciaDelComercioFinal = gananciaDelComercio - (gananciaDelComercio *20 /100);
console.log('El sueldo para cada empleado es:' + sueldoNetoRepartidor) 
console.log('La ganancia final del comercio es:' + gananciaDelComercioFinal)" 
