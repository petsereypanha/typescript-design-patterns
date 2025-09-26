export interface Subscriber {
    notify(message?: any): void
}

export abstract class Subject {
    private subscribers: Subscriber[] = []

    public addSubscriber(s: Subscriber): void {
        this.subscribers.push(s)
    }

    public removeSubscriber(s: Subscriber): void {
        const index = this.subscribers.indexOf(s)
        if (index !== -1) {
            this.subscribers.splice(index, 1)
        }
    }

    public notify(message?: any): void {
        console.log("Notifying all subscribers")
        this.subscribers.forEach((s) => s.notify(message))
    }
}

class ConcreteSubject extends Subject {
    private state: any;

    getState(): any {
        return this.state;
    }

    setState(state: any) {
        this.state = state;
        this.notify(this.state);
    }
}
class ConcreteSubscriber implements Subscriber {
    private state: any;

    constructor(private subject: ConcreteSubject) {}

    public notify(message: any): void {
        this.state = message;
        console.log(`ConcreteSubscriber: Received update with state: ${this.state}`);
    }
}

const subject = new ConcreteSubject();
const subscriberA = new ConcreteSubscriber(subject);
subject.addSubscriber(subscriberA);
const subscriberB = new ConcreteSubscriber(subject);
subject.addSubscriber(subscriberB);
subject.setState(19);

subject.removeSubscriber(subscriberB);
subject.setState(21);
// Output:
// Notifying all subscribers
// ConcreteSubscriber: Received update with state: 21