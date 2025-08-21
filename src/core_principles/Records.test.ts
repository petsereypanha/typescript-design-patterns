import { test, expect } from "vitest";
import { stats } from "./Records";

test("stats returns correct usage stats record", () => {
    const input = [
        { name: "disk", totalFree: 100, totalUsed: 50, totalSize: 150 },
        { name: "memory", totalFree: 200, totalUsed: 100, totalSize: 300 }
    ];

    const result = stats(input);

    expect(result).toEqual({
        disk: { free: 100, used: 50, size: 150 },
        memory: { free: 200, used: 100, size: 300 }
    });
});

test("stats returns empty object for empty input", () => {
    const result = stats([]);
    expect(result).toEqual({});
});