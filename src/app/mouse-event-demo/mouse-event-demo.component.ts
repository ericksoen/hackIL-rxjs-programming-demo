import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { fromEvent } from 'rxjs/observable/fromEvent';


@Component({
  selector: 'app-mouse-event-demo',
  templateUrl: './mouse-event-demo.component.html',
  styleUrls: ['./mouse-event-demo.component.scss']
})
export class MouseEventDemoComponent implements OnInit {

  // TODO: create an observable stream from the MouseEvent (document, 'mousemove')

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
    // TODO: subscribe to the results of the mouseMove ('🐭🐭🐭') observable stream
    // and display the results in the UI via the injected toaster service
  }

}
