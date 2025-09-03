import { File, Directory } from "./composite"
import { test, expect, describe, beforeEach } from "vitest"

describe("File", () => {
    test("creates a file with the correct name", () => {
        const file = new File("test.txt")
        expect(file.display()).toBe("File: test.txt")
    })
})

describe("Directory", () => {
    let directory: Directory

    beforeEach(() => {
        directory = new Directory("TestDir")
    })

    test("creates a directory with the correct name", () => {
        expect(directory.display()).toBe("Directory: TestDir\n")
    })

    test("adds and display components correctly", () => {
        const file1 = new File("file1.txt")
        const file2 = new File("file2.txt")
        directory.add(file1)
        directory.add(file2)
        expect(directory.display()).toBe("Directory: TestDir\n- File: file1.txt\n- File: file2.txt\n")
    })

    test("removes components correctly", () => {
        const file1 = new File("file1.txt")
        const file2 = new File("file2.txt")
        directory.add(file1)
        directory.add(file2)
        directory.remove(file1)
        expect(directory.display()).toBe("Directory: TestDir\n- File: file2.txt\n")
    })
})

describe("FileSystem Integration", () => {
    test("displays a complex directory structure", () => {
        const root = new Directory("Root")
        const file1 = new File("file1.txt")
        const subDir1 = new Directory("SubDir1")
        const file2 = new File("file2.txt")
        const subDir2 = new Directory("SubDir2")
        const file3 = new File("file3.txt")

        subDir2.add(file3)
        subDir1.add(file2)
        subDir1.add(subDir2)
        root.add(file1)
        root.add(subDir1)

        expect(root.display()).toMatchInlineSnapshot(`
      "Directory: Root
      - File: file1.txt
      - Directory: SubDir1
      - File: file2.txt
      - Directory: SubDir2
      - File: file3.txt"
    `)
    })
})