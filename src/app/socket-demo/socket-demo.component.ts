import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { map, filter, reduce, scan, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-socket-demo',
  templateUrl: './socket-demo.component.html',
  styleUrls: ['./socket-demo.component.scss']
})
export class SocketDemoComponent implements OnInit {

  public javaScriptTweets = [];
  public pythonTweets = [];

  constructor(private toastrService: ToastrService) {
    const socket$ = new WebSocketSubject<any>('ws:/localhost:8080');

    // TODO: subscribe to the results of the websocket stream and filter to '💯💯💯' tweets
    // TODO: Publish the results to via the injected toaster service

    // TODO: Repeat for '🐍' tweets
  }

  ngOnInit() {
  }

}
