import { fireEvent, render } from '@testing-library/vue';
import App from './App.vue';
import {SpyInstance, vi} from 'vitest';

describe('should show alert with input value when any templateButton is called', () => {
    let spy: SpyInstance;
    let getById: any;
    let input: HTMLInputElement;

    beforeEach(() => {
        const { getByTestId,  } = render(App);
        getById = getByTestId;
        spy = vi.spyOn(window, 'alert');
        input = getById('input');
    });

    [1, 2, 3, 4, 5].forEach(counter => {
        it('for templateButton' + counter, async () => {
            spy.mockClear();

            const templateButton = getById('templateButton' + counter );

            await fireEvent.click(templateButton);

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(input.value);
        });
    });
});