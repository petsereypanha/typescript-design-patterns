import {
    VehicleFactory,
    CompanyAFactory,
    CompanyBFactory,
    CompanyACar,
    CompanyAMotorcycle,
    CompanyBCar,
    CompanyBMotorcycle,
} from "./abstract-factory"
import { test, expect, describe } from "vitest"

describe("Company A Factory", () => {
    const factory: VehicleFactory = new CompanyAFactory()

    test("it creates a Company A car", () => {
        const car = factory.createCar()
        expect(car).toBeInstanceOf(CompanyACar)
    })

    test("it creates a Company A motorcycle", () => {
        const motorcycle = factory.createMotorcycle()
        expect(motorcycle).toBeInstanceOf(CompanyAMotorcycle)
    })
})

describe("Company B Factory", () => {
    const factory: VehicleFactory = new CompanyBFactory()

    test("it creates a Company B car", () => {
        const car = factory.createCar()
        expect(car).toBeInstanceOf(CompanyBCar)
    })

    test("it creates a Company B motorcycle", () => {
        const motorcycle = factory.createMotorcycle()
        expect(motorcycle).toBeInstanceOf(CompanyBMotorcycle)
    })
})