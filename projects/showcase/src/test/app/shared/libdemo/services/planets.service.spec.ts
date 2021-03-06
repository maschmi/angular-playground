import { TestBed } from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {PlanetsService} from '../../../../../app/libdemo/services/planets.service';
import {AppModule} from '../../../../../app/app.module';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]});
    service = TestBed.inject(PlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
