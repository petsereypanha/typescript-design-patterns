export const isObject = (value: unknown): value is object => {
    // Type guard using type assertion
    return typeof value === "object" && value !== null && !Array.isArray(value)
}