import {ErrorHandler, Injectable} from '@angular/core';
import {AlertService} from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerAlertService implements ErrorHandler {

  constructor(private alertService: AlertService) {
  }

  handleError(error: any): void {
    let errorMessage = error as string;
    if (!errorMessage) {
      errorMessage = error.message;
    }
    this.alertService.addError(errorMessage);
  }

}
