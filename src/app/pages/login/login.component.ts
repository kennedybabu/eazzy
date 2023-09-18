import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  { 

  constructor(private loginService: LoginService) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){
    this.loginService.loginUser(this.loginForm.value)
  }

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

}
