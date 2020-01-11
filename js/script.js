var namares = ["Lalapan Ciprut","Ayam Bawang Cak Per","Ocean Garden","Lalapan Katanya Enak","KPK Resto","Ayam Gober","Saluyu","Ayam Goreng J&J","Mentari Pagi","Ayam Gepuk Ny Linda","Ayam Goreng Tenes","Warung Pudji Mulyo","Waroeng Kecik","Lesehan Bambu","Waroeng Batok","Kedai Si Mbok","Geprek Kak Rose","Warung Rokhis","Ayam Uleg Cak Abit","Ayam Goreng Nelongso","Lalapan Pak Brenk","Warung Areza","KL Express","Ayam Geprek Bensu",
"Ayam Jotoss ChuNup","Ayam Goreng Pemuda","Doan Restaurant","Ayam BFC","Ayam Goreng Sriwijaya","Sathai Street Food"];

var data =
[[15000,12000,25500,12000,11000,11000,14000,12500,14000,11000,17000,18000,10000,20000,23000,27000,10000,17500,10000,15000,10500,14000,28000,19000,13000,13000,55000,12000,17000,12000,],
[4.4,3.6,2.8,2.9,3.5,1.6,2.1,3,1.9,3.5,3.9,1.7,3.5,0.9,0.65,1.8,0.27,2,1.1,1.1,2.9,4.9,4.8,1.9,2.8,3.4,5.2,4.1,7.4,1.3,],
[1,4.1,4,4.7,4.2,3.3,4,4.3,4.4,4.5,4.3,4.3,4.5,4,2,4.5,3.2,4,4.5,4,3.7,5,4.4,3.8,5,4.3,4.2,4,4.3,4.7],];


// ini inputnya
// hj
// hr harga rating
// rj rating jarak



// ini inputnya
var hj, hr, rj;

function input(){

}

// habis itu tombol run jalanin final();
// simpen variabel dr final : var a = final();
// nampilin tabel pake var a
normalisasiNegatif(data,0);
normalisasiNegatif(data,1);

normalisasiNormal(data,0);
normalisasiNormal(data,1);
normalisasiNormal(data,2);


function final()
{
  var d = bobotKriteria(hj,hr,rj);
  var c = math.transpose(data);
  var kalimatr = math.multiply(c,d);
  var e = [];

  for(i = 0; i< namares.length; i++) {
    e.push([namares[i],kalimatr[i]]);
  }
  e = e.sort(function(a,b) {
   return b[1] - a[1];
 });

  return e;

}

function min(data){
 var min =data[0];
 for (var i = 0; i < data.length; i++) {
  if(min > data[i]) {
    min = data[i];
  }
}
return min;
}

function max(data){
 var max =data[0];
 for (var i = 0; i < data.length; i++) {
  if(max < data[i]) {
    max = data[i];
  }
}
return max;
}


function normalisasi(data,sum) {
  return data/sum;
}

function average(data){
  return sum(data)/data.length;
}

function sum(data){
  var sum =0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}


function normalisasiNegatif(data, index) {

  var sum=0;
  var range = max(data[index]) - min(data[index]);
  var minimal = min(data[index]);
  var temp = data;
  for (var i = 0; i < data[0].length; i++) {
    sum += data[index][i];
  }

  for (var i = 0; i < data[0].length; i++) {
    data[index][i] = 1 - ((temp[index][i]-minimal)/range);

  }

  return data;

}

function normalisasiNormal(data, index) {
  var sum=0;
  for (var i = 0; i < data[0].length; i++) {
    sum += data[index][i];
  }

  for (var i = 0; i < data[0].length; i++) {
    data[index][i] = normalisasi(data[index][i],sum);

  }

  return data;
}


function bobotKriteria(hj,hr,rj) {
  var result = [];

  var temp = [
  [1, 1/hj, 1/hr],
  [hj, 1, rj],
  [hr, 1/rj, 1]
  ];

  var arr = [
  [1, 1/hj, 1/hr],
  [hj, 1, rj],
  [hr, 1/rj, 1]
  ];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      arr[i][j] = temp[i][j]/sum(temp[i]);
    }
  }

  for (var i = 0; i < 3; i++) {
    result[i] = (arr[0][i]+arr[1][i]+arr[2][i])/arr[0].length;
  }

  return result;

}
