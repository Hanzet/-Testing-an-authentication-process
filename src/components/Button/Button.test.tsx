import {describe, it, expect, vi} from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Button } from './Button';

describe('<Button />', () => {
    it('Debería renderizar el boton', () => {
        render(<Button label="click" />);
        const button = screen.getByText('click');
        expect(button).toBeInTheDocument();
    })

    it('deberia llamar al a funcion onClick', async () => {
        const handleClick = vi.fn();
        render(<Button label="Click" onClick={handleClick} />)
        const button = screen.getByText('Click');
        await act(() => {
            fireEvent.click(button);
            // fireEvent.click(button); // Acá falla porque se esta pasando 1 vez y no 2 veces
        })
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})