import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';

@Injectable()
export class WorkersService {
  constructor(
    @InjectModel(Worker.name)
    private workerModel: Model<Worker>,
  ) {}

  async create(createWorkerDto: CreateWorkerDto): Promise<Worker> {
    const worker = new this.workerModel(createWorkerDto);
    return await worker.save();
  }

  async findAll(): Promise<Worker[]> {
    return await this.workerModel.find();
  }

  async findOne(id: string): Promise<Worker> {
    return await this.workerModel.findById(id);
  }

  async update(id: string, updateWorkerDto: UpdateWorkerDto): Promise<Worker> {
    return await this.workerModel.findByIdAndUpdate(id, updateWorkerDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.workerModel.findByIdAndDelete(id);
  }
}
