import { PdfDocument, WordDocument, CompositeDocument, DocumentProcessingVisitor } from "./visitor"
import { test, expect, afterEach, describe, beforeEach, vi } from "vitest"

describe("Visitor Pattern Tests", () => {
    let visitor: DocumentProcessingVisitor
    let composite: CompositeDocument
    let pdf: PdfDocument
    let word: WordDocument

    beforeEach(() => {
        visitor = new DocumentProcessingVisitor()
        composite = new CompositeDocument()
        pdf = new PdfDocument()
        word = new WordDocument()

        // Spy on console.log to check output
        vi.spyOn(console, "log").mockImplementation(() => {})
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    test("Composite forwards visitor to each child", () => {
        composite.addDocument(pdf)
        composite.addDocument(word)

        composite.accept(visitor)

        expect(console.log).toHaveBeenCalledTimes(3)
        expect(console.log).toHaveBeenCalledWith("Processing PDF document")
        expect(console.log).toHaveBeenCalledWith("Processing Word document")
        expect(console.log).toHaveBeenCalledWith("Processing Composite document")
    })

    test("PdfDocument calls correct visitor method", () => {
        const spyVisitPdf = vi.spyOn(visitor, "visitPdfDocument")

        pdf.accept(visitor)

        expect(spyVisitPdf).toHaveBeenCalledTimes(1)
        expect(spyVisitPdf).toHaveBeenCalledWith(pdf)
    })

    test("WordDocument calls correct visitor method", () => {
        const spyVisitWord = vi.spyOn(visitor, "visitWordDocument")

        word.accept(visitor)

        expect(spyVisitWord).toHaveBeenCalledTimes(1)
        expect(spyVisitWord).toHaveBeenCalledWith(word)
    })

    test("Visitor methods perform correct operations", () => {
        visitor.visitPdfDocument(pdf)
        expect(console.log).toHaveBeenCalledWith("Processing PDF document")

        visitor.visitWordDocument(word)
        expect(console.log).toHaveBeenCalledWith("Processing Word document")

        visitor.visitCompositeDocument(composite)
        expect(console.log).toHaveBeenCalledWith("Processing Composite document")
    })
})