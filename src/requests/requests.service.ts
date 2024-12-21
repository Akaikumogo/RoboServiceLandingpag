import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
// import { UpdateRequestDto } from './dto/update-request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request.name)
    private requestModel: Model<Request>,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    const request = new this.requestModel(createRequestDto);
    return await request.save();
  }

  async findAll(): Promise<Request[]> {
    return await this.requestModel.find();
  }

  async findOne(id: string): Promise<Request> {
    return await this.requestModel.findById(id);
  }

  async update(id: string) {
    return await this.requestModel.findByIdAndUpdate(
      id,
      { readetAt: new Date() },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.requestModel.findByIdAndDelete(id);
  }
}
