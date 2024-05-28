import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart_number:number=0;
  constructor(){ }
  getNumber():number{
    return this.cart_number
  }

  addToCart():number {
    return this.cart_number = this.cart_number + 1
  }
}
