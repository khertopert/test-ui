import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, shareReplay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  withPromise() {
    return firstValueFrom(this.httpClient.get<string[]>('http://localhost:5111/Timer'));
  }

  withObservable() {
    return this.httpClient.get<string[]>('http://localhost:5111/Timer').pipe(shareReplay());
  }
}
