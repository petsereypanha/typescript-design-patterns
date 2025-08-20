function login(originalMethod: any, context: ClassMethodDecoratorContext){
    function replaceMethod(this: any, ...args: any[]){
        console.log(`Calling ${String(context.name)} with arguments`)
        return originalMethod.apply(this, args);
    }
    return replaceMethod;
}
class Calulator {
    @login
    add(x: number, y: number): number {
        return x + y;
    }

}

export {
    Calulator
}