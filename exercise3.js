var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 (nomor, nama, asal, tglLahir, hobby) {
  input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
  input.splice(4,1,"SMA Internasional Metro")
  
  var tglLahirString = input[3].toString();
  var tglLahirArray = tglLahirString.split("/");
  var namaString = input[1].toString();
  var bulan = parseInt(tglLahirArray[1],10);

  console.log(input);

  switch (bulan) {
    case 01: {bulan = "Januari"}; break;
    case 02: {bulan = "Febuari"}; break;
    case 03: {bulan = "Maret"}; break;
    case 04: {bulan = "April"}; break;
    case 05: {bulan = "May"}; break;
    case 06: {bulan = "Juni"}; break;
    case 07: {bulan = "Juli"}; break;
    case 08: {bulan = "Agustus"}; break;
    case 09: {bulan = "September"}; break;
    case 10: {bulan = "Oktober"}; break;
    case 11: {bulan = "November"}; break;
    case 12: {bulan = "Desember"}; break;
  }
  console.log(bulan);

  var tglLahirArraySorted = tglLahirArray.sort(function(a,b){return b-a});
  console.log(tglLahirArraySorted);

  var tglLahirArrayJoined = tglLahirArray.join("-");
  console.log(tglLahirArrayJoined);

  var namaPendek = namaString.slice(0,14);
  console.log(namaPendek);

  return "\n\n"+input+"\n"+bulan+"\n"+tglLahirArraySorted+"\n"+tglLahirArrayJoined+"\n"+namaPendek
}

console.log(dataHandling2(input))
