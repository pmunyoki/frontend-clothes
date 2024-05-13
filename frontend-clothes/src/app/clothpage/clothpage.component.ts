import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../services/clothes/clothes.service';
import { cloth } from '../shared/models/clothes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clothpage',
  templateUrl: './clothpage.component.html',
  styleUrls: ['./clothpage.component.css']
})
export class ClothpageComponent implements OnInit{

  clothes!: cloth;
  constructor(private route:ActivatedRoute, private clothesService: ClothesService){}
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      if (params.id)
        this.clothes = this.clothesService.getById(params.id)
    })


}
}
