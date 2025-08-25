import { Dog, Cat, AnimalPrototype } from './prototype';
import { test, expect, describe } from 'vitest'

describe("Prototype Pattern", () => {
    test("it creates a Dog from a prototype", () => {
        const originalDog = new Dog("Scott", 3);
        const clonedDog = originalDog.clone();

        expect(clonedDog).toBeInstanceOf(Dog);
        expect(clonedDog).not.toBe(originalDog); // Check for separate instances
        expect(clonedDog.breed).toBe("Scott");
        expect(clonedDog.age).toBe(3);
    });

    test("it creates a Cat from a prototype", () => {
        const originalCat = new Cat("Ginger", 4.5);
        const clonedCat = originalCat.clone();

        expect(clonedCat).toBeInstanceOf(Cat);
        expect(clonedCat).not.toBe(originalCat); // Check for separate instances
        expect(clonedCat.furColor).toBe("Ginger");
        expect(clonedCat.weight).toBe(4.5);
    });

    test("cloned objects have different references", () => {
        const dog: AnimalPrototype = new Dog("Lamb", 3);
        const clonedDog: Dog = dog.clone() as Dog;

        const cat: AnimalPrototype = new Cat("Ginger", 4.5);
        const clonedCat: Cat = cat.clone() as Cat;

        expect(clonedDog).not.toBe(dog);
        expect(clonedCat).not.toBe(cat);
    });

    test("cloned objects can be modified independently", () => {
        const originalDog = new Dog("Labrador", 3);
        const clonedDog = originalDog.clone();

        clonedDog.age = 5;

        expect(originalDog.age).toBe(3); // Original object remains unchanged
        expect(clonedDog.age).toBe(5); // Cloned object can be modified independently
    });

});