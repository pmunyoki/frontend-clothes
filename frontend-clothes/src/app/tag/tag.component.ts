import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tags';
import { ClothesService } from '../services/clothes/clothes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  
  tags: Tag[] = [];
  constructor(private clothesService:ClothesService ){
  }

  ngOnInit(): void{
    this.tags = this.clothesService.getByTag()

}
}
