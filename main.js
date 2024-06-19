import './style.css'

// !--------------------------------------------------------------------------------------------
let num1 = 25                                                    //Ejercicio 1
let num2 = 7

console.log(`El número 1 es: ${num1}`)
console.log(`El número 2 es: ${num2}`)

const temp = num1
num1 = num2
num2 = temp

console.log(`El número 1 intecambiado es: ${num1}`)
console.log(`El número 2 intecambiado es: ${num2}`)

// !--------------------------------------------------------------------------------------------
                                                                //Ejercicio 2
num1 = prompt ('Ingrese un número por favor'); 
num2 = prompt ('Ingrese otro número para ver cúal es mayor'); 

function mayor(){
 
    if (num1>num2) {
        const a = num1
        return(a)
    } else {
        const a = num2
        return(a)
    }
}
console.log("El número mayor es: " +mayor())

// !--------------------------------------------------------------------------------------------
                                                                //Ejercicio 3
num1 = prompt ('Ingrese un número por favor'); 
function parImpar(){
    num2 = num1 % 2
        if (num2 === 0 ) {
            const par = "par"
            return(par)
        } else {
            const impar = "impar"
            return(impar)
        }
}
console.log("El número es " +parImpar())

// !--------------------------------------------------------------------------------------------
                                                                //Ejercicio 4
num1 = prompt ('Ingrese el precio del producto'); 
num2 = prompt ('Ingrese el descuento del producto'); 

function descuento(){
    const des = num1 * num2 / 100
    num2 = num1 - des
    return(num2)
}
console.log("El precio de producto con el descuento es " +descuento())

// !--------------------------------------------------------------------------------------------
                                                                //Ejercicio 5
num1 = prompt ('Ingrese el radio de un círculo');
function radio(){
    const area = 3.14 * num1*num1
    return(area)
} 
console.log("El radio del círculo es " +radio())

// !--------------------------------------------------------------------------------------------
                                                                //Ejercicio 6
num1 = prompt ('Ingrese la temperatura en grados Celsius');
function tempp(){
      const faren = (num1 * 9/5)+32
      return(faren)
  }
  console.log("La temperatura en grados Fahrenheit es " +tempp())
  
// !--------------------------------------------------------------------------------------------
                                                                //Ejercicio 7
  let i = 1
  for ( i ; i <=10; i++) {
    
    console.log("Número " +i)    
  }
  
// !--------------------------------------------------------------------------------------------
                                                                //Ejercicio 8
do{
   num1 = prompt ('Ingrese un número. Para salir use un número  negativo');
    console.log("El número igresado es " +num1)
  }while( num1 > 0)
    
  console.log("has salido con el número " +num1)
    
// !--------------------------------------------------------------------------------------------
                                                               //Ejercicio 9
  num1 = prompt ('Ingrese un número para ser multiplicado');
  for(  i = 1; i < 11; i++){
    num2 = num1 * i
     console.log(num1+ " X " +i +" = " +num2)
  }
    
// !--------------------------------------------------------------------------------------------
                                                               //Ejercicio 10
num2 = 0
for( i=1; i<101; i++){
  num1 = i % 2
  if(num1 ===  0){
      num2 = num2 + i
  }
  
 console.log("el total de la suma de los números pares es " +num2)
}
    
// !--------------------------------------------------------------------------------------------
                                                               //Ejercicio 11
let personas = [
   {
    nombre: "Angel", 
    edad: 36,
    ciudad: "Buenos Aires",
    presentacion: "Hola soy Angel Cardenas y estoy estudiando Fullstack"
}]
// console.log(personas[0])
    
// !--------------------------------------------------------------------------------------------
                                                               //Ejercicio 12
personas.splice(1,0,
  {
    nombre: "Yami", 
    edad: 24,
    ciudad: "Buenos Aires",
    presentacion: "Hola soy Yamileth Bejarano y estoy estudiando Fullstack"
}
)
personas.splice(2,0,
  {
    nombre: "Dayana", 
    edad: 34,
    ciudad: "La plata",
    presentacion: "Hola soy Dayana Cabello y estoy estudiando Fullstack"
}
)
personas.splice(3,0,
  {
    nombre: "Antonio", 
    edad: 29,
    ciudad: "Rosario",
    presentacion: "Hola soy Antonio Prato y estoy estudiando Fullstack"
}
)
      for(i=0; i<=(personas.length-1); i++){
        console.log(personas[i])
      }
    
// !--------------------------------------------------------------------------------------------
                                                               //Ejercicio 13
const obtencion = prompt('Ingrese varios números separados por una coma para ver su promedio'); 
let numArray = obtencion.split(',').map(Number);
function arrayProm(){
  num1 = numArray.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  num1 = num1 / numArray.length
  return(num1)
}

console.log("El promedio de los números es:" +arrayProm())