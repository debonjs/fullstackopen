const x = Uint16Array;
let y = 5;

// arrays
const t = [1, -1, 3];

t.push(5);

// console.log(t.length);
// console.log(t[1]);
// console.log("");
t.forEach((value) => {
  // console.log(value);
});

const t2 = t.concat();
// console.log(t);

const m1 = t.map((value) => value * 2);
// console.log(m1);

const m2 = t.map((value) => "<li>" + value + "</li>");
// console.log(m2);

// dasignaciónn de destrucuracioń -> destructuring

const [first, second, ...rest] = t;
console.log(first, second);
