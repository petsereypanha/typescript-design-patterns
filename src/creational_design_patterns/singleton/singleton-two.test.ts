import { test, expect, describe } from "vitest"
import { Singleton } from "./singleton-two";



describe("Singleton Pattern Tests", () => {
    test("it returns the same instance", () => {
        const instance1 = Singleton.getInstance();
        const instance2 = Singleton.getInstance();
        expect(instance1).toBe(instance2);
    });

});