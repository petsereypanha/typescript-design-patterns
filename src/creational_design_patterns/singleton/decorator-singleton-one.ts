function Singleton<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        private static _instance: T | null = null;
        constructor(...args: any[]) {
            super(...args)
            if (!(<any>this.constructor)._instance) {
                ;(<any>this.constructor)._instance = this
            }
            return (<any>this.constructor)._instance
        }
    } as unknown as T & { _instance: T }
}

@Singleton
class DecoratedSingleton {
    constructor() {
        console.log("DecoratedSingleton instance created")
    }

    public someMethod(): void {
        console.log("Some method called")
    }
}

// Usage example
const decoratedSingleton1 = new DecoratedSingleton()
decoratedSingleton1.someMethod() // Output: Some method called

const decoratedSingleton2 = new DecoratedSingleton()
decoratedSingleton2.someMethod() // Output: Some method called

console.log(decoratedSingleton1 === decoratedSingleton2) // Output: true