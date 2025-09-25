import { PDFProcessor, WordProcessor } from './template-method';
import { test, expect, afterEach, describe, beforeEach, vi, MockInstance} from "vitest"

describe('Document Processing', () => {
    let consoleSpy: MockInstance<[message?: any, ...optionalParams: any[]], void>;

    beforeEach(() => {
        consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => void(0));
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('PDFProcessor executes all steps in correct order', () => {
        const pdfProcessor = new PDFProcessor();
        pdfProcessor.processDocument();

        expect(consoleSpy.mock.calls).toEqual([
            ['Opening document'],
            ['Extracting content from PDF'],
            ['Analyzing PDF content'],
            ['Saving processed document']
        ]);
    });

    test('WordProcessor executes all steps in correct order', () => {
        const wordProcessor = new WordProcessor();
        wordProcessor.processDocument();

        expect(consoleSpy.mock.calls).toEqual([
            ['Opening document'],
            ['Extracting content from Word document'],
            ['Analyzing Word document content'],
            ['Saving processed document']
        ]);
    });

    test('PDFProcessor and WordProcessor have different extract and analyze steps', () => {
        const pdfProcessor = new PDFProcessor();
        const wordProcessor = new WordProcessor();

        pdfProcessor.processDocument();
        wordProcessor.processDocument();

        const pdfCalls = consoleSpy.mock.calls.slice(0, 4);
        const wordCalls = consoleSpy.mock.calls.slice(4);

        expect(pdfCalls[1]).not.toEqual(wordCalls[1]);
        expect(pdfCalls[2]).not.toEqual(wordCalls[2]);
    });

    test('Common steps are the same for both processors', () => {
        const pdfProcessor = new PDFProcessor();
        const wordProcessor = new WordProcessor();

        pdfProcessor.processDocument();
        wordProcessor.processDocument();

        const pdfCalls = consoleSpy.mock.calls.slice(0, 4);
        const wordCalls = consoleSpy.mock.calls.slice(4);

        expect(pdfCalls[0]).toEqual(wordCalls[0]);
        expect(pdfCalls[3]).toEqual(wordCalls[3]);
    });
});