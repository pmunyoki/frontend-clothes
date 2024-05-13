import { Injectable } from '@angular/core';
import { cloth } from 'src/app/shared/models/clothes';
import { Tag } from 'src/app/shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }
  getById(id:number): cloth{
    return  this.getAll().find( cloth => cloth.id ==id )
  }
  getByTag(): Tag[]{
    return[
      {
       name: "All",
       count: 5 
      },
      {
        name: "Casual",
        count: 1 
      },
      {
        name: "Dinner",
        count: 1
       },
      {
        name: "Official",
        count: 1
      },
      {
        name: "Cocktail",
        count: 1
      },
      {
        name: "Evening",
        count: 1
      }

    ]

  }
  getAll():cloth[]{
    return [
      {
        id:1,
        price: 1000,
        category: 'Casual',
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/dress1.jpg'
      },
      {
        id:2,
        price: 2000,
        category: 'Dinner',
        favorite: true,
        stars: 4,
        imageUrl: '/assets/images/dress2.jpg'
      },
      {
        id:3,
        price: 3000,
        category: 'Evening',
        favorite: false,
        stars: 3,
        imageUrl: '/assets/images/dress3.jpg'
      },
      {
        id:4,
        price: 4000,
        category: 'Cocktail',
        favorite: false,
        stars: 2,
        imageUrl: '/assets/images/dress4.jpg'
      },
      {
        id:5,
        price: 1000,
        category: 'Official',
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/dress5.jpg'
      },
    ]

  }
}
