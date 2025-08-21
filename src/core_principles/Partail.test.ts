import {test, expect} from "vitest";
import {createPartialProduct} from "./Partial";

test("Partial test", () => {
    const minimalProduct = createPartialProduct({name: "Test Product", price: 9.99});
    expect(minimalProduct).toEqual({
        name: "Test Product",
        price: 9.99,
        stock: 10,
        imageUrl: undefined
    });
})