export interface State {
    handle(): void
}
export class Context {
    constructor(private state: State) {}
    public request(): void {
        this.state.handle()
    }
    public changeState(newState: State): void {
        this.state = newState
    }
    public getState(): State {
        return this.state;
    }
}
export class ConcreteStateA implements State {
    public handle(): void {
        console.log("Handling request in ConcreteStateA")
    }
}
export class ConcreteStateB implements State {
    public handle(): void {
        console.log("Handling request in ConcreteStateB")
    }
}
const context = new Context(new ConcreteStateA())
context.request() // Output: Handling request in ConcreteStateA

context.changeState(new ConcreteStateB())
context.request() // Output: Handling request in ConcreteStateB