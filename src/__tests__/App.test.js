import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';


describe(`WHEN rendering the application`, () => {

    afterEach(cleanup);

    test(`THEN the page should include the button text`, () => {
        const { getByText } = render(<App/>);
        expect(getByText(`Show me the next fibonacci number`)).toBeTruthy();
    });

    test(`THEN the first fibonacci number should be 0`, () => {
        const { getByTestId } = render(<App/>);
        const fibonacciNumberDiv = getByTestId(`fibonacci-number-view`);
        expect(fibonacciNumberDiv).toHaveTextContent(`0`);
    });

    describe(`WHEN clicking the button`, () => {
        test(`THEN the fibonacci number should increase according to the fiboanacci sequence logic`, () => {
            const { getByTestId } = render(<App />);
            const fibonacciNumberDiv = getByTestId(`fibonacci-number-view`);

            fireEvent.click(getByTestId(`fibonacci-button`));
            expect(fibonacciNumberDiv).toHaveTextContent(`1`);

            fireEvent.click(getByTestId(`fibonacci-button`));
            expect(fibonacciNumberDiv).toHaveTextContent(`1`);

            fireEvent.click(getByTestId(`fibonacci-button`));
            expect(fibonacciNumberDiv).toHaveTextContent(`2`);
        });
    });
});

