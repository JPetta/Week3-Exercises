function palindrome(kata) {
var kataKebalik="";

//balikkan kata//
for (var i = kata.length-1; i >= 0; i--){
  kataKebalik += kata[i];
  // console.log(kataKebalik)
}

//bandingkan kataKebalik dengan kata//
  if (kata==kataKebalik){
    return true
  }
  else if (kata!=kataKebalik){
    return false
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
