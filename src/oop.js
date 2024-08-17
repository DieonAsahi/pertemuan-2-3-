"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`halo nama saya ${this.name} dan saya berumur ${this.age} tahun`);
    }
}
class Employe extends Person {
    constructor(name, age, jobtitle) {
        super(name, age);
        this.jobtitle = jobtitle;
    }
    work() {
        console.log(`${this.name} bekerja sebagai ${this.jobtitle}`);
    }
}
let employe = new Employe("Zulfan", 20, "tukang ngaduk kopi");
employe.greet();
employe.work();
