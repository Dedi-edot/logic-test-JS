// var isSquare = function(n){
//     if (Number.isInteger(Math.sqrt(n))) {
//         return true;
//     }
//     return false; // fix me
//   }

//   console.log(isSquare(-1));

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// let number = 9

// function addBinary(a,b) {
//     let number = a + b;
//     return number.toString(2);
// }

// console.log(addBinary(4,4));

////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
let word = "is2 Thi1s T4est 3a";
let split = word.split(" ");

function order(words){
    // let regex = /\d+/gi;
    let order = [];
    let split = word.split(" ");
    for (let i = 0; i < split.length; i++) {
        if (split[i].includes(i + 1)) {
            order.push(split[i]);
        }
        // if ( split[i].match(regex) == toString(i+1) ) {
        //     order.push(split[i])
        // }
    }
    // ...
    console.log(order); 
  }

  order(word);

// console.log(split[1].includes(1));