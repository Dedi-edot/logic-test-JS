// let arr = [
// 	[11, 2, 4],
// 	[4, 5, 6],
// 	[10, 8, -12],
// ];

// let pDiagonal = 0;
// let sDiagonal = 0;
// for (let i = 0; i < arr.length; i++) {
// 	pDiagonal += arr[i][i];
// 	sDiagonal += arr[arr.length - 1 - i][i];
// }

// console.log(pDiagonal);
// console.log(sDiagonal);
// console.log(Math.abs(pDiagonal - sDiagonal));

//////////////////////////////////////////////////////////////////////////////////////
// let arr = [-4, 3, -9, 0, 4, 1];

// function plusMinus(arr) {
// 	// Write your code here
// 	let minus = 0;
// 	let zero = 0;
// 	let plus = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < 0) {
// 			minus += 1;
// 		} else if (arr[i] > 0) {
// 			plus += 1;
// 		} else {
// 			zero += 1;
// 		}
// 	}
// 	let fixPlus = plus / arr.length;
// 	let fixMinus = minus / arr.length;
// 	let fixZero = zero / arr.length;

// 	console.log(fixPlus.toFixed(6));
// 	console.log(fixMinus.toFixed(6));
// 	console.log(fixZero.toFixed(6));
// }

// plusMinus(arr);

/////////////////////////////////////////////////////////////
// let n = 6;
// let stairs = '';
// for (var i = 1; i <= n; i++) {
// 	for (var s = 1; s <= i; s--) {
// 		stairs += ' ';
// 	}
// 	for (var j = 1; j <= i; j++) {
// 		stairs += '#';
// 	}
// 	stairs += '\n';
// }

// console.log(stairs);
// let n = 6;
// let output = '';

// for (let i = 1; i <= n; i++) {
// 	for (let s = n - 1; s >= i; s--) {
// 		output += ' ';
// 	}
// 	for (let h = 1; h <= i; h++) {
// 		output += '#';
// 	}
// 	output += '\n';
// }
// console.log(output);

/////////////////////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5];

// let sum = [];
// for (let i = 0; i < arr.length; i++) {
// 	sum[i] = 0;
// 	for (let j = 0; j < arr.length; j++) {
// 		if (i !== j) {
// 			sum[i] += arr[j];
// 		}
// 	}
// }
// console.log(Math.min(...sum), Math.max(...sum));

////////////////////////////////////////////////////////////////////////////

// let arr = [3, 2, 1, 3];

// let max = Math.max(...arr);

// let countMax = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == max) {
// 		countMax += 1;
// 	}
// }
// console.log(countMax);

// let count = 0;
//     let max = 0;
//     for(let i = 0; i < candles.length ; i++)
//     {
//         let num = candles[i];
//         if(num > max)
//         {
//             max = num;
//             count = 1;
//         }else if(max == num)
//         {
//             count++;
//         }
//     }
//     return count;

//////////////////////////////////////////////////////////////////////

// let p = "07:05:45PM"; //12.01.00
// let a = "10:01:00AM"; //00.01.00

// function timeConversion(s) {
//   // Write your code here
//   let am = "";
//   let pm = "";
//   if (s.indexOf("AM") == -1) {
//     pm = s;
//   } else {
//     am = s;
//   }

//   if (pm) {
//     pm = pm.replace("PM", "");
//     pm = pm.split(":");
//     if (pm[0] == "12") {
//       pm[0] = "00";
//     } else if (pm[0] == "01") {
//       pm[0] = "13";
//     } else if (pm[0] == "02") {
//       pm[0] = "14";
//     } else if (pm[0] == "03") {
//       pm[0] = "15";
//     } else if (pm[0] == "04") {
//       pm[0] = "16";
//     } else if (pm[0] == "05") {
//       pm[0] = "17";
//     } else if (pm[0] == "06") {
//       pm[0] = "18";
//     } else if (pm[0] == "07") {
//       pm[0] = "19";
//     } else if (pm[0] == "08") {
//       pm[0] = "20";
//     } else if (pm[0] == "09") {
//       pm[0] = "21";
//     } else if (pm[0] == "10") {
//       pm[0] = "22";
//     } else if (pm[0] == "11") {
//       pm[0] = "23";
//     }

//     pm = pm.join(":");
//     return pm;
//   }

//   if (am) {
//     am = am.replace("AM", "");
//     return am;
//   }
// }

// timeConversion(p);

///////////////////////////////////////////////////////////////////////
// const test = '12:05:39AM'
// const test = "12:45:54PM";
// const test = '07:05:45PM'

// const timeConversion = (s) => {
//   if (s.substr(s.length - 2, 2) === "PM") {
//     if (parseInt(s.substr(0, 2), 10) === 12) {
//       return s.substr(0, s.length - 2);
//     } else {
//       return parseInt(s.substr(0, 2), 10) + 12 + s.substr(2, s.length - 4);
//     }
//   } else {
//     if (parseInt(s.substr(0, 2), 10) === 12) {
//       return (
//         "0" + (parseInt(s.substr(0, 2), 10) - 12) + s.substr(2, s.length - 4)
//       );
//     } else {
//       return s.substr(0, s.length - 2);
//     }
//   }
// };

// console.log(timeConversion(test));

////////////////////////////////////////////////////////////////////////////////////////
///Gradding students

// let grade = [73, 67, 38, 33];

// console.log(38 % 5);

