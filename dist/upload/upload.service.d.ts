export declare class UploadService {
    private readonly uploadPath;
    constructor();
    uploadFile(file: Express.Multer.File): {
        originalName: string;
        filename: string;
        path: string;
    };
    private generateFileName;
    validateImageFile(file: Express.Multer.File): boolean;
}
