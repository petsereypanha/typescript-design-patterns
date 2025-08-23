interface Document {
    open(): void;
    close(): void;
}

export class WordDocument implements Document {
    open() {
        console.log("Opening Word document");
    }

    close(): void {
        console.log("Closing Word document");
    }
}

export class PdfDocument implements Document {
    open() {
        console.log("Opening PDF document");
    }

    close(): void {
        console.log("Closing PDF document");
    }
}
export  interface DocumentCreator {
    createDocument(type: string): Document;
}
export class DocumentCreatorFactory implements DocumentCreator {
    createDocument(type: string): Document {
        if (type === "word") {
            return new WordDocument();
        } else if (type === "pdf") {
            return new PdfDocument();
        } else {
            throw new Error("Unknown document type");
        }
    }
}
