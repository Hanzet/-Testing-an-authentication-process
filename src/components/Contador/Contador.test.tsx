import { describe, it, expect } from 'vitest';
import { fireEvent, render , screen, act} from '@testing-library/react'
import { Contador } from './Contador';

// Aplicar metodología TDD

describe('<Contador />', () => {
    it('debería mostrar el valor inicial', () => {
        render(<Contador />);
        const contador = screen.getByText('Contador: 0');
        expect(contador).toBeInTheDocument();
    })

    it('debería incrementar el contador', async () => {
        render(<Contador />);
        const boton = screen.getByText('Incrementar:');
        await act(() => {
            fireEvent.click(boton);
        })
        const contador = screen.getByText('Contador: 1');
        expect(contador).toBeInTheDocument();
    })
})