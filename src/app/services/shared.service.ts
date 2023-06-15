import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private errorMessage = new Subject<string>()
  private successMessage = new Subject<string>()


  constructor() { } 

  sendErrorMessage(message: string){
    this.errorMessage.next(message)
  }

  sendSuccessMessage(message: string){
    this.successMessage.next(message)
  }
  

  getErrorMessage(){
    return this.errorMessage.asObservable()
  }

  getSuccessMessage(){
    return this.successMessage.asObservable()
  }
}
