// The product interface
export interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
}
// Concrete Product
export class Car implements Vehicle {
    startEngine(): void {
        console.log("Car engine started.");
    }

    stopEngine(): void {
        console.log("Car engine stopped.");
    }

}
// Concrete Product
export class Truck implements Vehicle{
    startEngine(): void {
        console.log("Truck engine started.");
    }

    stopEngine(): void {
        console.log("Truck engine stopped.");
    }

}
// The Creator interface
export interface VehicleFactory {
    createVehicle(): Vehicle;
}

export class CarFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new Car();
    }
}
export class TruckFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new Truck();
    }
}
// Client code
const carFactory = new CarFactory();
const truckFactory = new TruckFactory();

const factories: VehicleFactory[] = [carFactory, truckFactory];
factories.forEach(factory => {
    const vehicle = factory.createVehicle();
    vehicle.startEngine();
    vehicle.stopEngine();
});

enum VehicleType {
    Car,
    Truck
}

class VehicleCreator {
    static createVehicle(type: VehicleType): Vehicle {
        switch (type) {
            case VehicleType.Car:
                return new Car();
            case VehicleType.Truck:
                return new Truck();
            default:
                throw new Error("Invalid vehicle type");
        }
    }
}

// Client code using the static factory method
const myCar = VehicleCreator.createVehicle(VehicleType.Car);
myCar.startEngine();
myCar.stopEngine();

