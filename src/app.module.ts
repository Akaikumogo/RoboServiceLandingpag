import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { RequestsModule } from './requests/requests.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersModule } from './workers/workers.module';
import { UploadModule } from './upload/upload.module';
// import { SwaggerModule } from '@nestjs/swagger';
@Module({
  imports: [
    ProjectsModule,
    RequestsModule,
    WorkersModule,
    UploadModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestdb', {
      serverSelectionTimeoutMS: 5000,
      retryAttempts: 3,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
