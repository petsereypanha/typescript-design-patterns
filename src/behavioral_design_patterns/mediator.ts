export interface WorkerMediator {
    triggerEvent(sender: object, message: string): void
}

export class WorkerCenter implements WorkerMediator {
    constructor(
        protected workerA: BatchWorker,
        protected workerB: SingleTaskWorker,
    ) {
        this.workerA.setMediator(this)
        this.workerB.setMediator(this)
    }

    public triggerEvent(sender: object, message: string): void {
        if (message.startsWith("single_job_completed")) {
            this.workerA.finalize()
        }
        if (message.startsWith("batch_job_completed")) {
            this.workerB.performWork()
        }
    }
}

export abstract class Workhorse {
    protected mediator: WorkerMediator | undefined

    constructor(mediator?: WorkerMediator) {
        this.mediator = mediator
    }

    setMediator(mediator: WorkerMediator): void {
        this.mediator = mediator
    }
}

export class BatchWorker extends Workhorse {
    public performWork(): void {
        console.log("Performing work in BatchWorker")
        this.mediator?.triggerEvent(this, "batch_job_completed")
    }

    public finalize(): void {
        console.log("Performing final work in BatchWorker")
        this.mediator?.triggerEvent(this, "final_job_completed")
    }
}

export class SingleTaskWorker extends Workhorse {
    public performWork(): void {
        console.log("Performing work in SingleTaskWorker")
        this.mediator?.triggerEvent(this, "single_job_completed")
    }
}