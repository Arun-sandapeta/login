import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  price: number;
  id: number;
  name: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(item: CartItem) {
    const existingItemIndex = this.cartItems.findIndex(i => i.id === item.id);

    if (existingItemIndex > -1) {
      // Update the quantity of the existing item
      const updatedCartItems = [...this.cartItems];
      updatedCartItems[existingItemIndex] = { ...updatedCartItems[existingItemIndex], quantity: item.quantity };
      this.cartItems = updatedCartItems;
    } else {
      // Add new item to cart
      this.cartItems = [...this.cartItems, item];
    }

    this.cartItemsSubject.next(this.cartItems); // Emit the updated cart items
  }

  getCartItems() {
    return this.cartItems$; // Return the observable for consistent access
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}
