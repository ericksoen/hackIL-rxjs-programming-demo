import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { fromEvent } from 'rxjs/observable/fromEvent';


@Component({
  selector: 'app-mouse-event-demo',
  templateUrl: './mouse-event-demo.component.html',
  styleUrls: ['./mouse-event-demo.component.scss']
})
export class MouseEventDemoComponent implements OnInit {

  public mouseMove = fromEvent<MouseEvent>(document, 'mousemove');

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
    this.mouseMove.subscribe(() => this.toastrService.success('Mouse Move', '🐭🐭🐭'));
  }

}
