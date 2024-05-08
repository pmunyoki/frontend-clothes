import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';
import { cloth } from '../shared/models/clothes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  clothes:cloth[] = []; 
  constructor(private clothesService:ClothesService){}
  ngOnInit(): void{
    this.clothes = this.clothesService.getAll()

    }

}
