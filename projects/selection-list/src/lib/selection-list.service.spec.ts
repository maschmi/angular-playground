import { TestBed } from '@angular/core/testing';

import { SelectionListService } from './selection-list.service';

describe('SelectionListService', () => {
  let service: SelectionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
