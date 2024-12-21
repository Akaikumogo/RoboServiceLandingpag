import { CreateRequestDto } from './dto/create-request.dto';
import { Model } from 'mongoose';
import { Request } from './entities/request.entity';
export declare class RequestsService {
    private requestModel;
    constructor(requestModel: Model<Request>);
    create(createRequestDto: CreateRequestDto): Promise<Request>;
    findAll(): Promise<Request[]>;
    findOne(id: string): Promise<Request>;
    update(id: string): Promise<import("mongoose").Document<unknown, {}, Request> & Request & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Request> & Request & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
