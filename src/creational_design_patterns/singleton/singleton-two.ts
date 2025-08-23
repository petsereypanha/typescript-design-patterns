export class Singleton{
    // Store the single instance instance
    private static instance: Singleton;
    // Prevents creation of new instances
    private constructor(){}
    // Method to retrieve the single instance
    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}