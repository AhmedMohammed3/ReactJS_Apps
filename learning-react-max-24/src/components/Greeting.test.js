import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
	test('renders "hello world" as a text', () => {
		// Arrange
		render(<Greeting />);

		// Act
		// .... nothing here

		// Assert
		const helloThereElement = screen.getByText('Hello There', { exact: false });
		expect(helloThereElement).toBeInTheDocument();
	});

	test("renders 'It's good to see you' text if the button was NOT clicked", () => {
		render(<Greeting />);

		const outputElement = screen.getByText("It's good to see you", {
			exact: false
		});
		expect(outputElement).toBeInTheDocument();
	});

	test('renders "changed" if the button was clicked', () => {
		//Arrange
		render(<Greeting />);

		//Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const outputElement = screen.getByText('Changed', {
			exact: false
		});
		expect(outputElement).toBeInTheDocument();
	});

	test("removes 'It's good to see you' text if the button was clicked", () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

        
        const outputElement = screen.queryByText("It's good to see you", {
			exact: false
		});
		expect(outputElement).toBeNull();
    });
});
