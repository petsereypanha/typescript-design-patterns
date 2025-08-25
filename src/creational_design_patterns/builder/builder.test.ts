import { ConcreteCarBuilder, Engine, Transmission, BodyStyle, Interior, Wheels } from './builder-one';
import { test, expect, describe, beforeEach } from 'vitest'

describe('ConcreteCarBuilder', () => {
    let carBuilder: ConcreteCarBuilder;

    beforeEach(() => {
        carBuilder = new ConcreteCarBuilder();
    });

    test('builds a car with the correct properties', () => {
        const engine = new Engine();
        const transmission = new Transmission();
        const bodyStyle = new BodyStyle();
        const interior = new Interior();
        const wheels = new Wheels();

        const car = carBuilder
            .setEngine(engine)
            .setTransmission(transmission)
            .setBodyStyle(bodyStyle)
            .setInterior(interior)
            .setWheels(wheels)
            .build();

        expect(car.engine).toBe(engine);
        expect(car.transmission).toBe(transmission);
        expect(car.bodyStyle).toBe(bodyStyle);
        expect(car.interior).toBe(interior);
        expect(car.wheels).toBe(wheels);
    });
});