import { TextEditor, EditorCaretaker, EditorMemento, TextEditorState } from "./memento"
import { test, expect, describe, beforeEach, vi } from "vitest"

describe("Memento Pattern - Text Editor Tests", () => {
    let editor: TextEditor
    let caretaker: EditorCaretaker

    beforeEach(() => {
        editor = new TextEditor()
        caretaker = new EditorCaretaker(editor)
    })

    describe("EditorMemento", () => {
        test("should correctly store and retrieve editor state", () => {
            const state: TextEditorState = { content: "Test Content", cursorPosition: 4 }
            const memento = new EditorMemento(state)
            expect(memento.getState()).toEqual(state)
        })
    })

    describe("TextEditor", () => {
        test("should correctly type text", () => {
            editor.type("Hello")
            expect(editor.getContent()).toBe("Hello")
            expect(editor.getCursorPosition()).toBe(5)
        })

        test("should correctly move cursor", () => {
            editor.type("Hello")
            editor.moveCursor(2)
            expect(editor.getCursorPosition()).toBe(2)
        })

        test("should save and restore state correctly", () => {
            editor.type("Hello")
            const memento = editor.save()
            editor.type(" World")
            expect(editor.getContent()).toBe("Hello World")
            editor.restore(memento)
            expect(editor.getContent()).toBe("Hello")
            expect(editor.getCursorPosition()).toBe(5)
        })
    })

    describe("EditorCaretaker", () => {
        test("should save editor states", () => {
            editor.type("Hello")
            caretaker.save()
            editor.type(" World")
            caretaker.save()
            expect(editor.getContent()).toBe("Hello World")
        })

        test("should undo to previous state", () => {
            editor.type("Hello")
            caretaker.save()
            editor.type(" World")
            caretaker.save()
            caretaker.undo()
            expect(editor.getContent()).toBe("Hello")
        })

        test("should redo to next state", () => {
            editor.type("Hello")
            caretaker.save()
            editor.type(" World")
            caretaker.save()
            caretaker.undo()
            caretaker.redo()
            expect(editor.getContent()).toBe("Hello World")
        })

        test("should not undo beyond the first state", () => {
            editor.type("Hello")
            caretaker.save()
            caretaker.undo()
            caretaker.undo() // This should have no effect
            expect(editor.getContent()).toBe("Hello")
        })

        test("should not redo beyond the last saved state", () => {
            editor.type("Hello")
            caretaker.save()
            editor.type(" World")
            caretaker.save()
            caretaker.redo() // This should have no effect
            expect(editor.getContent()).toBe("Hello World")
        })
    })

    describe("Integration", () => {
        test("should handle a complex sequence of operations", () => {
            editor.type("Hello")
            caretaker.save()
            editor.type(" World")
            caretaker.save()
            editor.moveCursor(5)
            editor.type("Beautiful ")
            caretaker.save()
            expect(editor.getContent()).toBe("HelloBeautiful  World")
            caretaker.undo()
            expect(editor.getContent()).toBe("Hello World")
            caretaker.undo()
            expect(editor.getContent()).toBe("Hello")
            caretaker.redo()
            caretaker.redo()
            expect(editor.getContent()).toBe("HelloBeautiful  World")
        })
    })
})