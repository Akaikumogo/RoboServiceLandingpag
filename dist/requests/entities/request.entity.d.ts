import { Document } from 'mongoose';
export declare class Request extends Document {
    name: string;
    email: string;
    phone: string;
    message: string;
    status: boolean;
    createdAt: Date;
    readetAt: Date;
}
export declare const RequestSchema: import("mongoose").Schema<Request, import("mongoose").Model<Request, any, any, any, Document<unknown, any, Request> & Request & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Request, Document<unknown, {}, import("mongoose").FlatRecord<Request>> & import("mongoose").FlatRecord<Request> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
