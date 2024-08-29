import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to the cartItems observable to get real-time updates
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseQuantity(item: CartItem) {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    this.cartService.addToCart(updatedItem); // Update the cart using the service
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      this.cartService.addToCart(updatedItem); // Update the cart using the service
    }
  }

  removeItem(item: CartItem) {
    const updatedCartItems = this.cartItems.filter(i => i.id !== item.id);
    this.cartService.clearCart(); // Clear the cart
    updatedCartItems.forEach(item => this.cartService.addToCart(item)); // Re-add remaining items
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
