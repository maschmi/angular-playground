import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {SelectionListDemoComponent} from '../../../../../app/libdemo/selectionlistdemo/selectionlistdemo.component';
import {ActivatedRouteStub} from '../../../../helper/activated-route.stub';
import {MockSelectionListComponent} from '../../../../helper/mock-components/mock-selection-list.component';
import {PlanetDetailsComponent} from '../../../../../app/libdemo/selectionlistdemo/planet-details.component';
import {AppMaterialModule} from '../../../../../app/app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ConvertYesNoPipe} from '../../../../../app/libdemo/shared/convert-yes-no.pipe';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('SelectionlistdemoComponent', () => {
  let component: SelectionListDemoComponent;
  let fixture: ComponentFixture<SelectionListDemoComponent>;
  const mockActivatedRoute = new ActivatedRouteStub();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ConvertYesNoPipe, useClass: ConvertYesNoPipe}],
      declarations: [ SelectionListDemoComponent,
        MockSelectionListComponent,
        PlanetDetailsComponent ],
      imports: [AppMaterialModule, ReactiveFormsModule, NoopAnimationsModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SelectionListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeDefined();
  });
});
