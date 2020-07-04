import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Optional, Output, SkipSelf} from '@angular/core';
import {SelectionListConfig} from './config/selection-list.config';

export class DefaultConfig implements SelectionListConfig {
  hoverColor = 'grey';
  selectionColor = 'blue';

  selectedPredicate = (element: any, currentSelection: any) => {
    if (element.id && currentSelection.id) {
      return element.id === currentSelection.id;
    }
    return false;
  }

  innerHtml(v): string {
    if (v.name) {
      return v.name;
    }

    if (v.id) {
      return v.id;
    }
    return 'Please define id or name as property';
  }
}

@Component({
  selector: 'inw-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionListComponent implements OnInit {

  @Input() listData: any[];
  @Input() selectedElement: any;
  @Output() selectionChanged = new EventEmitter<any>();

  private config: DefaultConfig;

  public getInnerHtml(element: any) {
    return this.config.innerHtml(element);
  }

  constructor(@Inject('SelectionListConfig') @SkipSelf() @Optional() private selectionListConfig: SelectionListConfig) {
    if (!selectionListConfig) {
      this.config = new DefaultConfig();
    } else {
      this.config = selectionListConfig;
    }
  }

  ngOnInit(): void {
  }

  onSelect(element: any) {
    this.selectionChanged.emit(element);
  }

  isSelected(element: any): boolean {
    return this.config.selectedPredicate(element, this.selectedElement);
  }
}
