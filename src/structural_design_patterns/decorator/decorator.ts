export interface FileReader {
    read(filePath: string): string
}

export class SimpleFileReader implements FileReader {
    read(filePath: string): string {
        console.log(`Reading file from: ${filePath}`)
        return `Content of ${filePath}`
    }
}

export abstract class FileReaderDecorator implements FileReader {
    constructor(protected reader: FileReader) {}

    read(filePath: string): string {
        return this.reader.read(filePath)
    }
}

export class EncryptionDecorator extends FileReaderDecorator {
    read(filePath: string): string {
        const content = super.read(filePath)
        return this.encrypt(content)
    }

    private encrypt(content: string): string {
        console.log("Encrypting content")
        return `Encrypted(${content})`
    }
}

export class CompressionDecorator extends FileReaderDecorator {
    read(filePath: string): string {
        const content = super.read(filePath)
        return this.compress(content)
    }

    private compress(content: string): string {
        console.log("Compressing content")
        return `Compressed(${content})`
    }
}
let reader: FileReader = new SimpleFileReader();
reader = new CompressionDecorator(reader);
reader = new EncryptionDecorator(reader);
const content = reader.read("example.txt");
console.log("Final content:", content);