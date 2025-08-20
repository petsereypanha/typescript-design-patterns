class Room {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }
}

class House {
    private rooms: Room[]

    constructor(rooms?: Room[]) {
        this.rooms = rooms || []
    }

    addRoom(room: Room): void {
        this.rooms.push(room)
    }

    removeRoom(room: Room): void {}

    getRooms(): Room[] {
        return this.rooms
    }
}

export {
    Room,
    House
}