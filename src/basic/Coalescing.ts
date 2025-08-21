export class User {
    firstName = '';
    lastName = '';
    #isActive = false;
    constructor(firstName: string, lastName: string, isActive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#isActive = isActive;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get active() {
        return this.#isActive;
    }
}