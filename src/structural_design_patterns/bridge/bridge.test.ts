import { WateringMechanism, MistSprayer, TropicalPlantCare } from "./bridge"
import { test, expect, describe, beforeEach } from "vitest"

class MockWateringMechanism implements WateringMechanism {
    waterCalls: number = 0
    lastWaterAmount: number = 0
    waterLevel: number = 1000

    water(amount: number): void {
        this.waterCalls++
        this.lastWaterAmount = amount
        this.waterLevel -= amount
    }
    checkWaterLevel(): number {
        return this.waterLevel
    }
    refill(amount: number): void {
        this.waterLevel += amount
    }
}

describe("Watering Mechanism Tests", () => {
    test("MistSprayer waters correctly", () => {
        const drip = new MistSprayer()
        const initialLevel = drip.checkWaterLevel()
        drip.water(100)
        expect(drip.checkWaterLevel()).toBe(initialLevel - 100)
    })
    test("Refilling works", () => {
        const mist = new MistSprayer()
        const mistInitial = mist.checkWaterLevel()
        mist.refill(100)
        expect(mist.checkWaterLevel()).toBe(mistInitial + 100)
    })
})

describe("Smart Plant Care Tests", () => {
    let mockMechanism: MockWateringMechanism

    beforeEach(() => {
        mockMechanism = new MockWateringMechanism()
    })

    test("TropicalPlantCare waters when below threshold", () => {
        const tropicalCare = new TropicalPlantCare(mockMechanism)
        tropicalCare.waterPlant(55)
        expect(mockMechanism.waterCalls).toBe(1)
        expect(mockMechanism.lastWaterAmount).toBe(100)
    })

    test("TropicalPlantCare adjusts for weather", () => {
        const tropicalCare = new TropicalPlantCare(mockMechanism)
        const initialThreshold = (tropicalCare as any).moistureThreshold

        tropicalCare.adjustWatering("high humidity")
        expect((tropicalCare as any).moistureThreshold).toBe(initialThreshold + 10)

        tropicalCare.adjustWatering("dry spell")
        expect((tropicalCare as any).moistureThreshold).toBe(initialThreshold)
    })
})