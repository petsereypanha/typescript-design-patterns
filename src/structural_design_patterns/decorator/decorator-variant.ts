function Encrypt() {
    return function <T extends { new (...args: any[]): FileReader }>(constructor: T) {
        return class extends constructor {
            read(filePath: string): string {
                const content = super.read(filePath)
                console.log("Encrypting content")
                return `Encrypted(${content})`
            }
        }
    }
}
function Compress() {
    return function <T extends { new (...args: any[]): FileReader }>(constructor: T) {
        return class extends constructor {
            read(filePath: string): string {
                const content = super.read(filePath)
                console.log("Compressing content")
                return `Compressed(${content})`
            }
        }
    }
}

interface FileReader {
    read(filePath: string): string
}

@Compress()
@Encrypt()
class SimpleFileReader implements FileReader {
    read(filePath: string): string {
        console.log(`Reading file from: ${filePath}`)
        return `Content of ${filePath}`
    }
}

// Usage
const reader = new SimpleFileReader()
const content = reader.read("example.txt")
console.log("Final content:", content)