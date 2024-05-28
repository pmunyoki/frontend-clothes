import { Component, DoCheck } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  number!: number;
  constructor(private cartService:CartService){}
  ngOnInit(): void{
    this.number = this.cartService.getNumber()
    
  }
  ngDoCheck():void
  {
    this.number = this.cartService.getNumber()
  }
  
}
