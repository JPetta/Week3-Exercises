function angkaPalindrome(num) {
  //jadikan num sebagai string agar bisa di ambil index nya//
  var numString = num.toString();
  var numReversed ="";

  //balikkan angka lalu masukkan ke variabel numReversed//
for (var i = numString.length-1; i >= 0; i--){
  numReversed += numString[i];
}

//jadikkan Int lagi agar bisa di tambah//
var numIntReversed = parseInt(numReversed,10);
var numInt = parseInt(numString,10);

// return numInt+" "+numIntReversed

//jika palindrome, angka ditambah satu. Jika tidak, tambah terus numInt sampai menjadi palindrome//
if (numInt==numIntReversed){
  return numInt+=1
}
else{
  return "perhitungan sampai palindrome"
  }  
}




// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001 
