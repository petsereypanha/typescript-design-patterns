export interface AnimalPrototype {
    clone(): AnimalPrototype;
}

export class Dog implements AnimalPrototype {
    constructor(
        public breed: string,
        public age: number,
    ) {
        this.breed = breed
        this.age = age
    }

    clone(): Dog {
        const cloned = Object.create(this)
        return cloned
    }
}

export class Cat implements AnimalPrototype {
    constructor(
        public furColor: string,
        public weight: number,
    ) {
        this.furColor = furColor
        this.weight = weight
    }

    clone(): Cat {
        const cloned = Object.create(this)
        return cloned
    }
}

let dog: AnimalPrototype = new Dog("Boxer", 3);
let clonedDog: Dog = dog.clone() as Dog;
console.log(`Breed: ${clonedDog.breed}, Age: ${clonedDog.age}`); // Output: Dog { breed: 'Boxer', age: 3 }

let cat: AnimalPrototype = new Cat("Scott", 4.5);
let clonedCat: Cat = cat.clone() as Cat;
console.log(`FurColor: ${clonedCat.furColor}, Weight: ${clonedCat.weight}`); // Output: Cat { furColor: 'Scott', weight: 4.5 }