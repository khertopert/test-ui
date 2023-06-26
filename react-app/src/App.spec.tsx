import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe('should show alert with input value when any templateButton is called', () => {
    let spy: jest.SpyInstance;
    let getById: any;
    let input: HTMLInputElement;

    beforeEach(() => {
        const { getByTestId,  } = render(<App></App>);
        getById = getByTestId;
        spy = jest.spyOn(window, 'alert').mockReturnValue();
        input = getById('input');
    });

    [1, 2, 3, 4, 5].forEach(counter => {
        it('for templateButton' + counter, () => {
            spy.mockClear();

            const templateButton = getById('templateButton' + counter );

            fireEvent.click(templateButton);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(input.value);
        });
    });
});