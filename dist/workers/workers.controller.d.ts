import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
export declare class WorkersController {
    private readonly workersService;
    constructor(workersService: WorkersService);
    create(createWorkerDto: CreateWorkerDto): Promise<import("./entities/worker.entity").Worker>;
    findAll(): Promise<import("./entities/worker.entity").Worker[]>;
    findOne(id: string): Promise<import("./entities/worker.entity").Worker>;
    update(id: string, updateWorkerDto: UpdateWorkerDto): Promise<import("./entities/worker.entity").Worker>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/worker.entity").Worker> & import("./entities/worker.entity").Worker & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
