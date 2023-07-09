import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { By } from "@angular/platform-browser";
import { HarnessLoader } from "@angular/cdk/testing";
import { TestbedHarnessEnvironment } from "@angular/cdk/testing/testbed";
import { ButtonTestHarness } from "../button-test-harness";
import { DivDisplayTestHarness } from "../div-display-test-harness";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide description-text when hidden-button is clicked with default (v1)', () => {
    // arrange
    const descriptionTextDebugElement = fixture.debugElement.query(By.css('[data-testid=description-text]')).nativeElement as HTMLDivElement;
    const hiddenButtonElement = fixture.debugElement.query(By.css('[data-testid=hidden-button]')).nativeElement as HTMLButtonElement;

    // act
    hiddenButtonElement.click();
    fixture.detectChanges();

    // assert
    expect(descriptionTextDebugElement.innerText).toBe('');
  });

  it('should hide description-text when hidden-button is clicked with test harness (v2)', async () => {
    // arrange
    const descriptionTextDebugElement = fixture.debugElement.query(By.css('[data-testid=description-text]')).nativeElement as HTMLDivElement;
    const hiddenButtonElement = await loader.getHarness(ButtonTestHarness.with({ selector: '[data-testid=hidden-button]' }));

    // act
    await hiddenButtonElement.click();

    // assert
    expect(descriptionTextDebugElement.innerText).toBe('');
  });

  it('should hide description-text when hidden-button is clicked with test harness and advance filter (v3)', async () => {
    // arrange
    const descriptionTextDebugElement = fixture.debugElement.query(By.css('[data-testid=description-text]')).nativeElement as HTMLDivElement;
    const hiddenButtonElement = await loader.getHarness(ButtonTestHarness.with({ testId: 'hidden-button' }));

    // act
    await hiddenButtonElement.click();

    // assert
    expect(descriptionTextDebugElement.innerText).toBe('');
  });

  it('should show description-text when hidden-button is clicked and description-text was initially hidden', async () => {
    // arrange
    component.hidden = true;
    const descriptionTextDebugElement = fixture.debugElement.query(By.css('[data-testid=description-text]')).nativeElement as HTMLDivElement;
    const hiddenButtonElement = await loader.getHarness(ButtonTestHarness.with({ testId: 'hidden-button' }));

    // act
    await hiddenButtonElement.click();

    // assert
    expect(descriptionTextDebugElement.innerText).not.toBe('');
  });

  it('should show description-text when hidden-button is clicked and description-text was initially hidden with test harness api', async () => {
    // arrange
    component.hidden = true;
    const descriptionTextDebugElement = await loader.getHarness(DivDisplayTestHarness.with({ testId: 'description-text' }));
    const hiddenButtonElement = await loader.getHarness(ButtonTestHarness.with({ testId: 'hidden-button' }));

    // act
    await hiddenButtonElement.click();

    // assert
    const text = await descriptionTextDebugElement.getText();
    expect(text).not.toBe('');
  });
});
