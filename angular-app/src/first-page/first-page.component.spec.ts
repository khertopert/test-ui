import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageComponent } from './first-page.component';
import { HarnessLoader } from "@angular/cdk/testing";
import { StateService } from "../app/state.service";
import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";
import { ButtonTestHarness } from "../app/button-test-harness";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;
  let loader: HarnessLoader;
  let stateService: StateService = jasmine.createSpyObj(['setCounter']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirstPageComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: StateService, useValue: stateService }
      ]
    });
    fixture = TestBed.createComponent(FirstPageComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
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
