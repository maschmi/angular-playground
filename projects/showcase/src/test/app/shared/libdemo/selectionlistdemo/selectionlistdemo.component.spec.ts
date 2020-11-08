import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute, Data} from '@angular/router';
import {SelectionListDemoComponent} from '../../../../../app/libdemo/selectionlistdemo/selectionlistdemo.component';
import {ActivatedRouteStub} from '../../../../helper/activated-route.stub';
import {MockSelectionListComponent} from '../../../../helper/mock-components/mock-selection-list.component';
import {SelectionListModule} from 'selection-list';

describe('SelectionlistdemoComponent', () => {
  let component: SelectionListDemoComponent;
  let fixture: ComponentFixture<SelectionListDemoComponent>;
  const mockActivatedRoute = new ActivatedRouteStub();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: ActivatedRoute, useValue: mockActivatedRoute
      }],
      declarations: [ SelectionListDemoComponent, MockSelectionListComponent],
      imports: [SelectionListModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
