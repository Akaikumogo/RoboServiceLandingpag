import {
  IsString,
  IsDate,
  IsArray,
  IsNotEmpty,
  IsOptional,
  ArrayNotEmpty,
  // Matches,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({
    description: 'Loyihaning nomi',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  projectName: string;

  @ApiProperty({
    description: 'Loyihaning boshlanish vaqti',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @ApiProperty({
    description: 'Loyihaning tugash vaqti',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @ApiPropertyOptional({
    description: "Loyihaning ta'rifi (ixtiyoriy)",
    type: String,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Uploaded image files',
    type: 'array',
    items: { type: 'string', format: 'binary' },
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  images: string[];
  @ApiProperty({
    description: "Loyihada ishtirok etgan ishchilar ID'lari",
    type: [Number],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsNotEmpty({ each: true })
  employeeIds: number[];
}