// function gradingStudents(grades) {
//   var multipleToRoundTo = 5;
//   var numberToRoundAt = 2;
//   for (var i = 0; i < grades.length; i++) {
//     if (grades[i] >= 38 && grades[i] % multipleToRoundTo > numberToRoundAt) {
//       grades[i] =
//         grades[i] + (multipleToRoundTo - (grades[i] % multipleToRoundTo));
//     }
//   }
//   return grades;
// }

// console.log(gradingStudents([73, 67, 38, 33]));

////////////////////////////////////////////////////////////////////////////////////////////////
///Amount of Apple and Orange

// let s = 7;
// let t = 10;
// let a = 4;
// let b = 12;
// let apples = [2, 3, -4];
// let oranges = [3, -2, -4];
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
//   let sumApples = 0;
//   let sumOranges = 0;
//   for (let i = 0; i < apples.length; i++) {
//     if (apples[i] + a >= s && apples[i] + a <= t) {
//       sumApples += 1;
//     }
//   }

//   for (let i = 0; i < oranges.length; i++) {
//     if (oranges[i] + b >= s && oranges[i] + b <= t) {
//       sumOranges += 1;
//     }
//   }
//   console.log(sumApples);
//   console.log(sumOranges);
// }

// countApplesAndOranges(s, t, a, b, apples, oranges);

/////////////////////////////////////////////////////////////////////////////
//Kangaroo Jump
// 0 3
// 4 2
// let startX = 0;
// let jumpX = 3;
// let startY = 4;
// let jumpY = 2;

// function kangaroo(x1, v1, x2, v2) {
//   // Write your code here
//   let meetPoint = 0;
//   for (let i = 0; i <= 20; i++) {
//     x1 += v1;
//     x2 += v2;
//     if (x1 == x2) {
//       meetPoint = x1;
//       console.log("YES");
//       break;
//     }
//   }
//   if (meetPoint == 0) {
//     console.log("NO");
//   }
// }

// kangaroo(5, 3, 6, 2);

// function kangaroo(x1, v1, x2, v2) {
//   let n = 0;
//   while (n < 10000) {
//     if (x1 + n * v1 === x2 + n * v2) {
//       return "YES";
//     }
//     n++;
//   }
//   return "NO";
// }

// console.log(kangaroo(5, 3, 6, 2));

//////////////////////////////////////////////////////////
// function getTotalX(a, b) {
//   // Write your code here
//   let result = 0;
//   let index = 1;
//   let cloneA = a.splice(1, a.length); // clone new array of a but not a[0]
//   while (a[0] * index <= b[0]) {
//     if (
//       cloneA.every((item) => (a[0] * index) % item === 0) &&
//       b.every((item) => item % (a[0] * index) === 0)
//     ) {
//       result++;
//     }
//     index++;
//   }
//   return result;
// }

// getTotalX([2, 6], [24, 36]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Breaking the record
// let arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// let arrB = [10, 5, 20, 20, 4, 5, 2, 25, 1];

// function breakingRecords(scores) {
//   // Write your code here
//   let broke = 0;
//   let worst = 0;
//   let max = scores[0];
//   let min = scores[0];
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > max) {
//       max = scores[i];
//       broke += 1;
//     } else if (scores[i] < min) {
//       min = scores[i];
//       worst += 1;
//     }
//   }
//   return [broke, worst];
// }

// breakingRecords(arrB);

//////////////////////////////////////////////////////////
// Complete the birthday function below.
// function birthday(s, d, m) {
//   let count = 0;
//   for (let a = 0; a < s.length; a++) {
//     let sum = 0;
//     let slice = s.slice(a, a + m);
//     sum = slice.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//     );
//     if (sum === d && slice.length === m) {
//       count += 1;
//     }
//   }
//   return count;
// }

// const s = [1, 2, 1, 3, 2];
// const d = 3;
// const m = 2;
// const s = [2, 2, 1, 3, 2];
// const d = 4;
// const m = 2;
// const s = [1, 1, 1, 1, 1, 1];
// const d = 3;
// const m = 2;
// let result = birthday(s, d, m);

// console.log(result + '\n');

////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5, 6]
// let ka = 5

// function divisibleSumPairs(n, k, ar) {
//   // Write your code here
//   let divisible = []
//   for (let i = 0; i < n; i++) {
//     let val1 = ar[i]
//     for (let j = i + 1; j < n; j++) {
//       let val2 = ar[j]
//       if ((val1 + val2) % k == 0) {
//         divisible.push([val1, val2])
//       }
//     }
//   }
//   console.log(divisible);
//   return divisible
// }

// divisibleSumPairs(6, ka, arr)

////////////////////////////////////////////////////////////////////////////////
////////////

// function migratoryBirds(arr) {
//   // Write your code here
//   let max = 0;
//   let mode = [];
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     let maxVal = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (val == arr[j]) {
//         maxVal += 1;
//       }
//     }
//     if (maxVal > max) {
//       max = maxVal;
//       mode = [val];
//     } else if (maxVal == max) {
//       mode.push(val);
//     }
//   }
//   console.log(mode);
//   console.log(Math.min(...mode));
// }

// migratoryBirds(array2);

// let array = [1, 1, 2, 2, 3];
// let array2 = [1, 4, 4, 4, 5, 3];

// function migratoryBirds(arr) {
//   // Write your code here
//   let listMode = {};
//   let max = 0;
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!listMode[arr[i]]) {
//       listMode[arr[i]] = 1;
//     } else {
//       listMode[arr[i]] += 1;
//     }

//     if (listMode[arr[i]] > max) {
//       max = listMode[arr[i]];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (listMode[arr[i]] >= max) {
//       result.push(arr[i]);
//     }
//   }

//   return Math.min(...result);
// }

// let arr3 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

// console.log(migratoryBirds(arr3));
