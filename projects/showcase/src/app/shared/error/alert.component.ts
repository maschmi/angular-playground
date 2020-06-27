import {Component, OnInit} from '@angular/core';
import {AlertService} from './alert.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  errors: Observable<string[]>;

  constructor(private errorService: AlertService) { }

  dismiss(errorNumber: number) {
    this.errorService.clearError(errorNumber);
  }

  ngOnInit(): void {
    this.errors = this.errorService.errorMessages;
  }
}
