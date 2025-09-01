export interface MetricCalculator {
    getDistanceInMeters(): number
}
export class MetricSystem implements MetricCalculator {
    private distanceInMeters: number

    constructor(distanceInMeters: number) {
        this.distanceInMeters = distanceInMeters
    }

    getDistanceInMeters(): number {
        return this.distanceInMeters
    }
}

export class ImperialSystem {
    private distanceInFeet: number

    constructor(distanceInFeet: number) {
        this.distanceInFeet = distanceInFeet
    }

    getDistanceInFeet(): number {
        return this.distanceInFeet
    }
}

export class ImperialToMetricAdapter implements MetricCalculator {
    private imperialSystem: ImperialSystem

    constructor(imperialSystem: ImperialSystem) {
        this.imperialSystem = imperialSystem
    }

    getDistanceInMeters(): number {
        const feet = this.imperialSystem.getDistanceInFeet()

        if (typeof feet !== "number" || isNaN(feet)) {
            throw new Error("Invalid distance in feet provided")
        }

        return feet * 0.3048 // Convert feet to meters
    }
}

export class Reporter {
    static reportDistance(calculator: MetricCalculator) {
        console.log(`The distance is ${calculator.getDistanceInMeters()} meters.`)
    }
}

const metricDistance = new MetricSystem(5)
Reporter.reportDistance(metricDistance)

const imperialDistance = new ImperialSystem(10)
const adapter = new ImperialToMetricAdapter(imperialDistance)
Reporter.reportDistance(adapter)