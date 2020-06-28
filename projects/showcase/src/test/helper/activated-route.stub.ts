import {ActivatedRoute, convertToParamMap, ParamMap, Params} from '@angular/router';
import { ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub extends ActivatedRoute {

  constructor(initialParams?: Params) {
    super();
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  get paramMap() {
    return  this.subject.asObservable();
  }
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<ParamMap>();

  private dataSubject = new ReplaySubject<any>();

  readonly data = this.dataSubject.asObservable();

  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }

}
