import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChildComponent } from './components/child/child.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent, ChildComponent, CommonModule, ReactiveFormsModule, RouterModule], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {
  title = 'my-angular-app';
  messageFromChild = ''; 

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // inicjalizacja formularza
    this.userForm = this.fb.group({
      name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Formularz zawiera błędy.');
    }
  }

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }
}
