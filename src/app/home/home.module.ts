import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RatingComponent } from './rating/rating.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RatingComponent,
    RestaurantComponent,
    CartComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    AppRoutingModule
    
  ]
})
export class HomeModule { }
