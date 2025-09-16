import {
    CustomerSupportTicket,
    FrontDeskHandler,
    TechnicalSupportHandler,
} from "./chain-of-responsibility"
import { test, expect, describe, beforeEach, vi } from "vitest"

describe("Chain of Responsibility - Support System", () => {
    let frontDesk: FrontDeskHandler
    let techSupport: TechnicalSupportHandler

    beforeEach(() => {
        frontDesk = new FrontDeskHandler()
        techSupport = new TechnicalSupportHandler()
        frontDesk.setNext(techSupport)
    })

    test("Low priority ticket should be handled by Front Desk", () => {
        const ticket = new CustomerSupportTicket(1, "John Doe", "General inquiry", 1)
        frontDesk.handle(ticket)
        expect(ticket.getResolution()).toContain("Resolved by Front Desk")
    })

    test("Medium priority ticket should be handled by Technical Support", () => {
        const ticket = new CustomerSupportTicket(2, "Jane Smith", "Software bug", 3)
        frontDesk.handle(ticket)
        expect(ticket.getResolution()).toContain("Resolved by Technical Support")
    })

    test("Chain should process tickets in order", () => {
        const consoleSpy = vi.spyOn(console, "log")
        const ticket = new CustomerSupportTicket(4, "Alice Brown", "Complex issue", 3)
        frontDesk.handle(ticket)
        expect(consoleSpy).toHaveBeenCalledTimes(1)
        expect(consoleSpy).toHaveBeenNthCalledWith(1, expect.stringContaining("Technical Support"))
        consoleSpy.mockRestore()
    })

    test("Ticket should maintain its properties through the chain", () => {
        const ticket = new CustomerSupportTicket(5, "Eve Wilson", "Billing issue", 2)
        frontDesk.handle(ticket)
        expect(ticket.getId()).toBe(5)
        expect(ticket.getCustomer()).toBe("Eve Wilson")
        expect(ticket.getIssue()).toBe("Billing issue")
        expect(ticket.getPriority()).toBe(2)
    })

    test("Setting next handler should return the handler for chaining", () => {
        const newFrontDesk = new FrontDeskHandler()
        const result = newFrontDesk.setNext(techSupport)
        expect(result).toBe(techSupport)
    })
})