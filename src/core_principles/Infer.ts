// Define a box type that can hold any type of value
interface Box<T> {
    value: T
}

// Define a type to unpack a box and reveal its value type
type UnpackBox<A> = A extends Box<infer E> ? E : A

// Example usage:
type intStash = UnpackBox<{ value: 10 }> // type is number
type stringStash = UnpackBox<{ value: "123" }> // type is string
type booleanStash = UnpackBox<true> // type is boolean