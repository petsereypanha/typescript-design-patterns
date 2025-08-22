import { test, expect, vi } from "vitest";
import { DatabaseConnectionError, UserNotFoundError, divide } from './Errors';

// Test custom error classes
test("DatabaseConnectionError should have correct name and message", () => {
  const errorMessage = "Failed to connect to the database.";
  const error = new DatabaseConnectionError(errorMessage);

  expect(error.name).toBe("DatabaseConnectionError");
  expect(error.message).toBe(errorMessage);
  expect(error instanceof Error).toBe(true);
  expect(error instanceof DatabaseConnectionError).toBe(true);
});

test("UserNotFoundError should have correct name and message", () => {
  const errorMessage = "User with ID 123 not found.";
  const error = new UserNotFoundError(errorMessage);

  expect(error.name).toBe("UserNotFoundError");
  expect(error.message).toBe(errorMessage);
  expect(error instanceof Error).toBe(true);
  expect(error instanceof UserNotFoundError).toBe(true);
});

// Test error handling with instanceof
test("should handle DatabaseConnectionError correctly", () => {
  const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  try {
    throw new DatabaseConnectionError("Unable to connect to the database.");
  } catch (error) {
    if (error instanceof DatabaseConnectionError) {
      console.error(error.message);
    }
  }

  expect(consoleSpy).toHaveBeenCalledWith("Unable to connect to the database.");
  consoleSpy.mockRestore();
});

test("should handle UserNotFoundError correctly", () => {
  const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  try {
    throw new UserNotFoundError("User not found.");
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      console.error(error.message);
    }
  }

  expect(consoleSpy).toHaveBeenCalledWith("User not found.");
  consoleSpy.mockRestore();
});

// Test divide function success cases
test("divide should return success result for valid division", () => {
  const result = divide(10, 2);

  expect(result.success).toBe(true);
  if (result.success) {
    expect(result.value).toBe(5);
  }
});

test("divide should return success result for negative numbers", () => {
  const result = divide(-10, 2);

  expect(result.success).toBe(true);
  if (result.success) {
    expect(result.value).toBe(-5);
  }
});

test("divide should return success result for decimal numbers", () => {
  const result = divide(5, 2);

  expect(result.success).toBe(true);
  if (result.success) {
    expect(result.value).toBe(2.5);
  }
});

// Test divide function error cases
test("divide should return error for division by zero", () => {
  const result = divide(10, 0);

  expect(result.success).toBe(false);
  if (!result.success) {
    expect(result.error).toBe("Cannot divide by zero.");
  }
});

test("divide should return error for division by negative zero", () => {
  const result = divide(10, -0);

  expect(result.success).toBe(false);
  if (!result.success) {
    expect(result.error).toBe("Cannot divide by zero.");
  }
});

// Test the example usage from the code
test("should handle divide result checking correctly", () => {
  const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

  // Test error case
  const errorResult = divide(10, 0);
  if (errorResult.success) {
    console.log("Division result:", errorResult.value);
  } else {
    console.error("Division error:", errorResult.error);
  }

  expect(consoleErrorSpy).toHaveBeenCalledWith("Division error:", "Cannot divide by zero.");

  // Test success case
  const successResult = divide(10, 2);
  if (successResult.success) {
    console.log("Division result:", successResult.value);
  } else {
    console.error("Division error:", successResult.error);
  }

  expect(consoleLogSpy).toHaveBeenCalledWith("Division result:", 5);

  consoleLogSpy.mockRestore();
  consoleErrorSpy.mockRestore();
});

// Test type narrowing
test("should properly narrow types based on success property", () => {
  const successResult = divide(6, 3);
  const errorResult = divide(6, 0);

  // TypeScript should narrow these types correctly
  if (successResult.success) {
    expect(typeof successResult.value).toBe("number");
    // @ts-expect-error - error property should not exist on success type
    expect(successResult.error).toBeUndefined();
  }

  if (!errorResult.success) {
    expect(typeof errorResult.error).toBe("string");
    // @ts-expect-error - value property should not exist on error type
    expect(errorResult.value).toBeUndefined();
  }
});