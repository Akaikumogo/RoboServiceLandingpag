import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { IdRequestDto } from './dto/read-request.dto';
export declare class RequestsController {
    private readonly requestsService;
    constructor(requestsService: RequestsService);
    create(createRequestDto: CreateRequestDto): Promise<import("./entities/request.entity").Request>;
    findAll(): Promise<import("./entities/request.entity").Request[]>;
    findOne(id: string): Promise<import("./entities/request.entity").Request>;
    update(readrequestdto: IdRequestDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/request.entity").Request> & import("./entities/request.entity").Request & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/request.entity").Request> & import("./entities/request.entity").Request & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
