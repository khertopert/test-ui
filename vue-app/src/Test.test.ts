import { render, fireEvent } from '@testing-library/vue';
import Test from './Test.vue';

test('should render component', () => {
  const { getByTestId } = render(Test);

  const descriptionText = getByTestId('description-text') as HTMLDivElement;
  expect(descriptionText).not.toBeNull();
});

test('should hide description when button is clicked', async () => {
    const { queryByTestId, getByTestId } = render(Test);

    const button = getByTestId('hidden-button') as HTMLButtonElement;
    await fireEvent.click(button);

    const descriptionText = queryByTestId('description-text') as HTMLDivElement;
    expect(descriptionText).toBeNull();
});