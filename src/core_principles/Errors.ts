export class DatabaseConnectionError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "DatabaseConnectionError"
    }
}

export class UserNotFoundError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "UserNotFoundError"
    }
}

try {
    throw new DatabaseConnectionError("Unable to connect to the database.")
} catch (error) {
    if (error instanceof DatabaseConnectionError) {
        console.error(error.message) // Output: Unable to connect to the database.
    }
}

type SuccessResponse = { success: true; value: number }
type ErrorResponse = { success: false; error: string }

export function divide(dividend: number, divisor: number): SuccessResponse | ErrorResponse {
    if (divisor === 0) {
        return { success: false, error: "Cannot divide by zero." }
    }
    return { success: true, value: dividend / divisor }
}

const result = divide(10, 0)
if (result.success) {
    console.log("Division result:", result.value)
} else {
    console.error("Division error:", result.error) // Output: Division error: Cannot divide by zero.
}