import {expect, test} from "vitest";
import {House, Room} from "./Compositions";

test("Associations test", () => {
    const room = new Room("Living Room");
    const house = new House([room]);
    house.addRoom(new Room("Bedroom"));
    house.addRoom(new Room("Kitchen"));
    const rooms = house.getRooms();
    expect(rooms.length).toBe(3);
    expect(rooms[0].getName()).toBe("Living Room");
    expect(rooms[1].getName()).toBe("Bedroom");
    expect(rooms[2].getName()).toBe("Kitchen");
})