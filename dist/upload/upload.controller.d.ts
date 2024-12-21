import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadImage(file: Express.Multer.File): {
        message: string;
        file: {
            originalName: string;
            filename: string;
            path: string;
        };
    };
}
