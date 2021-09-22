// void main() {
//   List number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   print(createPhoneNumber1(number));
// }

// String createPhoneNumber1(List numbers) {
//   // Your code goes here
//   String phone1 = "";
//   String phone2 = "";
//   String phone3 = "";

//   for (var i = 0; i < numbers.length; i++) {
//     if (i <= 2) {
//       phone1 += numbers[i].toString();
//     } else if (i >= 3 && i <= 5) {
//       phone2 += numbers[i].toString();
//     } else if (i >= 6 && i <= 9) {
//       phone3 += numbers[i].toString();
//     }
//   }
//   return "("+phone1+") "+phone2+"-"+phone3;
// }

// String createPhoneNumber2(List numbers) {
//   var n = numbers.join('');
//   return '(${n.substring(0, 3)}) ${n.substring(3, 6)}-${n.substring(6)}';
// }

import 'dart:io';

void main() {
    int a = int.parse(stdin.readLineSync());
    int b = int.parse(stdin.readLineSync());
    
    stdout.write(add(a,b));
}

int add(int a, int b) {
    return a + b;
}

