import { Document } from 'mongoose';
export declare class Worker extends Document {
    name: string;
    image: string;
}
export declare const WorkerSchema: import("mongoose").Schema<Worker, import("mongoose").Model<Worker, any, any, any, Document<unknown, any, Worker> & Worker & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Worker, Document<unknown, {}, import("mongoose").FlatRecord<Worker>> & import("mongoose").FlatRecord<Worker> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
