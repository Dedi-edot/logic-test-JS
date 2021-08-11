const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

arr = [15, 1, 3];

function nearestFibonacci(array) {
  let arr = array;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  let selisih = [];
  fibonacci.forEach((val, i) => {
    selisih[i] = Math.abs(result - val);
  });

  let nearest = Math.min(...selisih);
  let terdekat = selisih.indexOf(nearest);

  return fibonacci[terdekat];
}

console.log(nearestFibonacci(arr));

// function fibonacci(number){
//     let n1 = 0, n2 = 1, nextTerm;

//     console.log('Fibonacci Series:');

//     for (let i = 1; i <= number; i++) {
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }

// }

// fibonacci(5)

// function nearest

// function fibbonacci(p){
//     if (p < 3) {
//         return 1
//     } else {
//         return fibbonacci(p - 1) + fibbonacci(p - 2)
//     }
// }

// console.log(fibbonacci(5));
