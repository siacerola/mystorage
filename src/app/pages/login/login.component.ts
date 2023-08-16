import { Component, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() newItemEvent = new EventEmitter<boolean>()

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  constructor(
    private router:Router
  ){}

  onSubmit(value:boolean) {
    if (this.loginForm.valid) {
      console.log(this.loginForm.valid);
      console.log(this.loginForm.value.email);
      console.log(this.loginForm.value.password);
      this.newItemEvent.emit(value)
      this.router.navigate(['/dashboard/summary'])
      console.log(value);
    } else {
      console.log(this.loginForm.valid);
      console.log(value);
    }
  }
}
