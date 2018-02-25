const Rx = require('rxjs/Rx');

const { Observable } = Rx;
const { from, range } = Observable;
const { tap, filter, map, reduce } = Rx.operators;

const fibonacciSequence = range(1, 200);

let fibonacciNumbers = [];
fibonacciSequence.pipe(
  filter(n => fibonacciNumbers.length < 2 || fibonacciNumbers[0] + fibonacciNumbers[1] === n),
  tap(n => fibonacciNumbers = [n, ...fibonacciNumbers]),
  map(n => `${n}`),
  reduce((acc, val) => `${acc}, ${val}`),
  tap(n => console.log(n))
).subscribe(n => console.log());