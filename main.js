//FACTORIZAR 6


const btn = document.querySelector('.btn');


btn.addEventListener('click', function(){

    let resultado =Number(document.querySelector('.input').value) ;

    
    
    if(Number.isInteger(resultado)){

            b=1
            for (i=1;i<= resultado;i++){
	        b=b*i
            }

            
        document.querySelector('.ms-1').textContent ="El factorial de "+ resultado +" es : "+ b;  
    }else{
        document.querySelector('.ms-1').innerHTML ="not a number ";
    }

    
   
});


//CALCULANDO PROMEDIOS

function calculateSum(array) {
    return array.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
  }

  let suma = calculateSum([80,77,88,95,68]);

  let promedio = suma / 5;
  console.log(promedio)

  if(promedio >= 80 && promedio < 90){
    console.log('Su promedio en C')
  }

  //PAR E IMPAR

  for (let x = 0; x <= 15; x++) {
    if (x === 0) {
            console.log(x +  " Es par");
    }
    else if (x % 2 === 0) {
            console.log(x + " Es par");   
    }
    else {
            console.log(x + " Es impar");
    }
}






//Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz".


var arr = [];

for(var i = 0; i < 100; i++){

    arr.push([i])
}
arr.forEach(function(element, index) {
    if (element % 5 === 0 && element % 3 === 0) return arr[index] = "Fizz-Buzz"
    if (element % 5 === 0) return arr[index] = "Buzz"
    if (element % 3 === 0) return arr[index] = "Fizz"
  })
  console.log(arr)


  //Invertir un arreglo usando el bucle for

  var myArray = [1, 2, 3, 4, 5,6,7,8,9];
 
for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
}
  

// invierte una cadena de texto usando un bucle for

function reverseString(str) {

    
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const resultado = reverseString('EdwinBolivar');
//console.log(resultado);

//Implementar la potencia de un número pidiendo al usuario el número base y su exponente.



document.querySelector('.btn-potencia').addEventListener('click', function (e){

    e.preventDefault();
    const base =  Number(document.querySelector('.base').value)
    const expo =  Number(document.querySelector('.expo').value)

    let result = base ** expo;

    document.querySelector('.ms-2').textContent = 'La potencia es : ' + result  ;
})


//Calcula la suma de todos los elementos de un arreglo.

const numbers = [1, 2, 3, 4, 5,6,7,8,9];
let sumaArr = 0;

for (let i = 0; i < numbers.length; i++) {
  sumaArr += numbers[i];
}

//console.log(sumaArr);






var arr = [33, 44,66,45,3,7,88,,99,67,1];
var numMayor = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > numMayor ) {
    numMayor = arr[i];
  }
}
console.log(numMayor);

//Encuentra todos los números pares de un arreglo y crear un arreglo nuevo con ellos.

const numPar = [2,22,44,56,89,7, 10, 15, 8, 13, 18, 6];

const par = [];
numPar.forEach((num) => {
  if (num % 2 === 0) {
    par.push(num);
  }
});


console.log(par);

//Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre del autor de los libros que tengan el estado de lectura “true”.


const library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    },
    ];

    for (var i = 0; i < library.length; i++) 
   {
   
    if (library[i].readingStatus) {
      console.log(library[i].author);
      console.log(library[i].title);
    } 
   }
   