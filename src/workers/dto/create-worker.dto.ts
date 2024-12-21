import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkerDto {
  @ApiProperty({
    description: 'Ishchining ismi ',
    example: 'Sarvarbek',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'ishchining surati',
    example: 'imageUrl',
  })
  @IsNotEmpty()
  @IsString()
  image: string;
}
