import { ComponentHarness, HarnessPredicate } from "@angular/cdk/testing";
import { TestHarnessFilters } from "./test-harness-filters";

export class DivDisplayTestHarness extends ComponentHarness {
  static hostSelector = 'div';

  static with(options: TestHarnessFilters): HarnessPredicate<DivDisplayTestHarness> {
    return new HarnessPredicate(DivDisplayTestHarness, options)
      .addOption('testId', options.testId, async (harness, testId) =>
        HarnessPredicate.stringMatches((await harness.host()).getAttribute('data-testid'), testId)
      );
  }

  async getText() {
    const div = await this.host();
    return await div.text();
  }
}
