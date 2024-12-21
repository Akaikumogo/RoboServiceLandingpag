import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Projects') // Swagger uchun bo'lim nomi
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiOperation({ summary: 'Yangi loyiha yaratish' }) // Endpoint haqida qisqa ma'lumot
  @ApiResponse({ status: 201, description: 'Loyiha muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Noto‘g‘ri ma’lumot kiritildi.' })
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @ApiOperation({ summary: 'Barcha loyihalarni olish' })
  @ApiResponse({ status: 200, description: 'Barcha loyihalar ro‘yxati.' })
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @ApiOperation({ summary: 'Bitta loyihani olish' })
  @ApiResponse({ status: 200, description: 'Loyiha ma’lumotlari.' })
  @ApiResponse({ status: 404, description: 'Loyiha topilmadi.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @ApiOperation({ summary: 'Loyihani yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Loyiha muvaffaqiyatli yangilandi.',
  })
  @ApiResponse({ status: 404, description: 'Loyiha topilmadi.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @ApiOperation({ summary: 'Loyihani o‘chirish' })
  @ApiResponse({
    status: 200,
    description: 'Loyiha muvaffaqiyatli o‘chirildi.',
  })
  @ApiResponse({ status: 404, description: 'Loyiha topilmadi.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
