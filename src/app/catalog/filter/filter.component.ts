import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../category.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  @Input() categories: Category[];

  constructor() {}

  ngOnInit() {}

  showAllCategories() {
    this.categories.forEach(item => (item.isShow = true));
  }
}
