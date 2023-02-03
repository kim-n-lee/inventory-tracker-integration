import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  validMessage: string = "";

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  get username() {
    return this.userForm.get('username');
  } 
 
  get email() {
    return this.userForm.get('email');
  } 
 
  get phoneNumber() {
    return this.userForm.get('phoneNumber');
  } 
 
  get password() {
    return this.userForm.get('password');
  } 
 
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  } 
  submitRegistration() {
    if (this.userForm.value.password!==this.userForm.value.confirmPassword){
      this.validMessage = "Passwords must match!";
    } 
    else if (this.userForm.valid) {
      this.validMessage = "New user has been registered. Thank you!";
      this.userService.createUserRegistration(this.userForm.value).subscribe(
        data => {
          this.userForm.reset();
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
