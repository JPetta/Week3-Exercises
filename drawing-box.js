var arr = [];
var num = 4;
for (var i=0; i < num; i++){
  for (var j=0; i < num; j++){
    if (i*j == 0 && (i*j)%3 == 0){
      arr.push("*");
    }
    else {
      arr.push(" ");
    }
  }
}