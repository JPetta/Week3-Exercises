function tentukanDeretAritmatika(arr) {
  var arrDifference = []
  var difference;
  var num = 0;
  for (var i = 0; i < arr.length-1; i++){
    difference = arr[i+1]-arr[i]
    arrDifference.push(difference)
    }

  // console.log(arrDifference)


  var zeroCheck = [];
  for (var i = 0; i < arrDifference.length-1; i++){
    zeroCheck.push(arrDifference[i]-arrDifference[i+1])
  }

  // console.log(zeroCheck)

  for (var i = 0; i < zeroCheck.length-1; i++){
  num += zeroCheck[i]
  }

  if (num == 0 ){
    return true
  }
  else {
    return false
  }

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
