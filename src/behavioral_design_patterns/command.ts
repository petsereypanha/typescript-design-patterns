export interface Command {
    execute(): void
}

// Receiver: Smart Home Device
export class Light {
    turnOn(): void {
        console.log("Light is turned on")
    }

    turnOff(): void {
        console.log("Light is turned off")
    }
}
export class TurnOnLightCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOn()
    }
}
export class TurnOffLightCommand implements Command {
    constructor(private light: Light) {}

    execute(): void {
        this.light.turnOff()
    }
}

export class SmartHomeController {
    private commands: Command[] = [];

    addCommand(command: Command): void {
        this.commands.push(command);
    }

    executeCommands(): void {
        this.commands.forEach(command => command.execute());
        this.commands = [];
    }
}

const light = new Light();
const controller = new SmartHomeController();
controller.addCommand(new TurnOnLightCommand(light));
controller.addCommand(new TurnOffLightCommand(light));
controller.executeCommands();