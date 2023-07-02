import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private counterState = new BehaviorSubject(0);

  get counterValue() {
    return this.counterState.value;
  }

  get counterState$() {
    return this.counterState.asObservable();
  }

  constructor() { }

  setCounter(num: number) {
    this.counterState.next(num);
  }
}
