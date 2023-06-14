import { BaseHarnessFilters } from "@angular/cdk/testing";

export interface TestHarnessFilters extends BaseHarnessFilters {
  testId?: string;
}
