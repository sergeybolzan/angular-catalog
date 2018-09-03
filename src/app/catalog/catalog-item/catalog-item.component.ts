import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input()
  public product: Product;

  constructor() {}

  ngOnInit() {
  }


}
