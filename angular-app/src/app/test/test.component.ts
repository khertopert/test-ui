import { StateService } from './../state.service';
import { Component, Input, TemplateRef } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { TestService } from "../../test.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, AsyncPipe],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  hidden = false;
  @Input() myTemplate!: TemplateRef<any>;

  withPromise$?: Promise<string[]>;
  withObservable$?: Observable<string[]>;

  get counter$() {
    return this.StateService.counterState$;
  }

  constructor(private StateService: StateService, private testService: TestService) {
    // this.withPromise$ = this.testService.withPromise();
    this.withObservable$ = this.testService.withObservable();
  }
}
