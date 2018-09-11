import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../product.model';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.sass']
})
export class CarouselItemComponent implements OnInit {
  @Input() public product: Product;

  constructor() {}

  ngOnInit() {}
}
