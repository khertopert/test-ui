import { render, fireEvent } from '@testing-library/react';
import { Test } from "./Test";

it('should render component', () => {
    const { asFragment } = render(<Test></Test>);
    expect(asFragment()).toMatchSnapshot();
});

it('should render component (v2)', () => {
    const { getByTestId } = render(<Test></Test>);

    const descriptionText = getByTestId('description-text') as HTMLDivElement;
    expect(descriptionText).not.toBeNull();
});

it('should hide description when button is clicked', () => {
    const { asFragment, getByTestId } = render(<Test></Test>);

    const button = getByTestId('hidden-button') as HTMLButtonElement;
    fireEvent.click(button);

    expect(asFragment()).toMatchSnapshot();
});

it('should hide description when button is clicked (v2)', () => {
    const { queryByTestId, getByTestId } = render(<Test></Test>);

    const button = getByTestId('hidden-button') as HTMLButtonElement;
    fireEvent.click(button);

    const descriptionText = queryByTestId('description-text') as HTMLDivElement;
    expect(descriptionText).toBeNull();
});