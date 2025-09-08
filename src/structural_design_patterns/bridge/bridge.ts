export interface WateringMechanism {
    water(amount: number): void
    checkWaterLevel(): number
    refill(amount: number): void
}

export abstract class SmartPlantCare {
    protected mechanism: WateringMechanism
    protected moistureThreshold: number

    constructor(mechanism: WateringMechanism, moistureThreshold: number) {
        this.mechanism = mechanism
        this.moistureThreshold = moistureThreshold
    }

    abstract waterPlant(currentMoisture: number): void
    abstract adjustWatering(weatherForecast: string): void
}

export class MistSprayer  implements WateringMechanism {
    private waterReservoir: number = 500 // ml

    water(amount: number): void {
        this.waterReservoir -= amount
        console.log(`Misting ${amount}ml of water`)
    }

    checkWaterLevel(): number {
        return this.waterReservoir
    }

    refill(amount: number): void {
        this.waterReservoir += amount
        console.log(`Refilled misting system with ${amount}ml of water`)
    }
}
export class TropicalPlantCare extends SmartPlantCare {
    constructor(mechanism: WateringMechanism) {
        super(mechanism, 60) // Tropical plants prefer moist soil
    }

    waterPlant(currentMoisture: number): void {
        if (currentMoisture < this.moistureThreshold) {
            this.mechanism.water(100)
        } else {
            console.log("Tropical plant doesn't need watering")
        }
    }

    adjustWatering(weatherForecast: string): void {
        if (weatherForecast.includes("humidity")) {
            this.moistureThreshold += 10
            console.log("Adjusted watering for humid weather")
        } else if (weatherForecast.includes("dry")) {
            this.moistureThreshold -= 10
            console.log("Adjusted watering for dry weather")
        }
    }
}