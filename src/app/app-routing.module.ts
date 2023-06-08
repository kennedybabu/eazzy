import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LandlordsComponent } from './pages/landlords/landlords.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'landlords', component: LandlordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
