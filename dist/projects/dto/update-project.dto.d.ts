import { CreateProjectDto } from './create-project.dto';
declare const UpdateProjectDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProjectDto>>;
export declare class UpdateProjectDto extends UpdateProjectDto_base {
    projectName?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
    images?: string[];
    employeeIds?: number[];
}
export {};
