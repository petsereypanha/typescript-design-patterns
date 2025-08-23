import {Car, Truck, CarFactory, TruckFactory} from './factory-method-one';
import { test, expect, beforeEach} from 'vitest'

let carFactory: CarFactory;
let truckFactory: TruckFactory;

beforeEach(() => {
    carFactory = new CarFactory();
    truckFactory = new TruckFactory();
})

test('it crate a Car type using the factory', () => {
    const vehicle = carFactory.createVehicle();
    expect(vehicle).toBeInstanceOf(Car);
})

test('it creates a Truck type using the factory', () => {
    const vehicle = truckFactory.createVehicle();
    expect(vehicle).toBeInstanceOf(Truck);
});