import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { ProductsService } from '../../products.service';
import { Product } from '../../product.model';
import { Category } from '../../category.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  public products: Product[];
  public categories: Category[];
  public sortingOptions: string[];
  public currentSortingOption: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
      this.categories = this.getCategories();
    });
    this.sortingOptions = this.productsService.getSortingOptions();
    this.currentSortingOption = this.sortingOptions[0];
  }

  getCategories() {
    return _.chain(this.products)
      .map('category')
      .uniq()
      .value()
      .map(category => ({ name: category, isShow: true }));
  }

  filterProducts(category) {
    return this.products
      .filter(product => product.category === category)
      .sort(this.dynamicSort(this.currentSortingOption));
  }

  dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
}
