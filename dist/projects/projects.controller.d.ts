import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto): Promise<import("./entities/project.entity").Project>;
    findAll(): Promise<import("./entities/project.entity").Project[]>;
    findOne(id: string): Promise<import("./entities/project.entity").Project>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/project.entity").Project> & import("./entities/project.entity").Project & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/project.entity").Project> & import("./entities/project.entity").Project & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
