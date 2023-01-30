import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddmanufacturerComponent } from './components/addmanufacturer/addmanufacturer.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { ManufacturersComponent } from './components/manufacturers/manufacturers.component';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AddmanufacturerComponent,
    Navbar1Component,
    Navbar2Component,
    ManufacturersComponent,
    ItemsComponent,
    AdditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
