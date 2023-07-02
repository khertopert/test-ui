import { StateService } from './../state.service';
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

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

  get counter$() {
    return this.StateService.counterState$;
  }

  constructor(private StateService: StateService) {}
}
