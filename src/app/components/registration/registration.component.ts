import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  validMessage: string = "";

  constructor(private router: Router, private userService: UserService){}

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    if(this.userService.isUsernameNotAvailable(this.userForm.value.username)){
      this.validMessage="This username exists. Try another username!";
    } else if (this.userForm.value.password!==this.userForm.value.confirmPassword){
      this.validMessage = "Passwords must match!";
    } else if (this.userForm.valid) {
      this.validMessage = "New user has been registered. Thank you!";
      this.userService.createUserRegistration(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
          sessionStorage.setItem("sessionName", this.userForm.value.username);
          this.router.navigate(['/dashboard']);
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!"
    }
  }

}
