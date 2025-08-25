export class Engine {}
export class Transmission {}
export class BodyStyle {}
export class Interior {}
export class Wheels {}
export class Car {
    constructor(
        public engine?: Engine,
        public transmission?: Transmission,
        public bodyStyle?: BodyStyle,
        public interior?: Interior,
        public wheels?: Wheels,
    ) {}
}

export interface CarBuilder {
    setEngine(engine: Engine): CarBuilder
    setTransmission(transmission: Transmission): CarBuilder
    setBodyStyle(bodyStyle: BodyStyle): CarBuilder
    setInterior(interior: Interior): CarBuilder
    setWheels(wheels: Wheels): CarBuilder
    build(): Car
}

export class ConcreteCarBuilder implements CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car()
    }

    reset() {
        this.car = new Car()
    }

    setEngine(engine: Engine): CarBuilder {
        this.car.engine = engine
        return this
    }

    setTransmission(transmission: Transmission): CarBuilder {
        this.car.transmission = transmission
        return this
    }

    setBodyStyle(bodyStyle: BodyStyle): CarBuilder {
        this.car.bodyStyle = bodyStyle
        return this
    }

    setInterior(interior: Interior): CarBuilder {
        this.car.interior = interior
        return this
    }

    setWheels(wheels: Wheels): CarBuilder {
        this.car.wheels = wheels
        return this
    }

    build(): Car {
        const result = this.car
        this.reset()
        return result
    }
}

// Generic builder interface
interface Builder<T> {
    build(): T;
}

// Generic builder implementation
class GenericBuilder<T> implements Builder<T> {
    private obj: Partial<T> = {};

    public set<K extends keyof T>(key: K, value: T[K]): GenericBuilder<T> {
        this.obj[key] = value;
        return this;
    }

    public build(): T {
        return this.obj as T;
    }
}