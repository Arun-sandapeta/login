import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.loadFormData();
  }

  loadFormData(): void {
    const savedData = localStorage.getItem('loginData');
    if (savedData) {
      const loginData = JSON.parse(savedData);
      this.loginForm.patchValue(loginData);
      console.log('Retrieved Login Data:', loginData);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      
      // Retrieve registered user data from local storage
      const registeredData = localStorage.getItem('registrationData');
      
      if (registeredData) {
        const registeredUser = JSON.parse(registeredData);
        
        // Check if the entered email and password match the registered user data
        if (formData.email === registeredUser.email && formData.password === registeredUser.password) {
          // If valid, navigate to the home page
          this.router.navigate(['home']);
          console.log('Login Successful', formData);
        } else {
          console.log('Invalid email or password');
        }
      } else {
        console.log('No registered user found');
      }
    } else {
      console.log('Form is not valid');
    }
  }

  onRegister() {
    // Navigate to the register page
    this.router.navigate(['/login/register']);
  }
}
