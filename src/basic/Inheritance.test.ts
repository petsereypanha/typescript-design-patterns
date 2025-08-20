import {test, expect} from "vitest";
import {UsersApiClient} from "./Inheritance";

test("Inheritance test", () => {
    const client = new UsersApiClient("https://api.example.com");
    expect(client.getUsers()).toBe("Fetching users from https://api.example.com/users")
})