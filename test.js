var genapganjil = genapGanjil();
var bilanganprima = bilanganPrima();
var bilfibonacci = fibonacci();
var tabungan = hitungTabungan();
var array = soalArray([1, 4, 5, 3, 2, 2, 4]);
document.getElementById("soal1").innerHTML = genapganjil;
document.getElementById("soal2").innerHTML = bilanganprima;
document.getElementById("soal3").innerHTML = bilfibonacci;
document.getElementById("soal4").innerHTML = tabungan;
document.getElementById("soal5").innerHTML = array;

function genapGanjil() {
  let tampung_genap = [];
  let tampung_ganjil = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      tampung_genap = [...tampung_genap, i];
    } else {
      tampung_ganjil = [...tampung_ganjil, i];
    }
  }
  document.write("1. Pisahkan Genap dan Ganjil dari angka 1 s/d 100", "<br>");
  document.write(tampung_genap, "<br>");
  document.write(tampung_ganjil, "<br><br>");
}

function bilanganPrima() {
  let tampung_prima = [];
  for (let i = 0; i <= 100; i++) {
    let bil = 0;
    for (j = 0; j <= i; j++) {
      if (i % j == 0) {
        bil = bil + 1;
      }
    }
    if (bil == 2) {
      tampung_prima = [...tampung_prima, i];
    }
  }
  document.write("2. Carilah bilangan prima dari 0 s/d 100", "<br>");
  document.write(tampung_prima, "<br><br>");
}

function fibonacci() {
  let tampung_fibonacci = [];
  let n1 = 0;
  let n2 = 1;
  for (let i = 0; i <= 10; i++) {
    if (i === 0 || i === 1) {
      tampung_fibonacci = [...tampung_fibonacci, i];
    } else {
      let total = n1 + n2;
      tampung_fibonacci = [...tampung_fibonacci, total];
      n1 = n2;
      n2 = total;
    }
  }
  document.write("3. Carilah bilangan fibonacci 10 kali", "<br>");
  document.write(tampung_fibonacci, "<br><br>");
}

function hitungTabungan() {
  let uangAndi = 750000;
  let bunga = 0;
  let sisih = 0;
  let hasil = 0;
  let tabunganakhir = 0;
  for (i = 1; i <= 12; i++) {
    if (i > 1) {
      bunga = (uangAndi * 6) / 100;
      if (uangAndi + bunga > 800000) {
        sisih = (800000 * 3) / 100;
      } else {
        sisih = ((uangAndi + bunga) * 3) / 100;
      }
    }
    hasil += `Tabungan Awal : ${uangAndi.toFixed(2)} \n Bunga : ${bunga.toFixed(
      2
    )} \n Sisih : ${sisih.toFixed(2)} \n Uang Bulan ${i} : ${(
      uangAndi +
      bunga -
      sisih
    ).toFixed(2)} \n <br>`;

    tabunganakhir = `Tabungan bulan ke 12 =  ${(
      uangAndi +
      bunga -
      sisih
    ).toFixed(2)}`;
    uangAndi = uangAndi + bunga - sisih;
  }
  document.write(
    "4. Andi menabung dengan uang 750.000 dibulan pertama dan mendapatkan bunga sebesar 6% pada bulan berikutnya, setiap bulan berikutnya andi menyisihkan 3% dari tabungannya dan maksimal yang disisihkan 3% dari 800.000. berapakah total tabungan andi selama 1 tahun?",
    "<br>"
  );
  document.write(hasil, "<br><br>");
  document.write(tabunganakhir, "<br><br>");
}

function soalArray(arr) {
  let dataTampungArray = [];
  let dataArrayCount = "";
  for (let i = 0; i < arr.length; i++) {
    let same = false;
    for (let a = 0; a < dataTampungArray.length; a++) {
      if (arr[i] == arr[a]) {
        same = true;
      }
    }
    if (!same) {
      dataTampungArray = [...dataTampungArray, arr[i]];

      let totalSame = 0;
      for (let b = 0; b < arr.length; b++) {
        if (arr[i] == arr[b]) {
          totalSame = totalSame + 1;
        }
      }
      dataArrayCount += `Angka ${arr[i]} sebanyak ${totalSame} <br>`;
    }
  }
  let num = dataTampungArray.length;
  document.write(
    "5a. Tampilkan array secara tunggal dan total angka apabila ditunggalkan",
    "<br>"
  );
  document.write(dataTampungArray, "<br>");
  document.write("Total angka =", num, "<br><br>");
  document.write("5b. Tampilkan total dari masing-masing angka", "<br>");
  document.write(dataArrayCount, "<br></br>");
}
