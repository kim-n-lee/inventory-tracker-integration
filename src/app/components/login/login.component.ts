import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;
  validMessage: string = "";

  constructor(private router: Router, private loginservice : AuthenticationService, private userService: UserService) {
    this.user = new User();
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    
  }

  //this method takes the values from the login form to check against the database
  //if the login is valid, user is redirected to /dashboard
  //TODO: user currently can just go to dashboard anyway without logging in
      // need generate a JWT to store in sessionStorage to use for subsequent requests in spring boot
        // then configure spring boot to require a valid JWT (JSON Web Token)
        // then use this in Angular to set up guards to protect routes that should only be accessible to authenicated users
  submitLogin() {
    if (this.loginForm.valid) {
      this.user = (this.loginForm.value)
      this.loginservice.authenticate(this.user).subscribe( //subscribe allows us to access the data returned
        data => { // if the data is valid, this is where is will be handled
          if (data == true){ 
            this.loginForm.reset();
            sessionStorage.setItem("sessionName", this.user.username) //sets a sessionName key in session storage, used to verify if user is logged in
            console.log("next 2 lines in console verify sessionName as the username and verifies if user is logged in")
            console.log(sessionStorage.getItem("sessionName"))
            console.log(this.loginservice.isLoggedIn())

            this.router.navigate(['/dashboard']);
            return true;
          } else {
            this.validMessage = "Invalid username or password.  Please try again.";
            this.loginForm.reset();
            console.log ("didn't work")
          }
        }
      )
    } else {
      console.log("Didn't work.")
      console.log(this.user)
    }
  }
}
