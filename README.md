# About this Project
This project contains both server and client-side examples of reactive programming. The client-side demonstration subscribes to a stream of Tweets emitted by Node Express app so make you you start the Node application first.

For all examples, there are stubbed out methods with the correct imports in the `node` (server-side) and `src` (client-side) folders; there are also completed versions of the methods in the `node-final` (server-side) and `src-final` (client-side)

# Getting Started
Use `npm install` to install all the various project dependencies.

Note. If you want to subscribe to a stream of tweets, you need to configure `demo-server/config.json` with your Twitter authentication details, which can be generated using [Twitter application management](https://apps.twitter.com/).


## Server-side reactive programming

## Fibonacci Numbers
1.  Navigate to to the `node` folder.
1.  From the command line enter `fibonacci-sequence.js`
1.  A stream of observable data with the numbers from one to 200 is emitted.
1.  After the stream of numbers completes, the Fibonacci sequence is written to the console.

##  FizzBuzz
1.  Navigate to to the `node` folder.
1.  From the command line enter `fizzbuzz.js`, which will create an observable with the numbers from one to 100.
1.  Numbers that do not meet the criteria for Fizz, Buzz, or FizzBuzz are filtered out.
1.  Fizz, Buzz, and FizzBuzz are written to the console as appropriate
1.  After the stream of numbers completes, a concatenated string of numbers that match FizzBuzz is written to the console.

## Reverse a string
1.  Navigate to the `node` folder.
1.  From the command line enter `string-reverse.js`
1.  A stream of observable data with the characters from the string **Hello World** is emitted
1.  The values are added to the beginning of array (previous values are right-shifted)
1.  When the stream of data is completed, invoke a callback function that contains the contents of the array

## Client Side Reactive Programming with WebSockets
1.  In a console window, launch `demo-server/server.js`
1.  Wait until you see **server listening...** and **tweet received** in the console output
1.  Open another console window and execute `ng serve`
1.  When the client application has compiled, navigate to `http://localhost:4200` at which point the server console should display a **client 0 CONNECTED** message
1. Tweets from the node server are broadcast to your client listener, which will increment a counter to keep track of Tweets that contain the token **python** vs. tweets that contain the token **javscript**.

## Other Client Side Reactive Programming Demos
The `src` folder also contains demos of subscribing to DOM events (mouse-click) with Toastr notifications and a real-time search api, using a static JSON file (`./src/assets/name-api.json`) as the API backend.

## Reactive Programming Useful Links
1.  [Toolsday Podcast Episode on RxJs](http://www.toolsday.io/episodes/rxjs.html)
1.  [Reactive Brain Waves](https://medium.com/@urish/reactive-brain-waves-af07864bb7d4)
1.  [Learn RXJS](https://www.gitbook.com/book/btroncone/learn-rxjs/details)
1.  [ReactiveX tutorials](http://reactivex.io/tutorials.html)
1.  [RxJS API Documentation](http://reactivex.io/rxjs/)
1.  [Snake Taming](https://blog.thoughtram.io/rxjs/2017/08/24/taming-snakes-with-reactive-streams.html)
