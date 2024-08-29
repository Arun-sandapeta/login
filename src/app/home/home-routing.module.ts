import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartComponent } from './cart/cart.component';
import { RatingComponent } from './rating/rating.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {

    path: 'home', component: HomeComponent,
    children:[
      {

        path:"", component:CategoryComponent, pathMatch: "full"
      },
      {
        path: 'restaurant' , component: RestaurantComponent
      },
      {
        path: 'cart' , component: CartComponent
      },
      {
        path: 'rating', component: RatingComponent
      },
      

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
