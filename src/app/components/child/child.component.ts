import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports: [MatCardModule, CommonModule]
})
export class ChildComponent {
  message: string = '';

  showMessage() {
    this.message = 'Child here!';
  }
}