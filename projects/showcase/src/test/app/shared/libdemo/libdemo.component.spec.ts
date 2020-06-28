import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {LibdemoComponent} from '../../../../app/libdemo/libdemo.component';


describe('LibdemoComponent', () => {
  let component: LibdemoComponent;
  let fixture: ComponentFixture<LibdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
