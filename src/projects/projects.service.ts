import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name)
    private ProjectModel: Model<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = new this.ProjectModel(createProjectDto);
    return await project.save();
  }

  async findAll(): Promise<Project[]> {
    return await this.ProjectModel.find();
  }

  async findOne(id: string): Promise<Project> {
    return await this.ProjectModel.findById(id);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    return await this.ProjectModel.findByIdAndUpdate(id, updateProjectDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.ProjectModel.findByIdAndDelete(id);
  }
}
