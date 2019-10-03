function pasanganTerbesar(num) {
var numString = num.toString();
var numArray = [];
var rows = numString.length-1;
for (var i =0; i < rows; i++){
 numArray.push(numString[i]+numString[i+1])
}

var numSorted = numArray.sort()
return numSorted[numArray.length-1]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
