import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(): Product[] {
    return [
      {
        id: 0,
        name: 'T-Shirt',
        imgPath: 'assets/images/0.png',
        category: 'men',
        price: 5,
        sizes: ['s', 'm', 'l'],
        colors: ['#165eb9', '#ffe637', '#535253']
      },
      {
        id: 1,
        name: 'Pants Forclaz',
        imgPath: 'assets/images/1.png',
        category: 'men',
        price: 30,
        sizes: ['30', '32'],
        colors: []
      },
      {
        id: 2,
        name: 'Backpack',
        imgPath: 'assets/images/2.png',
        category: 'men',
        price: 60,
        sizes: ['10Litri'],
        colors: []
      },
      {
        id: 3,
        name: 'Giacket',
        imgPath: 'assets/images/3.png',
        category: 'women',
        price: 60,
        sizes: ['m', 'l'],
        colors: []
      },
      {
        id: 4,
        name: 'Trekking shoes',
        imgPath: 'assets/images/4.png',
        category: 'women',
        price: 80,
        sizes: ['38', '39', '40'],
        colors: []
      },
      {
        id: 5,
        name: 'T-Shirt',
        imgPath: 'assets/images/5.png',
        category: 'women',
        price: 20,
        sizes: ['s', 'm'],
        colors: ['#d3a7ac', '#ffffff']
      }
    ]
  }
}
