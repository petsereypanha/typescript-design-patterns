import { TextStore, ProxyTextStore } from './proxy';
import { test, expect, describe, beforeEach, vi, afterEach, MockInstance} from "vitest"

describe('Proxy Pattern Tests', () => {
    let consoleLogSpy: MockInstance<[message?: any, ...optionalParams: any[]], void>;

    beforeEach(() => {
        consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    test('TextStore saves data correctly', () => {
        const store = new TextStore();
        store.save('test data');
        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringMatching(/Called 'save' from TextStore with\s+data=test data/)
        );
    });

    test('ProxyTextStore performs lazy initialization', () => {
        const proxyStore = new ProxyTextStore();
        proxyStore.save('proxy test');

        expect(consoleLogSpy).toHaveBeenNthCalledWith(
            1,
            expect.stringMatching(/Called 'save' from ProxyTextStore with\s+data=proxy test/)
        );
        expect(consoleLogSpy).toHaveBeenNthCalledWith(
            2,
            "Lazy init: textStore."
        );
        expect(consoleLogSpy).toHaveBeenNthCalledWith(
            3,
            expect.stringMatching(/Called 'save' from TextStore with\s+data=proxy test/)
        );
    });

    test('ProxyTextStore does not reinitialize on subsequent calls', () => {
        const proxyStore = new ProxyTextStore();
        proxyStore.save('first call');
        consoleLogSpy.mockClear();

        proxyStore.save('second call');

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        expect(consoleLogSpy).not.toHaveBeenCalledWith("Lazy init: textStore.");
    });

    test('ProxyTextStore with pre-initialized TextStore', () => {
        const textStore = new TextStore();
        const proxyStore = new ProxyTextStore(textStore);
        proxyStore.save('pre-init test');

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        expect(consoleLogSpy).not.toHaveBeenCalledWith("Lazy init: textStore.");
    });
});