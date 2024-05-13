import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';
import { cloth } from '../shared/models/clothes';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../shared/models/tags';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  clothes:cloth[] = []; 
  constructor(private clothesService:ClothesService, private route:ActivatedRoute){}
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      if(params.searchTerm)
        this.clothes = this.clothesService.getAll().filter(cloth => cloth.category.toLowerCase().includes(params.searchTerm.toLowerCase()))
      else if(params.tag)
        this.clothes = this.clothesService.getAll().filter(cloth => cloth.category.toLowerCase().includes(params.tag.toLowerCase()))
      else
        this.clothes = this.clothesService.getAll()
    })
    }
}
