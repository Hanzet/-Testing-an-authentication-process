import {describe, it, expect} from 'vitest';

describe('miPrimerTest', () => {
    it('La suma de dos numeros', () => {
        const suma = (a: number,b: number) => a + b;
        const resultado = suma(1,3);
        expect(resultado).toBe(4); // test pass
    })

    it('dos textos iguales', () => {
        const text1 = "Hola mundo";
        const text2 = "Hola"; // test fail
        expect(text1).toBe(text2);
    })

    it ('La resta de dos numeros', () => {
        const rest = (a: number, b: number) => a - b;
        const resultado = rest(5,3);
        expect(resultado).toBe(2);
    })

    it ('La multiplicacion de dos numeros', () => {
        const mult = (a: number, b: number) => a * b;
        const resultado = mult(5,3);
        expect(resultado).toBe(15);
    })

    it ('La division de dos numeros', () => {
        const div = (a: number, b: number) => a / b;
        const resultado = div(5,3);
        expect(resultado).toBe(1.6666666666666667);
    })

    it ('Esto es un array', () => {
        const array = [1,2,3];
        expect(array).toEqual([1,2,3]);
    })

    it('Este array falla en la prueba', () => {
        const array = [1,2,3];
        expect(array).toEqual([1,2]);
    })

    it ('Esto es un objeto', () => {
        const obj = {a: 1, b: 2, c: 3};
        expect(obj).toEqual({a: 1, b: 2, c: 3});
    })
})
