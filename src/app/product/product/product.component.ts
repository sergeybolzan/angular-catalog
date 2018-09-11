import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { ProductsService } from '../../products.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  product: Product;
  faChevronLeft = faChevronLeft;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService
      .getProduct(id)
      .subscribe(product => (this.product = product));
  }

  goBack(): void {
    this.location.back();
  }
}
