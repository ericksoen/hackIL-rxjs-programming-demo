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

    socket$.pipe(
      map(n => n.tweet.toLowerCase()),
      tap(n => console.log(n)),
      filter(n => n.indexOf('javascript') !== -1),
      tap(n => this.javaScriptTweets.push(1)),
      tap(n => this.toastrService.success(n, '💯💯💯'))
    ).subscribe(n => console.log(n));

    socket$.pipe(
      map(n => n.tweet.toLowerCase()),
      tap(n => console.log(n)),
      filter(n => n.indexOf('python') !== -1),
      tap(n => this.pythonTweets.push(n)),
      tap(n => this.toastrService.info(n, '🐍'))
    ).subscribe(n => console.log(n));

  }

  ngOnInit() {
  }

}
