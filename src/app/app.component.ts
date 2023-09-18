import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { SharedService } from './services/shared.service';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'rent';
  successMessage!: string 
  errorMessage!: string 



  constructor(public loaderService: LoaderService,     
    private sharedService: SharedService,
    private router: Router
    ) {
      this.sharedService.getErrorMessage().subscribe((res) => {
        this.errorMessage = res 
      })

      this.sharedService.getSuccessMessage().subscribe((res) => {
        this.successMessage = res 

        setTimeout(() => {
          this.successMessage = ''
        }, 3000)
      })
     } 

  isOpen: boolean = false 

  toggleSidenav(){
    this.isOpen = !this.isOpen
  }


  logOut(){
    localStorage.removeItem('pgKuxUJwTs')
    this.router.navigate(['login'])
  }
}
