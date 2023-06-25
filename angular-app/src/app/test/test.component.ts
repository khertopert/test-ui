import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  hidden = false;
  @Input() myTemplate!: TemplateRef<any>;
}
