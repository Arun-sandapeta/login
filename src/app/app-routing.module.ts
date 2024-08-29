import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { CartComponent } from './home/cart/cart.component';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {path: 'home', loadChildren: () => import('./home/home.module').then(m=> m.HomeModule) },
  // {

  //   path:'', redirectTo: '/category' , pathMatch: 'full'
  // },
  
  {path: 'cart', component: CartComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
