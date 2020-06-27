import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errors = new BehaviorSubject<string[]>([]);

  get errorMessages(): Observable<string[]> {
    return this.errors.asObservable();
  }
  get hasErrors(): boolean {
    return this.errors.getValue().length > 0;
  }

  constructor() { }

  public clearErrors(): void {
    this.errors.next([]);
  }

  public setErrors(errorMessages: string[]): void {
    this.errors.next(errorMessages);
  }

  public addErrors(errorMessages: string[]): void {
    const current = this.errors.getValue();
    const newErrors = current.concat(errorMessages);
    this.errors.next(newErrors);
  }

  public addError(errorMessage: string): void {
    const current = this.errors.getValue();
    const newErrors = current.concat(errorMessage);
    this.errors.next(newErrors);
  }

  clearError(errorNumber: number) {
    const newError = [...this.errors.getValue()];
    newError.splice(errorNumber, 1);
    this.errors.next(newError);
  }
}
