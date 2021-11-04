/* 
============================================
*/

/* 
Soal 1.
gunakan console.log untuk cetak
hasil penjumlahan dari num1 dan num2 
*/

// store input numbers
const num1 = 2
const num2 = 2

//add two numbers
hasil = num1 + num2;
// display the sum
console.log(hasil); // Jumlah dari num1 dan num2 adalah 4

/* 
============================================
*/

/* 
Soal 2.
Membuat konversi kilometer ke miles
1 Km = 0.621371 Miles

note: gunakan Math.round untuk cetak angka hasil konversi 
miles dengan 2 angka dibelakang koma

7.4564520000000005 => 7.45
*/

const kilometers = 13

// conversion factor
const factor = 0.621371;

// calculate miles
const miles = kilometers * factor;

console.log(`${kilometers} kilometers is equal to ${Math.round(miles).toFixed(2)} miles.`);

/* 
============================================
*/

/* 
Soal 3.
Buat sebuah fungsi untuk mengecek tempertur air:
Jika suhu air == 100 derajat maka cetak 'Air mendidih'
Jika suhu air antara 25 derajat hingga 27 derajat maka cetak 'Air biasa'
Jika suhu air == 0 derajat maka cetak 'Air membeku'
*/

// buat fungsinya dibawah ini!

let air = prompt('Masukan angka suhu 0-100 \n 100 = mendidih , 0 = membeku sisanya air biasa ');
if(air == 100){
console.log('Air Mendidih')  // Air mendidih
}else if(air == 0){
console.log('Air Membeku') // Air membeku
}else if(air <= 27){
console.log('Air Biasa') // Air biasa
}else if(air >= 25){
console.log('Air Biasa') // Air biasa
}


/* 
============================================
*/

/* 
Soal 4.
Fizz Buzz:
Buat fungsi fizzBuzz untuk mencetak angka 1 - 100.
jika bilangan kelipatan 3 cetak "Fizz"
jika bilangan kelipatan 5 cetak "Buzz"
jika bilangan kelipatan 3 dan 5 cetak "FizzBuzz"
Selain itu cetak angka.

Contoh:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
*/

// tulis code kamu disini:

function * fizzBuzz() {

    let i = 0;
    while (true) {
        ++i;
        let x = 0;
        if (i % 3 === 0 && i % 5 === 0) yield 'Fizz Buzz';
        else if (i % 3 === 0) yield 'Fizz';
        else if (i % 5 === 0) yield 'Buzz';
        else yield i;
    }

}

var gtr = fizzBuzz();
for (var i = 0; i < 100; i++) {
    console.log(gtr.next().value + ' ');
}
/* 
============================================
*/


/* 
Soal 5.
Buat sebuah fungsi untuk mengecek angka ganjil atau genap
*/

function oddOrEven(i) {
return ( i % 2 ) ? "ganjil" : "genap";
}
console.log(oddOrEven(11))// ganjil
console.log(oddOrEven(2))// genap
console.log(oddOrEven(29))// ganjil



