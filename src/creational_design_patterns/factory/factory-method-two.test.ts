import {WordDocument,DocumentCreatorFactory,PdfDocument} from './factory-method-two';
import {test,expect,beforeEach} from 'vitest';

let creator: DocumentCreatorFactory;
beforeEach(() => {
    creator = new DocumentCreatorFactory();
});


test('it creates a WordDocument', () => {
    const doc = creator.createDocument("word");
    expect(doc).toBeInstanceOf(WordDocument);
})
test('it creates a PdfDocument', () => {
    const doc = creator.createDocument("pdf");
    expect(doc).toBeInstanceOf(PdfDocument);
})