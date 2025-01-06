import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageEvent.emit('Hello from Child!');
  }
}
