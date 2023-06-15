import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private sharedService: SharedService) { } 

  loginUser(formValue: any){
    let jsonObject = {
      "username": formValue.username,
      "password": formValue.password
    }
    this.http.post('http://109.123.254.230:8500/accounts/token/', jsonObject).subscribe((response) => {
      console.log(response)
      if(response === 702) {
      } else {
        this.sharedService.sendErrorMessage('something went wrong')
      }
    })
  }
}
