import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsDate,
  IsArray,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiPropertyOptional({
    description: 'Loyihaning nomi (ixtiyoriy)',
    type: String,
  })
  @IsString()
  @IsOptional()
  projectName?: string;

  @ApiPropertyOptional({
    description: 'Loyihaning boshlanish vaqti (ixtiyoriy)',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  startDate?: Date;

  @ApiPropertyOptional({
    description: 'Loyihaning tugash vaqti (ixtiyoriy)',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  endDate?: Date;

  @ApiPropertyOptional({
    description: "Loyihaning ta'rifi (ixtiyoriy)",
    type: String,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    description: 'Rasmlar arrayi (ixtiyoriy)',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];

  @ApiPropertyOptional({
    description: "Loyihada ishtirok etgan ishchilar ID'lari (ixtiyoriy)",
    type: [Number],
  })
  @IsArray()
  @IsOptional()
  @IsNotEmpty({ each: true })
  employeeIds?: number[];
}
