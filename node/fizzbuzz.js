const Rx = require('rxjs/Rx');

const { Observable } = Rx;
const { from, range } = Observable;
const { tap, filter, map, reduce } = Rx.operators;

const fizzBuzzSequence = range(1, 100);

fizzBuzzSequence.pipe(
    // TODO: Print FizzBuzz if divisible only by 15
    // TODO: Print Fizz if divisible only by 3
    // TODO: Print Buzz if divisible only by 5
  ).subscribe();
