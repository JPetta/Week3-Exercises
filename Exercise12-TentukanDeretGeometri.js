function tentukanDeretGeometri(arr) {
  var arrGeometric = []
  var num = 0;
  for (var i = arr.length-1; i > 0; i--){
    var divided
    divided = arr[i]/arr[i-1]
    arrGeometric.push(divided)
  }
  // console.log(arrGeometric)

  var zeroCheck = [];
  for (var i = 0; i < arrGeometric.length-1; i++){
    zeroCheck.push(arrGeometric[i]-arrGeometric[i+1])
  }
  // console.log(zeroCheck)

  for (var i = 0; i < zeroCheck.length-1; i++){
  num += zeroCheck[i]
  }
  // console.log(num)

  if (num == 0 ){
    return true
  }
  else {
    return false
  }


}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
