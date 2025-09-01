import { ImperialToMetricAdapter, MetricCalculator, ImperialSystem } from "./adapter"
import { test, expect, describe, beforeEach, vi } from "vitest"

describe("ImperialToMetricAdapter", () => {
    let imperialSystem: ImperialSystem
    let adapter: MetricCalculator

    beforeEach(() => {
        imperialSystem = new ImperialSystem(10)
        adapter = new ImperialToMetricAdapter(imperialSystem)
    })

    test("adapter correctly converts feet to meters", () => {
        const meters = adapter.getDistanceInMeters()
        expect(meters).toBeCloseTo(3.048, 3)
    })

    test("adapter implements MetricCalculator interface", () => {
        expect(adapter).toHaveProperty("getDistanceInMeters")
    })

    test("adapter uses the ImperialSystem instance", () => {
        const spyOnGetDistanceInFeet = vi.spyOn(imperialSystem, "getDistanceInFeet")
        adapter.getDistanceInMeters()
        expect(spyOnGetDistanceInFeet).toHaveBeenCalled()
    })
})