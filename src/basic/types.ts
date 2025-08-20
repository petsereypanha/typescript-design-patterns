type T = 'T';
type B = 'A';
type A = T | B;

type User = {
    name: string;
}
export type ExtendedUser = User & {
    age: number;
}
function callMe<T>(parameter: T): T {
    return parameter;
}
export interface Box<T> {
    content: T;
}