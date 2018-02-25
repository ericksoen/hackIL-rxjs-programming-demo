const Rx = require('rxjs/Rx');

const { Observable } = Rx;
const { from } = Observable;
const { tap, finalize } = Rx.operators;

const resultLogger = () => console.log('TODO: Implement a logger here with the results');

// TODO: RxJs Source code deep dive if time permits
const inputStringSequence = from('Hello World');
let reversedValues = [];

inputStringSequence.pipe(
).subscribe();
