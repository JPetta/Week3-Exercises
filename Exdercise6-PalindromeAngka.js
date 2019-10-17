function angkaPalindrome(num) {
//jadikan num sebagai string agar bisa di ambil index nya//
while(true){
var numString = num.toString();
var numReversed ="";

//balikkan angka lalu masukkan ke variabel numReversed//
for (var i = numString.length-1; i >= 0; i--){
  numReversed += numString[i];
}

//jadikkan Int lagi agar bisa di tambah//
var numIntReversed = parseInt(numReversed,10);
var numInt = parseInt(numString,10);

if (numReversed.length == 1){
  return numInt+1}

// Jika tidak palindrome, tambah terus numInt sampai menjadi palindrome//
if (numInt!=numIntReversed){
  num+=1
}
else if (numInt == numIntReversed){
 return numInt
}

}

}





// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001 
