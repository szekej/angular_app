import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChildComponent } from './components/child/child.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent,ChildComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'my-angular-app';
  messageFromChild = ''; 

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }
}
