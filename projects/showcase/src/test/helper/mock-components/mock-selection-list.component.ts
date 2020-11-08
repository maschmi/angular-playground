import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  template: '',
  // tslint:disable-next-line:component-selector
  selector: 'inw-selection-list'
})
export class MockSelectionListComponent {
  @Input() listData: any[];
  @Input() selectedElement: any;
  @Output() selectionChanged = new EventEmitter<any>();
}
