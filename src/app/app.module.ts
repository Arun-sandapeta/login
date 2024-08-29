import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

import {  HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';




@NgModule({
  declarations: [
    AppComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
