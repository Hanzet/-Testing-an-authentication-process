import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { SessionProvider } from '../../context/AuthContext';
import { Login } from './Login';

describe('<Login />', () => {
    it('deberia renderizar el login', () => {
        render(
        <SessionProvider>
                <MemoryRouter>
                        <Login />
                </MemoryRouter>
            </SessionProvider>
        );
    })
})