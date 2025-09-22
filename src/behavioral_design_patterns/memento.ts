export interface TextEditorState {
    content: string
    cursorPosition: number
}

// Memento.ts
export class EditorMemento {
    constructor(private state: TextEditorState) {}

    getState(): TextEditorState {
        return this.state
    }
}

export class TextEditor {
    private state: TextEditorState
    constructor(initialContent: string = "") {
        this.state = { content: initialContent, cursorPosition: 0 }
    }
    type(text: string): void {
        const { content, cursorPosition } = this.state
        this.state.content = content.slice(0, cursorPosition) + text + content.slice(cursorPosition)
        this.state.cursorPosition += text.length
    }
    moveCursor(position: number): void {
        this.state.cursorPosition = Math.max(0, Math.min(position, this.state.content.length))
    }
    getContent(): string {
        return this.state.content
    }
    getCursorPosition(): number {
        return this.state.cursorPosition
    }
    save(): EditorMemento {
        return new EditorMemento({ ...this.state })
    }
    restore(memento: EditorMemento): void {
        this.state = { ...memento.getState() }
    }
}
export class EditorCaretaker {
    private mementos: EditorMemento[] = []
    private currentIndex: number = -1
    constructor(private editor: TextEditor) {}
    save(): void {
        if (this.currentIndex < this.mementos.length - 1) {
            this.mementos = this.mementos.slice(0, this.currentIndex + 1)
        }
        this.mementos.push(this.editor.save())
        this.currentIndex++
    }
    undo(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--
            this.editor.restore(this.mementos[this.currentIndex])
        }
    }
    redo(): void {
        if (this.currentIndex < this.mementos.length - 1) {
            this.currentIndex++
            this.editor.restore(this.mementos[this.currentIndex])
        }
    }
}

// Usage example
const editor = new TextEditor()
const caretaker = new EditorCaretaker(editor)
editor.type("Hello, ")
caretaker.save()
editor.type("world!")
caretaker.save()
editor.moveCursor(7)
editor.type("beautiful ")
caretaker.save()
console.log(editor.getContent()) // Output: Hello, beautiful world!
caretaker.undo()
console.log(editor.getContent()) // Output: Hello, world!
caretaker.undo()
console.log(editor.getContent()) // Output: Hello,
caretaker.redo()
console.log(editor.getContent()) // Output: Hello, world!