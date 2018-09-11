import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../../product.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  @Input() slidesInRow: number;
  @Input() products: Product[];
  @Input() isOdd: boolean;
  @Input() category: string;
  public lodash = _;
  public numberOfSlides: number;
  public currentPage = 1;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor() {}

  ngOnInit() {
    this.numberOfSlides = Math.ceil(this.products.length / this.slidesInRow);
  }

  changePage(event) {
    this.currentPage = Math.ceil((event.item.index + 1) / this.slidesInRow);
  }

  calculateEmptyBlocks() {
    return this.slidesInRow - 1 - ((this.products.length - 1) % this.slidesInRow);
  }
}
