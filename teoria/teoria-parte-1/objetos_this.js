"use strict";

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },

  doAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.growOlder = function () {
  this.age += 1;
};

// console.log(arto.age); // se imprime 35
// arto.growOlder();
// console.log(arto.age); // se imprime 36

// arto.doAddition(1, 4);
// const referenceToAddition = arto.doAddition;
// referenceToAddition(10, 15);

arto.greet();
setTimeout(arto.greet, 1000);
// const referenceToGreet = arto.greet; error con use strict o imprime name como undefined
// referenceToGreet();

const referenceToGreet = arto.greet.bind(arto);
referenceToGreet();
