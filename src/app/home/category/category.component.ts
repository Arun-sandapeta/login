import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';


interface Product {
  price : number;
  id: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

constructor(private cartService : CartService){}

products: Product[] = [
  {
    id: 1,
    name: 'Pizza',
    price : 500,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4-rf1S608jL7EbbR11VrAWFUyTW0PQOgFQ&s',
    
  },
  {
    id: 2,
    name: 'Chicken Pizza',
    price:450,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZg4xm1l2Fu_rUHKBcQGQzD3_XhEU670PyQ&s'
  },
  {
    id: 3,
    name: 'Burger',
    price:350,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl73vPS1OeKzDtyJCldosqMnF2Mp3FdV1XwQ&s'
  },
  {
    id: 4,
    name: 'chicken Burger',
    price:600,
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg'
  },
  {
    id: 5,
    name: 'chicken popcorn',
    price: 350,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KWEBLjNamvegnYTsKBw4l9zUVxRT9yIBCQ&s'
  },
  {
    id: 6,
    name: 'cold coffee',
    price:320,
    imageUrl: 'https://www.milkmaid.in/sites/default/files/2024-05/Cold-Coffee-335x300.jpg'},
  {
    id: 7,
    name: 'chicken wings',
    price:99,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFPB3KX2z4IeuqqK80zdknHSll5u78QnoKg&s'
  },
  {
    id: 8,
    name: 'french fries',
    price:800,
    imageUrl: 'https://images.themodernproper.com/billowy-turkey/production/posts/2022/Homemade-French-Fries_8.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1662474181&s=3b2f5e70873746d98cd312c67bc50bfe'
  },
];

addToCart(item: Product) {
  this.cartService.addToCart({ id: item.id, name: item.name, quantity: 1, price: item.price  });
}

cartItems(){
  this.cartService.getCartItems()
}

}
