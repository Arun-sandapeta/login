import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { RestaurantRegisterComponent } from './restaurant-register/restaurant-register.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    RestaurantRegisterComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
    
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
