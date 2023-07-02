import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestComponent } from "./test/test.component";
import { StateService } from "./state.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  value = '';

  constructor(private stateService: StateService) { }

  testTemplateCilck() {
    alert(this.value);
  }

  addCounter() {
    this.stateService.setCounter(this.stateService.counterValue + 1);
  }
}
