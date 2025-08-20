class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
}
abstract class Animal {
    abstract makeSound(): void;
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

export {
    User,
    Dog
}