import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service'; // Adjust the path as necessary

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  forgetPasswordForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Initialize the form with a single 'email' control
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      const email = this.forgetPasswordForm.value.email;
      this.authService.resetPassword(email).subscribe(
        response => {
          this.message = 'Password reset instructions sent to your email.';
        },
        error => {
          this.message = 'An error occurred. Please try again.';
        }
      );
    }
  }
}
