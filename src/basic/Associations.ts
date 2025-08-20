interface Id<T extends string | number> {
    id: T
}
class Author {
    constructor(
        private id: string,
        private name: string,
    ) {}
}

class Blog implements Id<string> {
    id: string

    author: Author

    constructor(id: string, author: Author) {
        this.id = id

        this.author = author
    }
}

export {
    Author,
    Blog
}