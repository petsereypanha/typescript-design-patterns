type IsArray<T> = T extends any[] ? true : false

type Test1 = IsArray<number> // false
type Test2 = IsArray<string[]> // true
type Test3 = IsArray<boolean[]> // true

// Another example: create a type that extracts the element type of an array
type ArrayElementType<T> = T extends (infer U)[] ? U : never

// Define some test cases
type Element1 = ArrayElementType<number[]> // number
type Element2 = ArrayElementType<string[]> // string