export interface Comparable<T> {
    compareTo(other: Comparable<T>): -1 | 0 | 1;
}