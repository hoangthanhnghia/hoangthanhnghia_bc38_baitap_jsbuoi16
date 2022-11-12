// ------------bai1-------------
// var n = 10;
// var sum = 0;
// for( var i = 1; i < n; i++){

// }
    function ex1() {
    var i = 0;
    var n = 0;
   
    while(n < 10000)
    {
      i++;       //
      n = n + i; //
    }
    ketQua = 'số nguyên dương nhỏ nhất là: ' + i;
    document.getElementById('divInfo').innerHTML = ketQua;
    document.getElementById('divInfo').classList.add('info');
    }
    ex1();

// ---------bai2-----------
function ex2() {
    

    var x = document.getElementById('soX').value*1;
    var n = document.getElementById('soN').value*1;

    var xBinh = x * x;
    var nBinh = n * n;
    var tong = xBinh + nBinh;
  //Dau ra
    document.getElementById("divBai2").innerHTML = tong;
    document.getElementById('divBai2').classList.add('bai2');
}
   ex2();
   
// ------------bai3----------
function ex3() {
    var n = document.getElementById('giaiThua').value*1;
    var result = 1;
    
   
    for(var i = 1; i <= n; i++){
      result = result * i;
    }
    // ketQua =   n;
    document.getElementById('divBai3').innerHTML = result;
    document.getElementById('divBai3').classList.add('info');
    }
    ex3();

// ------------bai4-----------
function ex4() {
  var contentLe = document.getElementById('txtLe');
  var contentChan = document.getElementById('txtChan');
  var contentLe = document.getElementById('txtLe');
  var contentChan = document.getElementById('txtChan');
  var contentLe = document.getElementById('txtLe');
  var contentChan = document.getElementById('txtChan');
  var contentLe = document.getElementById('txtLe');
  var contentChan = document.getElementById('txtChan');
  var contentLe = document.getElementById('txtLe');
  var contentChan = document.getElementById('txtChan');

  // var sumChan = 0;
  // var sumLe = 0;
  for(var i = 1; i <= 10; i++){
    if(i % 2 === 0){
      // sumChan += 1;
      document.getElementById('txtChan').innerHTML = contentChan;
      document.getElementById('txtChan').classList.add('info');
    }
    // else{
  //     sumLe += 1;
  //     document.getElementById('txtLe').innerHTML = contentLe;
  //     document.getElementById('txtLe').classList.add('bai2');     
  //   }
  }

}
ex4();

// ------------bai5--------------
function ex5() {
  var n = document.getElementById('txtSoNT');
  for(var i = 1; i < n; i++) {
    if(i < 2){
      continue;
    }else if(i % 2 === 0 && i % i === 0){

    }
  }
}
  












