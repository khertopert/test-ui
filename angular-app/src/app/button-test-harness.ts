import { ComponentHarness, HarnessPredicate } from "@angular/cdk/testing";
import { TestHarnessFilters } from "./test-harness-filters";

export class ButtonTestHarness extends ComponentHarness {
  static hostSelector = 'button';

  static with(options: TestHarnessFilters): HarnessPredicate<ButtonTestHarness> {
    return new HarnessPredicate(ButtonTestHarness, options)
      .addOption('testId', options.testId, async (harness, testId) =>
        HarnessPredicate.stringMatches((await harness.host()).getAttribute('data-testid'), testId)
      );
  }

  async click() {
    const button = await this.host();
    await button.click();
  }
}
