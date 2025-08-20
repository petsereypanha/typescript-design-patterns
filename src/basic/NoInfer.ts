class Animal {
    sleep() {}
}
class Cat extends Animal {
    miaw() {}
}
function petAnimal<T>(value: T,
                      getDefault: () => T): T {
    // ... function logic ...
    return value || getDefault()
}
// This would compile without errors
petAnimal(new Cat(), () => new Animal())