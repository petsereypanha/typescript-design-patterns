export interface FileSystemComponent {
    display(): string;
}
export class File implements FileSystemComponent {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): string {
        return `File: ${this.name}`;
    }
}
export class Directory implements FileSystemComponent {
    private name: string;
    private components: FileSystemComponent[];

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }
    add(component: FileSystemComponent): void {
        this.components.push(component);
    }
    remove(component: FileSystemComponent): void {
        const index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
        }
    }
    display(): string {
        let result = `Directory: ${this.name}\n`;
        for (const component of this.components) {
            result += `- ${component.display()}\n`;
        }
        return result;
    }
}

// Usage example
const root = new Directory("Root");
const file1 = new File("file1.txt");
const file2 = new File("file2.txt");
const subDir = new Directory("Subdirectory");
const file3 = new File("file3.txt");
subDir.add(file3);
root.add(file1);
root.add(file2);
root.add(subDir);
console.log(root.display());