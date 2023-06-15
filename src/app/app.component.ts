import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { SharedService } from './services/shared.service';

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
    private sharedService: SharedService
    ) {
      this.sharedService.getErrorMessage().subscribe((res) => {
        this.errorMessage = res 
      })

      this.sharedService.getSuccessMessage().subscribe((res) => {
        this.successMessage = res 

        setTimeout(() => {
          this.successMessage = ''
        }, 1000)
      })
     } 

  isOpen: boolean = false 

  toggleSidenav(){
    this.isOpen = !this.isOpen
  }
}
