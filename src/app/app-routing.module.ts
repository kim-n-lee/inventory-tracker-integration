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
import { ItemslistComponent } from './components/itemslist/itemslist.component';
import { UpdateitemComponent } from './components/updateitem/updateitem.component';
import { SearchFormComponent } from './components/searchForm/searchForm.component';
import { SearchResultsComponent } from './components/searchResults/searchResults.component';
import { UpdatemanufacturerComponent } from './components/updatemanufacturer/updatemanufacturer.component';

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
    component: ManufacturersComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'items',
    component: ItemsComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'manufacturers/add',
    component: AddmanufacturerComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'items/add',
    component: AdditemComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'items/all',
    component: ItemslistComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'items/update/:id',
    component: UpdateitemComponent,
    canActivate: [AuthGuardService]
  }, 

  {
    path: 'search',
    component: SearchFormComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'search/results',
    component: SearchResultsComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'manufacturers/update/:id',
    component: UpdatemanufacturerComponent,
    canActivate: [AuthGuardService]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
