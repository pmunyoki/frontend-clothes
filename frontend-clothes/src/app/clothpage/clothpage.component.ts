import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';
import { cloth } from '../shared/models/clothes';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-clothpage',
  templateUrl: './clothpage.component.html',
  styleUrls: ['./clothpage.component.css']
})
export class ClothpageComponent implements OnInit{

  clothes!: cloth;
  cart_count!:number;
  constructor(private route:ActivatedRoute, private clothesService: ClothesService, private cartService: CartService){}
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      if (params.id)
        this.clothes = this.clothesService.getById(params.id)
    })


}
  cart(): void{
    this.cartService.addToCart()
    console.log(this.cartService.getNumber())
  }
}
