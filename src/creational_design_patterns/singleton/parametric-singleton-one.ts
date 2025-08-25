export class ParametricSingleton {
    private static instances: Map<string, ParametricSingleton> = new Map()

    private constructor(private param: string) {
        this.param = param;
    }

    public getParam(): string {
        return this.param;
    }

    static getInstance(param: string): ParametricSingleton {
        if (!ParametricSingleton.instances.has(param)) {
            ParametricSingleton.instances.set(param, new ParametricSingleton(param))
        }
        return ParametricSingleton.instances.get(param) as ParametricSingleton
    }
}
const singletonA = ParametricSingleton.getInstance('/v1/users');
console.log(singletonA.getParam()); // Output: /v1/users

const singletonB = ParametricSingleton.getInstance('/v2/users');
console.log(singletonB.getParam()); // Output: /v2/users

const singletonC = ParametricSingleton.getInstance('/v1/users');
console.log(singletonA === singletonC); // Output: true
console.log(singletonA === singletonB); // Output: false