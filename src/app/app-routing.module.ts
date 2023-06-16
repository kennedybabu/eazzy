import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LandlordsComponent } from './pages/landlords/landlords.component';
import { SystemComponent } from './pages/system/system.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path:'', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent,canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'landlords', component: LandlordsComponent,canActivate: [AuthGuard]},
  {path: 'system', component: SystemComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
