const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(1, 5);
console.log(result);

const square = (p) => {
  console.log(p);
  return p * p;
};

const square2 = (p) => p * p;

const t = [1, 2, 3];
console.log(t);
const tSquared = t.map((p) => p * p);
console.log(tSquared);


// Declaración de función
function product(a, b) {
  return a * b;
}

const result = product(2, 6);
// result ahora es 12

// expresión de función
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result ahora es 3.5