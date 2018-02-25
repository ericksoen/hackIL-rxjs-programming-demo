const Rx = require('rxjs/Rx');

const { Observable } = Rx;
const { from, range } = Observable;
const { tap, filter, map, reduce } = Rx.operators;

const fizzBuzzSequence = range(1, 100);

fizzBuzzSequence.pipe(
    filter(n => n % 3 === 0 || n % 5 === 0),
    tap(n => n % 3 === 0 && n % 5 !== 0 ? console.log(`Fizz with ${n}`) : null),
    tap(n => n % 5 === 0 && n % 3 !== 0 ? console.log(`Buzz with ${n}`) : null),
    tap(n => n % 15 === 0 ? console.log(`FizzBuzz with ${n}`) : null),    
    filter(n => n % 15 === 0),
    map(n => `${n}`),
    // tslint:disable-next-line:max-line-length
    reduce((acc, val) => `${acc}, ${val}`), // Accumulates over the life of the observable and gives the accumulated result when the source completes
    tap(n => console.log(`FizzBuzz items are: ${n}`))
  ).subscribe();