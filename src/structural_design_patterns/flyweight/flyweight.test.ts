import { FlyweightFactory } from './flyweight';
import { test, expect, describe, beforeEach, vi } from "vitest"

describe('Flyweight Pattern', () => {
    let factory: FlyweightFactory;

    beforeEach(() => {
        factory = new FlyweightFactory();
    });

    test('reuses flyweight objects with the same shared state', () => {
        const flyweight1 = factory.getFlyweight({ brand: 'BMW', model: 'M5', color: 'red' });
        const flyweight2 = factory.getFlyweight({ brand: 'BMW', model: 'M5', color: 'red' });

        expect(flyweight1).toBe(flyweight2);
    });

    test('creates different flyweight objects for different shared states', () => {
        const flyweight1 = factory.getFlyweight({ brand: 'BMW', model: 'M5', color: 'red' });
        const flyweight2 = factory.getFlyweight({ brand: 'BMW', model: 'X1', color: 'blue' });

        expect(flyweight1).not.toBe(flyweight2);
    });

    test('handles extrinsic state', () => {
        const consoleSpy = vi.spyOn(console, 'log');
        const flyweight = factory.getFlyweight({ brand: 'BMW', model: 'M5', color: 'red' });

        flyweight.perform({ id: 'CL234IR_JamesDoe' });

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('CL234IR_JamesDoe')
        );
    });

    test('lists all created flyweights', () => {
        const consoleSpy = vi.spyOn(console, 'log');
        factory.getFlyweight({ brand: 'BMW', model: 'M5', color: 'red' });
        factory.getFlyweight({ brand: 'Chevrolet', model: 'Camaro2018', color: 'pink' });

        factory.listFlyweights();

        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('I have 2 flyweights'));
    });
});