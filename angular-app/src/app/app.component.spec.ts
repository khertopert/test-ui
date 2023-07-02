import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HarnessLoader } from "@angular/cdk/testing";
import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";
import { ButtonTestHarness } from "./button-test-harness";
import { StateService } from "./state.service";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;
  let stateService: StateService = jasmine.createSpyObj(['setCounter']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: StateService, useValue: stateService }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('should show alert with input value when any templateButton is called', () => {
    let spy!: jasmine.Spy;

    beforeEach(() => {
      component.value = '123';
      spy = spyOn(window, 'alert');
    });

    [1, 2, 3, 4, 5].forEach(counter => {
      it('for templateButton' + counter, async () => {
        spy.calls.reset();

        const templateButton = await loader.getHarness(ButtonTestHarness.with({ testId: 'templateButton' + counter }));

        await templateButton.click();

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(component.value);
      });
    });
  });

  it('should call setCounter and increase counter when test button is clicked', async () => {
    Object.defineProperty(stateService, 'counterValue', { value: 3 });
    const testButton = await loader.getHarness(ButtonTestHarness.with({ testId: 'testButton' }));

    await testButton.click();

    expect(stateService.setCounter).toHaveBeenCalledTimes(1);
    expect(stateService.setCounter).toHaveBeenCalledWith(4);
  });
});
