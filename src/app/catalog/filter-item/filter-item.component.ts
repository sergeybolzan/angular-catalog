import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../category.model';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.sass']
})
export class FilterItemComponent implements OnInit {
  @Input() category: Category;

  constructor() {}

  ngOnInit() {}

  toggleCheckbox() {
    this.category.isShow = !this.category.isShow;
  }
}
