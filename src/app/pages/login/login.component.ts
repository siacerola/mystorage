import { Component } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.valid);
      console.log(this.loginForm.value.email);
      console.log(this.loginForm.value.password);
    } else {
      console.log(this.loginForm.valid);
    }

  }
}
