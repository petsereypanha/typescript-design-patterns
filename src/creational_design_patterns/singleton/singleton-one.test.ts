import {SettingsManager} from './singleton-one';
import { test, expect, beforeEach} from 'vitest'

let settings1: SettingsManager;
beforeEach(() => {
    settings1 = SettingsManager.getInstance();
})

test('it returns the same instance', () => {
    const settings2 = SettingsManager.getInstance();
    expect(settings1).toBe(settings2);
})

test('it shares state across instances', () => {
    settings1.set("theme", "light");
    const settings2 = SettingsManager.getInstance();
    expect(settings2.get("theme")).toBe("light");
})