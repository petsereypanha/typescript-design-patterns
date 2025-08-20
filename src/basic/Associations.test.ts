import {expect, test} from "vitest";
import {Blog, Author} from "./Associations";

test( "Blog Auth", () => {
    const author = new Author("1", "Alice");
    const blog = new Blog("1", author);
    expect(blog.id).toBe("1");
})