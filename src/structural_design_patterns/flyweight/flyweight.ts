// Flyweight Interface
export interface Flyweight {
    perform(customization: { id: string }): void
}

// Concrete Flyweight
export class ConcreteFlyweight implements Flyweight {
    constructor(private sharedState: Object) {}

    public perform(customization: { id: string }): void {
        console.log(
            `ConcreteFlyweight: Shared (${JSON.stringify(this.sharedState)}) and unique (${customization.id}) state.`,
        )
    }
}

export class FlyweightFactory {
    private cache = new Map<string, Flyweight>()

    public getFlyweight(sharedState: Object): Flyweight {
        const key = JSON.stringify(sharedState)

        if (!this.cache.has(key)) {
            console.log("FlyweightFactory: Can't find a flyweight, creating new one.")
            this.cache.set(key, new ConcreteFlyweight(sharedState))
        } else {
            console.log("FlyweightFactory: Reusing existing flyweight.")
        }

        return this.cache.get(key)!
    }

    public listFlyweights(): void {
        const count = this.cache.size
        console.log(`\nFlyweightFactory: I have ${count} flyweights:`)
        this.cache.forEach((_, key) => {
            console.log(key);
        });
    }
}

// Client code
const factory = new FlyweightFactory()
function addCar(plates: string, owner: string, brand: string, model: string, color: string) {
    console.log("\nClient: Adding a car to database.")
    const flyweight = factory.getFlyweight({ brand, model, color })
    flyweight.perform({ id: `${plates}_${owner}` })
}
addCar("CL234IR", "James Doe", "Chevrolet", "Camaro2018", "pink")
addCar("CL234IR", "James Doe", "BMW", "M5", "red")
addCar("CL234IR", "James Doe", "BMW", "X1", "red")

factory.listFlyweights()