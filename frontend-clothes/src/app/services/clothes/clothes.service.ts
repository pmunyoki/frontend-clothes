import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor() { }
  getAll():String[]{
    return [
      '/assets/images/dress1.jpg',
      '/assets/images/dress2.jpg',
      '/assets/images/dress3.jpg',
      '/assets/images/dress4.jpg',
      '/assets/images/dress5.jpg',
    ]

  }
}
