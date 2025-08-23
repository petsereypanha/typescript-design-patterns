export class SettingsManager {
    // The single instance of the class
    private static instance: SettingsManager;
    private settings: Map<string, any>;

    // The constructor is private to prevent direct instantiation
    private constructor() {
        this.settings = new Map<string, any>();
        // Simulate loading settings from a file
        this.settings.set("theme", "dark");
        this.settings.set("language", "en");
        console.log("SettingsManager initialized.");
    }

    // The static method to get the instance
    public static getInstance(): SettingsManager {
        if (!SettingsManager.instance) {
            SettingsManager.instance = new SettingsManager();
        }
        return SettingsManager.instance;
    }

    public get(key: string): any {
        return this.settings.get(key);
    }

    public set(key: string, value: any): void {
        this.settings.set(key, value);
    }
}

// Client Code
const settings1 = SettingsManager.getInstance();
const settings2 = SettingsManager.getInstance();

if (settings1 === settings2) {
    console.log("Singleton works, both variables contain the same instance.");
}

console.log(`Current theme: ${settings1.get("theme")}`); // Current theme: dark
settings2.set("theme", "light");
console.log(`New theme: ${settings1.get("theme")}`); // New theme: light