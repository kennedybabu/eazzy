import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Route, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { KEY } from '../config/key';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient, 
    private sharedService: SharedService,
    private router:Router) { } 

  loginUser(formValue: any){

    let jsonObject = {
      "username": formValue.username,
      "password": formValue.password
    }

    this.http.post('http://109.123.254.230:8500/accounts/token/', jsonObject).subscribe((response:any) => {
      console.log(response)
      if(response.refresh) {
        let userToken = {'access':response.access, 'refresh': response.refresh}
        let objectString = JSON.stringify(userToken)
        const encryptedOject = CryptoJS.AES.encrypt(objectString, KEY).toString()
        localStorage.setItem('pgKuxUJwTs', encryptedOject)

        this.sharedService.sendSuccessMessage('logged in successful')
        this.router.navigate(['/'])
      }if(response.status === 0){
        this.sharedService.sendErrorMessage('error')
        console.log(response.ok)
      }
    }, (error:any) => {
      this.sharedService.sendErrorMessage(error.error.detail)
      setTimeout(() => {
        this.sharedService.sendErrorMessage('')
      }, 3000)
    })
  }


  isAuthenticated() {
    const encryptedObject = localStorage.getItem('pgKuxUJwTs')

    if(encryptedObject) {
      return true
    } else {
      return false
    }
  }

}
