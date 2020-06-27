import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionlistdemoComponent } from './selectionlistdemo.component';

describe('SelectionlistdemoComponent', () => {
  let component: SelectionlistdemoComponent;
  let fixture: ComponentFixture<SelectionlistdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionlistdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionlistdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
