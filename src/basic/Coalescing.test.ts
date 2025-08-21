import {test,expect} from "vitest";
import {User} from "./Coalescing";


test("Coalescing", () => {
    const user = new User("John", "Doe", false);
    expect(user.getFullName()).toBe("John Doe");
    expect(user.active).toBe(false);
    expect(user.firstName).toBe("John");
    expect(user.lastName).toBe("Doe");
})