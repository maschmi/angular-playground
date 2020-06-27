import { Component} from '@angular/core';
import {ErrorService} from './error.service';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent  {
  hasError: Observable<boolean>;

  get errorMessages(): Observable<string[]> {
    return this.errorService.errorMessages
      .pipe(
        tap((err) => this.hasError = of(err.length > 0))
      );
  }

  constructor(private errorService: ErrorService) { }

  dismiss(errorNumber: number) {
    this.errorService.clearError(errorNumber);
  }
}
