var input = [
                ["01", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["02", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["03", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["04", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

var dataFormat = ["Number : ", "Name : ", "Origin : ", "Date of Birth : ", "Hobby : " ]

function dataHandler (no, nama, asal, tglLahir, hobby){
  for ( var row = 0; row < input.length; row++){
    console.log("\n");
    for (var col = 0; col < input[row].length; col++){
      console.log(dataFormat[col]+input[row][col]);
    }
  }
}

var dataLengkap = dataHandler(input);
console.log(dataLengkap);
