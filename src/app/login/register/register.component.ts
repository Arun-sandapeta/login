import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  // Corrected `styleUrl` to `styleUrls`
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator // Corrected `validator` to `validators`
    });
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { 'mismatch': true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);

      // Optional: Save the form data to local storage
      localStorage.setItem('registrationData', JSON.stringify(this.registrationForm.value));
    } else {
      console.log('Form is not valid');
    }
  }
}
