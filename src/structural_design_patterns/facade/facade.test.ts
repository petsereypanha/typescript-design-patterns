import { Facade, SubsystemA, SubsystemB} from './facade';
import {test, expect, describe, beforeEach, vi} from "vitest"

describe('Facade', () => {
    let mockSubsystemA: SubsystemA;
    let mockSubsystemB: SubsystemB
    let facade: Facade;

    beforeEach(() => {
        mockSubsystemA = {
            operationA1: vi.fn(),
            operationA2: vi.fn(),
        };
        mockSubsystemB = {
            operationB1: vi.fn(),
            operationB2: vi.fn(),
        };

        // Create a new Facade instance with mock subsystems
        facade = new Facade(mockSubsystemA, mockSubsystemB);
    });

    test('simplifiedOperation1 calls correct methods in correct order', () => {
        facade.simplifiedOperation1();

        expect(mockSubsystemA.operationA1).toHaveBeenCalledTimes(1);
        expect(mockSubsystemB.operationB1).toHaveBeenCalledTimes(1);
    });

    test('simplifiedOperation2 calls correct methods in correct order', () => {
        facade.simplifiedOperation2();

        expect(mockSubsystemA.operationA2).toHaveBeenCalledTimes(1);
        expect(mockSubsystemB.operationB2).toHaveBeenCalledTimes(1);
        expect(mockSubsystemA.operationA1).toHaveBeenCalledTimes(1);
    });

    test('Facade does not call unnecessary methods', () => {
        facade.simplifiedOperation1();

        expect(mockSubsystemA.operationA2).not.toHaveBeenCalled();
        expect(mockSubsystemB.operationB2).not.toHaveBeenCalled();
    });
});