"use strict";
let a = "atha";
console.log(a);
//eksplisit
let x = 90;
var y = "plugin";
console.log(x, y);
//implisit
let k = 20;
let o = "web";
console.log(k, o);
//tipe data any
let kelas;
kelas = true;
console.log(kelas);
//union
let mouse;
mouse = 20;
console.log(mouse);
let userID;
userID = 69;
console.log(userID);
//void
function oke(name) {
    console.log(`Hello, ${name}!`);
}
oke("Yasir");
//square bracket
let list;
list = [1, 2, 3, 4];
//generic array
let list1;
list1 = [1, 2, 3, 4];
console.log(list, list1);
//tuple
let person;
person = ["idris", 51];
console.log(person);
//object
let person1;
person1 = {
    name: "imun",
    age: 34,
    address: "tegal"
};
console.log(person1);
//for loop
for (let i = 0; i < 5; i++) {
    console.log(`Loop ke ${i + 1}`);
}
//while loop
let counter = 0;
while (counter <= 5) {
    counter++;
    console.log(counter);
}
//if else
let nilai = 90;
if (nilai > 85) {
    console.log(`lulus`);
}
else {
    console.log(`tidak lulus`);
}
//switch else
let day = 2;
let dayname;
switch (day) {
    case 1:
        dayname = "senin";
        break;
    case 2:
        dayname = "selasa";
        break;
    case 3:
        dayname = "rabu";
        break;
    case 4:
        dayname = "kamis";
        break;
    case 5:
        dayname = "jumat";
        break;
    default:
        dayname = "hari lainnya";
}
console.log(`hari ini adalah ${dayname}`);
