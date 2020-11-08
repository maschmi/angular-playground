import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailsComponent } from '../../../../../app/libdemo/selectionlistdemo/planet-details.component';
import {AppMaterialModule} from '../../../../../app/app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ConvertYesNoPipe} from '../../../../../app/libdemo/shared/convert-yes-no.pipe';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('PlanetDetailsComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetDetailsComponent ],
      imports: [AppMaterialModule, ReactiveFormsModule, NoopAnimationsModule],
      providers: [ {provide: ConvertYesNoPipe, useClass: ConvertYesNoPipe}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
