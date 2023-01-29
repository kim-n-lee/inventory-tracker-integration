import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  
  {
    path:'registration',
    component: RegistrationComponent
  },

  {
    path:'login',
    component: LoginComponent
  },
  
  {
    path:'users',
    component: UsersComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
