const Rx = require('rxjs/Rx');

const { Observable } = Rx;
const { from } = Observable;
const { tap, finalize } = Rx.operators;

const resultLogger = () => console.log(`Result Logger reversed value is ${reversedValues.join('')}`);

const inputStringSequence = from('Hello World');
let reversedValues = [];

inputStringSequence.pipe(
  tap(n => reversedValues = [`${n}`, ...reversedValues]),
  finalize(resultLogger)
).subscribe();