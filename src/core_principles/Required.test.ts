import {expect, test} from "vitest";
import {displayPublicProfile} from "./Required";


test("Required test", () => {
    expect(displayPublicProfile({ name: "Jane Doe", email: "jane.doe@example.com", boi: "Some Boi", location: "Some Location" })).toBeUndefined();
})