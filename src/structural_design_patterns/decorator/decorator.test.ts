import { SimpleFileReader, CompressionDecorator, EncryptionDecorator } from './decorator';
import { test, expect, describe, beforeEach, afterEach, vi } from "vitest"

describe('FileReader Decorators', () => {
    let consoleSpy: any;

    beforeEach(() => {
        consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('SimpleFileReader reads file content', () => {
        const reader = new SimpleFileReader();
        const content = reader.read('example.txt');
        expect(content).toBe('Content of example.txt');
        expect(consoleSpy).toHaveBeenCalledWith('Reading file from: example.txt');
    });

    test('Encrypted and Compressed FileReader applies both decorations', () => {
        let reader = new SimpleFileReader();
        reader = new EncryptionDecorator(reader);
        reader = new CompressionDecorator(reader);
        const content = reader.read('example.txt');
        expect(content).toBe('Compressed(Encrypted(Content of example.txt))');
        expect(consoleSpy).toHaveBeenCalledWith('Reading file from: example.txt');
        expect(consoleSpy).toHaveBeenCalledWith('Encrypting content');
        expect(consoleSpy).toHaveBeenCalledWith('Compressing content');
    });
});