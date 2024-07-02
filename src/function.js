"use strict";
//funtion declaration
function sapa(nama) {
    console.log("Halo,aku" + nama);
}
sapa("Yasir!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
//arrow function
let multiplication = (x, y) => {
    return x * y;
};
let result = multiplication(5, 8);
console.log("Hasil Perkalian: " + result);
//no 1
let expression = function (num) {
    return num ** 3;
};
console.log(expression(3));
//no 2
function greet(nama) {
    console.log("Hello, name!" + nama);
}
greet("Atha");
//no 3
let multiply = (a, b) => {
    return a * b;
};
let kali = multiply(3, 7);
console.log("Hasil Perkalian: " + kali);
//object
let pers;
pers = {
    name: "Yasir Rizqi",
    age: 20,
    address: "Tegal"
};
console.log(pers);
