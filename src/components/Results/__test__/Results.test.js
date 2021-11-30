/*
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Results from '../Results';

const MockResults = () => {
    return (
        <BrowserRouter>
            <Results />
        </BrowserRouter>
    );
}

describe('Results', () => {
    it('should render same text as the searchbar one', async () => {
        render(<MockResults />);
        const inputElement = screen.getByPlaceholderText(/Input your search/i);
        const buttonElement = screen.getByRole("button", { name: /Search/i });
        fireEvent.change(inputElement, { target: { value: "Madoka Magica" } });
        fireEvent.click(buttonElement);

        const spanElement = screen.getByText(/Madoka Magica/i);

        expect(spanElement).toBeInTheDocument();
    });
});
*/