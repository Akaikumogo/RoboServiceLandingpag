import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Model } from 'mongoose';
import { Project } from './entities/project.entity';
export declare class ProjectsService {
    private ProjectModel;
    constructor(ProjectModel: Model<Project>);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: string): Promise<Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<import("mongoose").Document<unknown, {}, Project> & Project & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Project> & Project & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
