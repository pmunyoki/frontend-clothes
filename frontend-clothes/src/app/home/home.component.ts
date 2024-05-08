import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  clothes:String[] = []; 
  constructor(private clothesService:ClothesService){}
  ngOnInit(): void{
    this.clothes = this.clothesService.getAll()

    }

}
