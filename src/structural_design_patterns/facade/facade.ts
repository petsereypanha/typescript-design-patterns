// Define the interfaces for our subsystems
export interface SubsystemA {
    operationA1(): void
    operationA2(): void
}

export interface SubsystemB {
    operationB1(): void
    operationB2(): void
}
export class ConcreteSubsystemA implements SubsystemA {
    operationA1(): void {
        console.log("SubsystemA: Performing operation A1")
    }

    operationA2(): void {
        console.log("SubsystemA: Performing operation A2")
    }
}
export class ConcreteSubsystemB implements SubsystemB {
    operationB1(): void {
        console.log("SubsystemB: Performing operation B1")
    }

    operationB2(): void {
        console.log("SubsystemB: Performing operation B2")
    }
}

export class Facade {
    private subsystemA: SubsystemA
    private subsystemB: SubsystemB

    constructor(subsystemA: SubsystemA, subsystemB: SubsystemB) {
        this.subsystemA = subsystemA
        this.subsystemB = subsystemB
    }

    public simplifiedOperation1(): void {
        console.log("Facade: Coordinating operations in simplifiedOperation1")
        this.subsystemA.operationA1()
        this.subsystemB.operationB1()
    }

    public simplifiedOperation2(): void {
        console.log("Facade: Coordinating operations in simplifiedOperation2")
        this.subsystemA.operationA2()
        this.subsystemB.operationB2()
        this.subsystemA.operationA1()
    }
}

// Client code
function clientCode(facade: Facade) {
    console.log("Client: Calling simplifiedOperation1")
    facade.simplifiedOperation1()

    console.log("\nClient: Calling simplifiedOperation2")
    facade.simplifiedOperation2()
}

// Usage
const subsystemA = new ConcreteSubsystemA()
const subsystemB = new ConcreteSubsystemB()
const facade = new Facade(subsystemA, subsystemB)

clientCode(facade)

interface AuthService {
    login(username: string, password: string): Promise<string>
    logout(): Promise<void>
}
interface UserProfileService {
    getUserProfile(userId: string): Promise<object>
    updateUserProfile(userId: string, data: object): Promise<object>
}