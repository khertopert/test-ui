import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should counter value be set when setCounter is called', () => {
    service.setCounter(5);

    expect(service.counterValue).toBe(5);
  });

  it('should raise event when setCounter is called', () => {
    let value: number | undefined = undefined;
    service.counterState$.subscribe(val => {
      value = val;
    });

    service.setCounter(5);

    expect(value!).toBe(5);
  });
});
