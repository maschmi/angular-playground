import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SelectionListDemoComponent} from './selectionlistdemo.component';


describe('SelectionlistdemoComponent', () => {
  let component: SelectionListDemoComponent;
  let fixture: ComponentFixture<SelectionListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
