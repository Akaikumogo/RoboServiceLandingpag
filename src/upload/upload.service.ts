import { Injectable } from '@nestjs/common';
import { extname } from 'path';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  private readonly uploadPath = './uploads';

  constructor() {
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(this.uploadPath)) {
      fs.mkdirSync(this.uploadPath);
    }
  }

  uploadFile(file: Express.Multer.File) {
    const filename = this.generateFileName(file.originalname);
    const filepath = `${this.uploadPath}/${filename}`;

    // Save file
    fs.writeFileSync(filepath, file.buffer);

    return {
      originalName: file.originalname,
      filename,
      path: filepath,
    };
  }

  private generateFileName(originalname: string) {
    const fileExtension = extname(originalname);
    return `${uuidv4()}${fileExtension}`;
  }

  // Validate file type
  validateImageFile(file: Express.Multer.File): boolean {
    const allowedTypes = ['.jpg', '.jpeg', '.png', '.webp'];
    const fileExt = extname(file.originalname).toLowerCase();
    return allowedTypes.includes(fileExt);
  }
}
