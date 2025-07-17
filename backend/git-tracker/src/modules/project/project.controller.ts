import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ProjectService } from './project.service';
import { createProjectSchema } from './project.schema';
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() body: any) {
    const result = createProjectSchema.safeParse(body);
    if (!result.success) {
      throw new BadRequestException(result.error.errors);
    }
    return this.projectService.create(result.data);
  }
}
