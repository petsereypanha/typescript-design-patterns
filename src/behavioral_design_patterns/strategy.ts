export interface SortStrategy {
    sort(data: number[]): number[];
}
export class BubbleSort implements SortStrategy {
    sort(data: number[]): number[] {
        console.log("Sorting using bubble sort");
        // Bubble sort implementation
        const arr = [...data];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
}
export class QuickSort implements SortStrategy {
    sort(data: number[]): number[] {
        console.log("Sorting using quick sort");
        const arr = [...data];
        if (arr.length <= 1) return arr;
        const pivot = arr[0];
        const left = arr.filter((x, i) => x <= pivot && i !== 0);
        const right = arr.filter(x => x > pivot);
        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}
export class Sorter {
    constructor(private strategy: SortStrategy) {}

    setStrategy(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    sort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

const data = [64, 34, 25, 12, 22, 11, 90];
const sorter = new Sorter(new BubbleSort());
console.log("Original array:", data);
console.log("Sorted with bubble sort:", sorter.sort(data));
sorter.setStrategy(new QuickSort());
console.log("Sorted with quick sort:", sorter.sort(data));