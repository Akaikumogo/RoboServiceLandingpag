import { Model } from 'mongoose';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';
export declare class WorkersService {
    private workerModel;
    constructor(workerModel: Model<Worker>);
    create(createWorkerDto: CreateWorkerDto): Promise<Worker>;
    findAll(): Promise<Worker[]>;
    findOne(id: string): Promise<Worker>;
    update(id: string, updateWorkerDto: UpdateWorkerDto): Promise<Worker>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Worker> & Worker & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
