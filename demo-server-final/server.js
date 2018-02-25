const server = require('http').createServer();
const nconf = require('nconf');
const Twit = require('twit');
const express = require('express');
const path = require('path');
const WebSocketServer = require('ws').Server;
const Rx = require('rxjs/Rx');
const _ = require('lodash');

const app = express();
const PORT = 8080;
const clients = {};

nconf.file({file: './demo-server/config.json'}).env();

var twitter = new Twit({
    consumer_key: nconf.get('TWITTER_CONSUMER_KEY'),
    consumer_secret: nconf.get('TWITTER_CONSUMER_SECRET'),
    access_token: nconf.get('TWITTER_ACCESS_TOKEN'),
    access_token_secret: nconf.get('TWITTER_ACCESS_TOKEN_SECRET')
});

var tweetStream = twitter.stream('statuses/filter', { track: 'javascript,python'});

tweetStream.on('tweet', function (tweet) {
    console.log('tweet received');

    _.each(clients, (client) => client.emit('message', tweet.text));
});

const wss = new WebSocketServer({server});

app.use(express.static(path.join(__dirname, './browser')));

let cid = 0;
wss.on('connection', (ws) => {
  const clientId = cid++;
  let symbolStreams = {};
  const subscription = new Rx.Subscription();
  clients[ws.id] = ws;
  console.log(`client ${clientId} CONNECTED`);

  ws.on('close', () => {
    console.log(`client ${clientId} CLOSED`);
    delete clients[ws.id];
    subscription.unsubscribe();
    symbolStreams = {};
  });

  ws.on('error', (error) => {
    console.log(`client ${clientId} ERROR`);
    console.error(error);
    subscription.unsubscribe();
    symbolStreams = {};
  });

  ws.on('message', (msg) => {
    var body = JSON.stringify({tweet: msg});
    console.log(`Tweet body: ${body}`);
    ws.send(body);
  });
});

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
server.on('request', app);
