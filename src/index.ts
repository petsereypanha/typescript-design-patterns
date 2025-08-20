import {introduction} from "./basic/introduction";
import {isArray} from "./basic/isArray";
import {isObject} from "./basic/isObject";
import {Permission,grantPermission,Color,Direction} from "./basic/enum";
import {Dog, User} from "./basic/Classes";
import {Box, ExtendedUser} from "./basic/types";
import {Calulator} from "./basic/Decorators";
import {calculateArea} from "./basic/Javascript-vs-typescript";
import {findUserByName} from "./basic/Refactoring";

export function main() {
    console.log("Basic TypeScript Example");
    // introduction();
    // Check if a value is an array
    const myList = { item1: "apple", item2: "orange" }
    console.log(isArray(myList))
    // Check if a value is an object
    console.log("Is myList an object?", isObject(myList));
    // Enum example
    grantPermission(Permission.Read); // Output: Read permission granted.
    console.log(`User direction is: ${Direction.Up}`); // Output: User direction is: 0
    console.log(`My color is: ${Color.Red}`); // Output: My color is
    // Class example
    const user = new User("John Doe");
    console.log(user.getName()); // Output: John Doe
    // abstruct class example
    new Dog().makeSound(); // Output: Woof!
    // TypeScript type example
    let usertype: ExtendedUser ={
        name: "Alice",
        age: 30
    }
    console.log(`User name: ${usertype.name}, age: ${usertype.age}`); // Output: User name: Alice, age: 30
    const numberBox: Box<number> = { content: 42 };
    // Decorator example
    new Calulator().add(1,2)
    // JavaScript vs TypeScript
    const area1 = calculateArea(5, 10);
    const area2 = calculateArea("20", "10");
    console.log(`Area1: ${area1}`); // Output: Area1: 50
    console.log(`Area2: ${area2}`); // Output: Area2:
    // refactoring
    console.log(findUserByName([{ name: "John" }, { name: "Doe" }], "John"));
}

main();