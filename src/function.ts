//funtion declaration
function sapa (nama:string){
    console.log("Halo,aku"+ nama);
}
sapa("Yasir!")

function calculate (a:number, b:number, c:number, ): number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan: " + hasil);

//arrow function
let multiplication = (x:number, y:number) => {
    return x * y
}
let result = multiplication(5,8)
console.log("Hasil Perkalian: " + result)

//no 1
let expression = function(num:number){
    return num ** 3
}
console.log(expression(3));

//no 2
function greet (nama:string) {
    console.log("Hello, name!" + nama)
}
greet("Atha")

//no 3
let multiply = (a:number, b:number) => {
    return a * b
}
let kali = multiply(3,7)
console.log("Hasil Perkalian: " + kali);

//object
let pers:{
    name : string,
    age : number,
    address : string
}
pers = {
    name : "Yasir Rizqi",
    age : 20,
    address : "Tegal"
}
console.log(pers)
