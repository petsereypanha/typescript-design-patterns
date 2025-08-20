 enum Direction {
        Up = 0,
        Down ,  // Implicitly 1
        Left,   // Implicitly 2
        Right,  // Implicitly 3
    }
    enum Permission {
        Read = "read",
        Write = "write",
        Delete = "delete",
    }

    function grantPermission(permission: Permission) {
        switch (permission) {
            case Permission.Read:
                console.log("Read permission granted.");
                break;
            case Permission.Write:
                console.log("Write permission granted.");
                break;
            case Permission.Delete:
                console.log("Delete permission granted.");
                break;
            default:
                console.log("Unknown permission.");
        }
    }

    enum Color {
        Red,
        Green,
        Blue,
    }

 export {
    Direction,
    Permission,
    grantPermission,
    Color,
 }