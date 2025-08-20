import {test} from "vitest";
import {findUserByName} from "./Refactoring";


test("Give name to find", () => {
    const users = [
        {name: "Alice"},
        {name: "Bob"},
        {name: "Charlie"}
    ];
    const user = findUserByName(users, "Bob");
    if (user) {
        console.log(`Found user: ${user.name}`); // Output: Found user: Bob
    }
    else {
        console.log("User not found");
    }

})