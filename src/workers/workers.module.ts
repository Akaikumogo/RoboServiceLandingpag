import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { Worker, WorkerSchema } from './entities/worker.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
  ],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
