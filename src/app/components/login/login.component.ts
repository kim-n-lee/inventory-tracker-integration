import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;

  constructor(private router: Router, private loginservice : AuthenticationService, private userService: UserService) {
    this.user = new User();
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.user = (this.loginForm.value)
      this.loginservice.authenticate(this.user).subscribe(
        data => {
          if (data == true){
            this.loginForm.reset();
            console.log(this.user)
            this.router.navigate(['/']);
            return true;
          } else {
            console.log ("didn't workkkk")
          }
        }
      )
    } else {
      console.log("Didn't work.")
      console.log(this.user)
    }
  }
}
