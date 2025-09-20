import { Light, TurnOnLightCommand, TurnOffLightCommand, SmartHomeController } from "./command"
import { test, expect, describe, beforeEach, vi } from "vitest"

describe("Smart Home Command Pattern", () => {
    let light: Light
    let controller: SmartHomeController

    beforeEach(() => {
        light = new Light()
        controller = new SmartHomeController()
    })

    test("TurnOnLightCommand should turn on the light", () => {
        const spy = vi.spyOn(light, "turnOn")
        const command = new TurnOnLightCommand(light)
        command.execute()
        expect(spy).toHaveBeenCalled()
    })

    test("TurnOffLightCommand should turn off the light", () => {
        const spy = vi.spyOn(light, "turnOff")
        const command = new TurnOffLightCommand(light)
        command.execute()
        expect(spy).toHaveBeenCalled()
    })

    test("SmartHomeController should execute added commands", () => {
        const turnOnSpy = vi.spyOn(light, "turnOn")
        const turnOffSpy = vi.spyOn(light, "turnOff")

        controller.addCommand(new TurnOnLightCommand(light))
        controller.addCommand(new TurnOffLightCommand(light))
        controller.executeCommands()

        expect(turnOnSpy).toHaveBeenCalled()
        expect(turnOffSpy).toHaveBeenCalled()
    })

    test("SmartHomeController should clear commands after execution", () => {
        controller.addCommand(new TurnOnLightCommand(light))
        controller.executeCommands()

        const spy = vi.spyOn(light, "turnOn")
        controller.executeCommands()

        expect(spy).not.toHaveBeenCalled()
    })
})