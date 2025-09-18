import { WorkerCenter, BatchWorker, SingleTaskWorker } from './mediator';
import { test, expect, describe, beforeEach, vi } from "vitest"

describe('Mediator Pattern Tests', () => {
    let batchWorker: BatchWorker;
    let singleTaskWorker: SingleTaskWorker;
    let mediator: WorkerCenter;

    beforeEach(() => {
        batchWorker = new BatchWorker();
        singleTaskWorker = new SingleTaskWorker();
        mediator = new WorkerCenter(batchWorker, singleTaskWorker);
    });

    test('BatchWorker notifies Mediator on performWork', () => {
        const spyTriggerEvent = vi.spyOn(mediator, 'triggerEvent');
        batchWorker.performWork();
        expect(spyTriggerEvent).toHaveBeenCalledWith(batchWorker, 'batch_job_completed');
    });

    test('SingleTaskWorker notifies Mediator on performWork', () => {
        const spyTriggerEvent = vi.spyOn(mediator, 'triggerEvent');
        singleTaskWorker.performWork();
        expect(spyTriggerEvent).toHaveBeenCalledWith(singleTaskWorker, 'single_job_completed');
    });

    test('Mediator triggers BatchWorker finalize on SingleTaskWorker completion', () => {
        const spyFinalize = vi.spyOn(batchWorker, 'finalize');
        mediator.triggerEvent(singleTaskWorker, 'single_job_completed');
        expect(spyFinalize).toHaveBeenCalled();
    });

    test('Mediator triggers SingleTaskWorker performWork on BatchWorker completion', () => {
        const spyPerformWork = vi.spyOn(singleTaskWorker, 'performWork');
        mediator.triggerEvent(batchWorker, 'batch_job_completed');
        expect(spyPerformWork).toHaveBeenCalled();
    });
});