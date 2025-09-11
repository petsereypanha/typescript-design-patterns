import { Sorter, BubbleSort, QuickSort } from './strategy';
import { test, expect, describe, beforeEach, vi } from "vitest"

describe('Sorting Strategies', () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = [11, 12, 22, 25, 34, 64, 90];

    describe('BubbleSort', () => {
        test('should correctly sort an array', () => {
            const bubbleSort = new BubbleSort();
            expect(bubbleSort.sort([...unsortedArray])).toEqual(sortedArray);
        });
    });

    describe('QuickSort', () => {
        test('should correctly sort an array', () => {
            const quickSort = new QuickSort();
            expect(quickSort.sort([...unsortedArray])).toEqual(sortedArray);
        });
    });

    describe('Sorter', () => {
        let sorter: Sorter;

        beforeEach(() => {
            sorter = new Sorter(new BubbleSort());
        });

        test('should use BubbleSort strategy by default', () => {
            const spy = vi.spyOn(BubbleSort.prototype, 'sort');
            sorter.sort([...unsortedArray]);
            expect(spy).toHaveBeenCalled();
        });

        test('should switch to QuickSort strategy when set', () => {
            const quickSortSpy = vi.spyOn(QuickSort.prototype, 'sort');
            const bubbleSortSpy = vi.spyOn(BubbleSort.prototype, 'sort');

            sorter.setStrategy(new QuickSort());
            sorter.sort([...unsortedArray]);

            expect(quickSortSpy).toHaveBeenCalled();
            expect(bubbleSortSpy).not.toHaveBeenCalled();
        });

        test('should correctly sort array regardless of strategy', () => {
            expect(sorter.sort([...unsortedArray])).toEqual(sortedArray);

            sorter.setStrategy(new QuickSort());
            expect(sorter.sort([...unsortedArray])).toEqual(sortedArray);
        });
    });
});