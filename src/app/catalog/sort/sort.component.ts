import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass']
})
export class SortComponent {
  @Input() sortingOptions: string[];
  @Input() currentSortingOption: string;
  @Output() currentSortingOptionChange = new EventEmitter<string>();

  constructor() {}

  onOptionChange(selectOption) {
    this.currentSortingOptionChange.emit(selectOption);
  }
}
