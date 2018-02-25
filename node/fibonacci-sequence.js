const Rx = require('rxjs/Rx');

const { Observable } = Rx;
const { from, range } = Observable;
const { tap, filter, map, reduce } = Rx.operators;

// TODO: RxJs Source Code deep dive on range operator
const fibonacciSequence = range(1, 200);

let fibonacciNumbers = [];
fibonacciSequence.pipe(
    // TODO: Implement a fibonacci sequence algorithm and print the comma separated list to the console
).subscribe(n => console.log());
