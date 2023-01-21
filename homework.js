'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) 
es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.

// Recursion: 
// Casos base: Casos en los que yo debo cortar la recursividad. Un factorial se termina cuando llegue a 1 o 0 por ejemplo. Donde ya tengo una respuesta.
// Return total: Es el que va a hacer volver, va a llamar a la recursividad. 

*/ 

//APUNTE dato sacado de https://lineadecodigo.com/javascript/factorial-javascript/


function nFactorial(n) {
if (n === 0){ // Preguntamos sí n es igual a 0, ya que si fuera menor no seria natural y nosotros sabemos que SI lo es y le decimos que si lo es retorne 1 que es el primero en la secuencia. 
  return 1; // Caso base o de corte
}
return n * nFactorial(n-1); //en esta parte se aplica la recursion.-  Le decimos que multiplique así mismo el argumento por el factorial del número anterior, así nos retorna cual es el factorial de (n)

}

/*

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, 
como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


*/

function nFibonacci(n) { //la variable pasada por parametro es (n) suponiendo que esta esta en la posicion (6) nosotros lo que queremos saber es cual es su valor
 if (n <= 0)  //si 6(n) es menor o igual a 0 retornamos 0 para que no, nos de un numero con coma. 
     return 0
     else if(n === 1) // si 6(n) es igual a 1 retorne 1
      return 1

      return nFibonacci(n-1) + nFibonacci(n-2); /**en caso de que las condiciones de arriba no se cumplan, se aplica la recursion,
       le dice que retorne nFibonacci(n-1) aplicado a 6  (la posicion 6 va a la pila de ejecucion en primer lugar)
       y retorna un 5, hace lo mismo con el (n-2) y lo deja en 4 (y los vuelve arriba del 6 en la pila de ejecuciones, creando un nuevo contexto de ejecucion solo para nf5. nf6 queda esperando ahora
        que se resuelva nf5)
        luego, la recursion vuelve a preguntarle a la funcion 
       ¿es menor o igual a 0? o ¿es igual a 1? cuando es igual a 1 se destruye el contexto y vuelve al anterior que se quedo esperando,  baja al anterior que era nfibonacci de 2 y ejecuta la funcion (n - 2)
       lo que le retorna 0 como resultado, vuelve a ejecutar la recursividad y al momento de pasar por el primer if le retorna 0 porque la pregunta es respondida.        
        

**/

}

/*
¡ Estructuras de datos !
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
 this.array =  [];

}

Queue.prototype.enqueue = function (value) {
  return this.array.push(value)
}

Queue.prototype.dequeue = function (value) {
   return this.array.shift()
}

Queue.prototype.size = function () {
   return this.array.length
}



var nuevaQueue = new Queue()
console.log(nuevaQueue) 
nuevaQueue.enqueue(1)
nuevaQueue.enqueue(2)
nuevaQueue.enqueue(3);
console.log(nuevaQueue);
nuevaQueue.dequeue()
console.log(nuevaQueue)


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};

