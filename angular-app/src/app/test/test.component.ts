import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgIf],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  hidden = false;
}
