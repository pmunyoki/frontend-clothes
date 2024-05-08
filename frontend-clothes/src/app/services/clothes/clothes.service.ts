import { Injectable } from '@angular/core';
import { cloth } from 'src/app/shared/models/clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }
  getAll():cloth[]{
    return [
      {
        id:1,
        price: 1000,
        category: 'casual',
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/dress1.jpg'
      },
      {
        id:2,
        price: 2000,
        category: 'dinner',
        favorite: true,
        stars: 4,
        imageUrl: '/assets/images/dress2.jpg'
      },
      {
        id:3,
        price: 3000,
        category: 'evening',
        favorite: false,
        stars: 3,
        imageUrl: '/assets/images/dress3.jpg'
      },
      {
        id:4,
        price: 4000,
        category: 'cocktail',
        favorite: false,
        stars: 2,
        imageUrl: '/assets/images/dress4.jpg'
      },
      {
        id:5,
        price: 1000,
        category: 'official',
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/dress5.jpg'
      },
    ]

  }
}
