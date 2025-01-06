import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ChildComponent } from './components/child/child.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent, FooterComponent, ChildComponent, CommonModule, ReactiveFormsModule, RouterModule, FormComponent,
    MatButtonModule, MatCardModule, MatInputModule, MatIconModule, MatTableModule, MatFormFieldModule,
  ], 
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
