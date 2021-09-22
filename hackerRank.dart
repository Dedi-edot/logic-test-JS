import 'dart:math';

void main(){
  var array = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
    ];

    hourglassSum(array);
}

void hourglassSum(List arr) {
    // Write your code here
    List<int>sum = [];
    for (var i = 0; i < arr.length -2; i++) {
        for (var j = 0; j < arr.length -2; j++) {
            var count = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            sum.add(count);
        }
    }
    print(sum);
    print(sum.reduce(max));
}