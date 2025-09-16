export interface SupportTicket {
    getId(): number
    getCustomer(): string
    getIssue(): string
    getPriority(): number
    setResolution(resolution: string): void
    getResolution(): string | null
}
export class CustomerSupportTicket implements SupportTicket {
    private resolution: string | null = null
    constructor(
        private id: number,
        private customer: string,
        private issue: string,
        private priority: number,
    ) {}

    getId(): number {
        return this.id
    }
    getCustomer(): string {
        return this.customer
    }
    getIssue(): string {
        return this.issue
    }
    getPriority(): number {
        return this.priority
    }
    setResolution(resolution: string): void {
        this.resolution = resolution
    }
    getResolution(): string | null {
        return this.resolution
    }
}
export abstract class SupportHandler {
    protected nextHandler: SupportHandler | null = null
    setNext(handler: SupportHandler): SupportHandler {
        this.nextHandler = handler
        return handler
    }
    abstract handle(ticket: SupportTicket): void
}
export class FrontDeskHandler extends SupportHandler {
    handle(ticket: SupportTicket): void {
        if (ticket.getPriority() <= 1) {
            ticket.setResolution("Resolved by Front Desk: General inquiry handled")
            console.log(`Ticket ${ticket.getId()} handled by Front Desk`)
        } else if (this.nextHandler) {
            this.nextHandler.handle(ticket)
        }
    }
}
export class TechnicalSupportHandler extends SupportHandler {
    handle(ticket: SupportTicket): void {
        if (ticket.getPriority() <= 3) {
            ticket.setResolution("Resolved by Technical Support: Technical issue addressed")
            console.log(`Ticket ${ticket.getId()} handled by Technical Support`)
        } else if (this.nextHandler) {
            this.nextHandler.handle(ticket)
        }
    }
}