import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TestComponent } from "../app/test/test.component";
import { StateService } from "../app/state.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [FormsModule, TestComponent, RouterLink],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstPageComponent {
  value = '';

  constructor(private stateService: StateService) { }

  testTemplateCilck() {
    alert(this.value);
  }

  addCounter() {
    this.stateService.setCounter(this.stateService.counterValue + 1);
  }
}
