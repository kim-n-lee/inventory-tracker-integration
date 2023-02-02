import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManufacturersComponent } from './components/manufacturers/manufacturers.component';
import { ItemsComponent } from './components/items/items.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AddmanufacturerComponent } from './components/addmanufacturer/addmanufacturer.component';
import { AdditemComponent } from './components/additem/additem.component';
import { SearchComponent } from './components/search/search.component';

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
  },

  {
    path: 'manufacturers',
    component: ManufacturersComponent
  },

  {
    path: 'items',
    component: ItemsComponent
  },

  {
    path: 'manufacturers/add',
    component: AddmanufacturerComponent
  },

  {
    path: 'items/add',
    component: AdditemComponent
  },

  {
    path: 'search/results',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
