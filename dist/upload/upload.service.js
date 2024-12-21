"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const fs = require("fs");
const uuid_1 = require("uuid");
let UploadService = class UploadService {
    constructor() {
        this.uploadPath = './uploads';
        if (!fs.existsSync(this.uploadPath)) {
            fs.mkdirSync(this.uploadPath);
        }
    }
    uploadFile(file) {
        const filename = this.generateFileName(file.originalname);
        const filepath = `${this.uploadPath}/${filename}`;
        fs.writeFileSync(filepath, file.buffer);
        return {
            originalName: file.originalname,
            filename,
            path: filepath,
        };
    }
    generateFileName(originalname) {
        const fileExtension = (0, path_1.extname)(originalname);
        return `${(0, uuid_1.v4)()}${fileExtension}`;
    }
    validateImageFile(file) {
        const allowedTypes = ['.jpg', '.jpeg', '.png', '.webp'];
        const fileExt = (0, path_1.extname)(file.originalname).toLowerCase();
        return allowedTypes.includes(fileExt);
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UploadService);
//# sourceMappingURL=upload.service.js.map