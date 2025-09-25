import { test, expect, describe, vi } from "vitest"
import { Context, ConcreteStateA, ConcreteStateB } from './state';

describe('State Pattern', () => {
    test('should start with initial state', () => {
        const context = new Context(new ConcreteStateA());
        expect(context.getState()).toBeInstanceOf(ConcreteStateA);
    });

    test('should change state correctly', () => {
        const context = new Context(new ConcreteStateA());
        context.changeState(new ConcreteStateB());
        expect(context.getState()).toBeInstanceOf(ConcreteStateB);
    });

    test('should handle requests based on current state', () => {
        const context = new Context(new ConcreteStateA());
        const spy = vi.spyOn(console, 'log');

        context.request();
        expect(spy).toHaveBeenCalledWith('Handling request in ConcreteStateA');

        context.changeState(new ConcreteStateB());
        context.request();
        expect(spy).toHaveBeenCalledWith('Handling request in ConcreteStateB');

        spy.mockRestore();
    });

    test('should allow multiple state transitions', () => {
        const context = new Context(new ConcreteStateA());
        context.changeState(new ConcreteStateB());
        context.changeState(new ConcreteStateA());
        expect(context.getState()).toBeInstanceOf(ConcreteStateA);
    });
});