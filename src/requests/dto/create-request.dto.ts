import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateRequestDto {
  @ApiProperty({
    description: 'Foydalanuvchi ismi',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Foydalanuvchi emaili',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'Foydalanuvchi telefon raqami',
    example: '+998991234567',
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty({
    description: 'Foydalanuvchi xabar matni',
    example: "Men RoboService bilan ko'proq ma'lumot olishni xoxlayman",
  })
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
