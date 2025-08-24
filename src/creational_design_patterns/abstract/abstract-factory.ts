export interface VehicleFactory {
    createCar(): Car
    createMotorcycle(): Motorcycle
}

export interface Car {
    drive(): void
}

export interface Motorcycle {
    ride(): void
}

export class CompanyAFactory implements VehicleFactory {
    createCar(): Car {
        return new CompanyACar()
    }

    createMotorcycle(): Motorcycle {
        return new CompanyAMotorcycle()
    }
}

export class CompanyACar implements Car {
    drive(): void {
        console.log("Driving a Company A car")
    }
}

export class CompanyAMotorcycle implements Motorcycle {
    ride(): void {
        console.log("Riding a Company A motorcycle")
    }
}

export class CompanyBFactory implements VehicleFactory {
    createCar(): Car {
        return new CompanyBCar()
    }

    createMotorcycle(): Motorcycle {
        return new CompanyBMotorcycle()
    }
}

export class CompanyBCar implements Car {
    drive(): void {
        console.log("Driving a Company B car")
    }
}

export class CompanyBMotorcycle implements Motorcycle {
    ride(): void {
        console.log("Riding a Company B motorcycle")
    }
}

function produceVehicles(factory: VehicleFactory) {
    const car = factory.createCar()
    const motorcycle = factory.createMotorcycle()

    car.drive()
    motorcycle.ride()
}

// Using Company A's factory
produceVehicles(new CompanyAFactory())
// Output:
// Driving a Company A car
// Riding a Company A motorcycle

// Using Company B's factory
produceVehicles(new CompanyBFactory())
// Output:
// Driving a Company B car
// Riding a Company B motorcycle