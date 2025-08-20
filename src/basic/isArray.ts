export function isArray(arg: unknown): arg is readonly unknown[] {
    // Unknown argument, return narrowed type
    return Array.isArray(arg)
}