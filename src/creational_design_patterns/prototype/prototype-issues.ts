interface Prototype {
    clone(): Prototype
}

class Person implements Prototype {
    constructor(
        public name: string,
        public age: number,
    ) {}

    clone(): Person {
        const cloned = Object.create(this)
        return cloned
    }
}

// Usage
const person: Prototype = new Person("John", 30)
const clonedPerson = person.clone()

// Type casting is required to access properties of Person
const clonedPersonName = (clonedPerson as Person).name
console.log(clonedPersonName) // Output: 'John'

class BasePrototype implements Prototype {
    clone(): BasePrototype {
        const cloned = Object.create(this)
        return cloned
    }
}

class Person2 extends BasePrototype {
    constructor(
        public name: string,
        public age: number,
    ) {
        super()
    }
}

class Employee extends BasePrototype {
    constructor(
        public name: string,
        public salary: number,
    ) {
        super()
    }
}