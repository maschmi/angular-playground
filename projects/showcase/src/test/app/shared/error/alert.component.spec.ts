import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlertComponent} from '../../../../app/shared/error/alert.component';
import {AlertService} from '../../../../app/shared/error/alert.service';
import {AppMaterialModule} from '../../../../app/app-material.module';


describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      declarations: [ AlertComponent ],
      providers: [{provide: AlertService, useClass: AlertService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
