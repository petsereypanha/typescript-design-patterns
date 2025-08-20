import {expect, test} from "vitest";
import {SSHUser} from "./Visibility";


test("Visibility test", () => {
    const ssh = new SSHUser("private", "public");
    expect(ssh.getBase64()).toBe("cHVibGlj");
})