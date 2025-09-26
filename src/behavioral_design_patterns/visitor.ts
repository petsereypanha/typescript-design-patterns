export interface DocumentVisitor {
    visitPdfDocument(pdfDocument: PdfDocument): void
    visitWordDocument(wordDocument: WordDocument): void
    visitCompositeDocument(compositeDocument: CompositeDocument): void
}

export interface AcceptsVisitor {
    accept(visitor: DocumentVisitor): void
}
export class PdfDocument implements AcceptsVisitor {
    accept(visitor: DocumentVisitor): void {
        visitor.visitPdfDocument(this)
    }

    // PDF-specific methods...
}

export class WordDocument implements AcceptsVisitor {
    accept(visitor: DocumentVisitor): void {
        visitor.visitWordDocument(this)
    }

    // Word-specific methods...
}

export class DocumentProcessingVisitor implements DocumentVisitor {
    visitPdfDocument(pdfDocument: PdfDocument): void {
        console.log("Processing PDF document")
        // PDF-specific processing logic...
    }
    visitWordDocument(wordDocument: WordDocument): void {
        console.log("Processing Word document")
        // Word-specific processing logic...
    }
    visitCompositeDocument(compositeDocument: CompositeDocument): void {
        console.log("Processing Composite document")
        // Composite-specific processing logic...
    }
}
export class CompositeDocument implements AcceptsVisitor {
    private documents: AcceptsVisitor[] = []

    addDocument(document: AcceptsVisitor): void {
        this.documents.push(document)
    }

    accept(visitor: DocumentVisitor): void {
        for (let document of this.documents) {
            document.accept(visitor)
        }
        visitor.visitCompositeDocument(this)
    }
}