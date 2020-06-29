import {Component, Inject, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {SelectionListConfig} from './config/selection-list.config';

export class DefaultConfig implements SelectionListConfig {
  title(v): string {
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
  styles: [
  ]
})
export class SelectionListComponent implements OnInit {

  @Input() listData: any[];
  private config: DefaultConfig;

  public calculateTitle(element: any) {
    return this.config.title(element);
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

}
